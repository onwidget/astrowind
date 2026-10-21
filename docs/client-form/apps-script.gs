/**
 * EFKA client requirements form: receives submissions from
 * https://efka-consulting.com/ihtiyac-formu, adds each one as a row to this
 * spreadsheet and emails the answers to NOTIFY_TO.
 *
 * Paste this into Extensions → Apps Script of the spreadsheet that should hold
 * the responses, then follow docs/client-form/SETUP.md in the website repo.
 *
 * Each submission carries its questions' labels as well as the answers, so the
 * sheet's header row is written from the website's form and grows on its own
 * when a question is added. Columns are matched by the question's key, which
 * is stored as a note on each header cell, so rewording a label on the website
 * does not move answers into a new column. Columns you add yourself (a
 * "Status" column, say) are left alone.
 */

const NOTIFY_TO = 'info@efka-consulting.com';
const SHEET_NAME = 'Yanıtlar';
const SENDER_NAME = 'EFKA Web Formu';

// Limits on what one submission may contain, so a forged request cannot
// flood the sheet.
const MAX_FIELDS = 80;
const MAX_LABEL = 200;
const MAX_VALUE = 5000;

// Filling in this many fields takes far longer; anything quicker is a bot.
const MIN_ELAPSED_MS = 3000;

// Cloudflare Turnstile: every submission must carry a token that Cloudflare
// issued to a visitor on one of these hostnames. The secret key is not in
// this file; it lives in Project Settings → Script Properties as
// TURNSTILE_SECRET (see SETUP.md).
const ALLOWED_HOSTNAMES = ['efka-consulting.com', 'www.efka-consulting.com'];
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

// At most this many accepted submissions per hour, so a flood cannot use up
// the daily email quota.
const MAX_PER_HOUR = 30;

// The closing note of the paper form.
const DISCLAIMER =
  'Bu form, ilk aday eşleştirmesi amacıyla hazırlanmıştır; iş sözleşmesi veya adayın müsait olduğuna dair bir ' +
  'teyit niteliği taşımaz. Çalışma koşulları ve yasal gereklilikler ayrıca kesinleştirilecektir.';

/** Receives a submission. The website posts JSON as text/plain. */
function doPost(e) {
  let payload;
  try {
    payload = JSON.parse(e.postData.contents);
  } catch (err) {
    return reply({ ok: false, error: 'bad-request' });
  }

  // The website has a hidden "website" field that people never see. Bots
  // fill it in, or submit within moments of loading the page. Answer as if
  // it worked so they do not retry.
  if (payload.website || Number(payload.elapsedMs) < MIN_ELAPSED_MS) {
    return reply({ ok: true });
  }

  const fields = clean(payload.fields);
  if (!fields.some((f) => f.value)) return reply({ ok: false, error: 'empty' });

  const check = verifyTurnstile(payload.turnstileToken);
  if (!check.ok) {
    console.warn('Turnstile rejected a submission: ' + check.reason);
    return reply({ ok: false, error: 'verification' });
  }

  const submittedAt = new Date();

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    if (!withinHourlyLimit()) {
      console.warn('Hourly limit of ' + MAX_PER_HOUR + ' submissions reached; submission refused.');
      return reply({ ok: false, error: 'busy' });
    }
    appendRow(submittedAt, fields);
  } finally {
    lock.releaseLock();
  }

  // The answers are already safe in the sheet, so a mail failure is logged
  // (Apps Script → Executions) rather than reported to the client as an error.
  try {
    sendEmail(submittedAt, fields);
  } catch (err) {
    console.error('Email failed: ' + err);
  }

  return reply({ ok: true });
}

/** Opening the web app URL in a browser shows this, which confirms the deployment. */
function doGet() {
  return ContentService.createTextOutput('EFKA client form endpoint is running.');
}

/**
 * Run this once from the editor (select it, press Run) before deploying. It
 * asks for the permissions the script needs, then writes a test row and sends
 * a test email, so you can check both before any client uses the form.
 */
function testSetup() {
  const fields = clean([
    { key: 'clientName', label: 'Müşteri / işveren adı soyadı', section: 'Test', value: 'TEST: delete this row' },
    { key: 'phone', label: 'Telefon / WhatsApp', section: 'Test', value: '+90 555 000 00 00' },
  ]);
  const now = new Date();
  const written = appendRow(now, fields);
  sendEmail(now, fields);

  // Show the tab, and say exactly where the row went.
  written.sheet.activate();
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  console.log(
    'Wrote the test row to row ' +
      written.row +
      ' of the "' +
      written.sheet.getName() +
      '" tab in "' +
      spreadsheet.getName() +
      '" (' +
      spreadsheet.getUrl() +
      '), and emailed ' +
      NOTIFY_TO
  );

  console.log(checkTurnstileSecret());
}

/**
 * Asks Cloudflare to verify a token that cannot be valid. With a correct
 * secret Cloudflare answers "invalid-input-response" (the token is wrong);
 * with a wrong secret it answers "invalid-input-secret".
 */
function checkTurnstileSecret() {
  const secret = PropertiesService.getScriptProperties().getProperty('TURNSTILE_SECRET');
  if (!secret) {
    return 'Turnstile: TURNSTILE_SECRET is NOT SET. The form will refuse every submission until it is added in Project Settings → Script Properties.';
  }
  const codes = siteverify(secret, 'setup-check')['error-codes'] || [];
  if (codes.indexOf('invalid-input-secret') !== -1) {
    return 'Turnstile: Cloudflare does not recognise TURNSTILE_SECRET. Copy the secret key again from the Cloudflare dashboard.';
  }
  return 'Turnstile: secret key accepted by Cloudflare.';
}

function verifyTurnstile(token) {
  const secret = PropertiesService.getScriptProperties().getProperty('TURNSTILE_SECRET');
  // Refuse rather than accept everything when the secret is missing.
  if (!secret) return { ok: false, reason: 'TURNSTILE_SECRET is not set in Script Properties' };
  if (!token) return { ok: false, reason: 'no token' };

  const result = siteverify(secret, String(token));
  if (!result.success) return { ok: false, reason: (result['error-codes'] || []).join(', ') || 'not successful' };

  // Cloudflare's test secret keys report "example.com" as the hostname.
  const testing = /^[123]x0+AA$/.test(secret);
  if (!testing && ALLOWED_HOSTNAMES.indexOf(result.hostname) === -1) {
    return { ok: false, reason: 'token issued on ' + result.hostname };
  }
  return { ok: true };
}

function siteverify(secret, token) {
  const response = UrlFetchApp.fetch(TURNSTILE_VERIFY_URL, {
    method: 'post',
    payload: { secret: secret, response: token },
    muteHttpExceptions: true,
  });
  try {
    return JSON.parse(response.getContentText());
  } catch (err) {
    return { success: false, 'error-codes': ['bad-response-' + response.getResponseCode()] };
  }
}

/** Counts accepted submissions per clock hour. Call while holding the script lock. */
function withinHourlyLimit() {
  const cache = CacheService.getScriptCache();
  const key = 'submissions-' + Math.floor(Date.now() / 3600000);
  const count = Number(cache.get(key) || 0);
  if (count >= MAX_PER_HOUR) return false;
  cache.put(key, String(count + 1), 3600);
  return true;
}

function clean(fields) {
  if (!Array.isArray(fields)) return [];
  return fields
    .slice(0, MAX_FIELDS)
    .filter((f) => f && /^[A-Za-z0-9_]{1,40}$/.test(String(f.key)))
    .map((f) => ({
      key: String(f.key),
      label: String(f.label || f.key).slice(0, MAX_LABEL),
      section: String(f.section || '').slice(0, MAX_LABEL),
      value: String(f.value == null ? '' : f.value).slice(0, MAX_VALUE),
    }));
}

function responsesSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const existing = spreadsheet.getSheetByName(SHEET_NAME);
  if (existing) return existing;

  // A new spreadsheet has one empty tab ("Sayfa1" or "Sheet1"). Use it rather
  // than adding a second tab beside it, where the responses are easy to miss.
  const sheets = spreadsheet.getSheets();
  if (sheets.length === 1 && sheets[0].getLastRow() === 0) return sheets[0].setName(SHEET_NAME);

  return spreadsheet.insertSheet(SHEET_NAME);
}

/** Adds the submission as a row. Returns the tab and row number it wrote. */
function appendRow(submittedAt, fields) {
  const sheet = responsesSheet();

  const all = [{ key: '_submittedAt', label: 'Gönderim zamanı', value: submittedAt }].concat(fields);

  // Row 1 holds the labels; each header cell's note holds the question's key.
  let keys = sheet.getLastColumn() > 0 ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getNotes()[0] : [];

  const added = all.filter((f) => keys.indexOf(f.key) === -1);
  if (added.length) {
    sheet
      .getRange(1, keys.length + 1, 1, added.length)
      .setValues([added.map((f) => f.label)])
      .setNotes([added.map((f) => f.key)])
      .setFontWeight('bold')
      .setWrap(true)
      .setVerticalAlignment('top');
    sheet.setFrozenRows(1);
    keys = keys.concat(added.map((f) => f.key));
  }

  const byKey = {};
  all.forEach((f) => (byKey[f.key] = f.value));
  sheet.appendRow(keys.map((key) => (key && key in byKey ? asCell(byKey[key]) : '')));
  return { sheet: sheet, row: sheet.getLastRow() };
}

/**
 * Sheets treats text starting with = + - or @ as a formula. A leading
 * apostrophe makes it plain text (and keeps "+90…" phone numbers intact);
 * Sheets hides the apostrophe.
 */
function asCell(value) {
  if (value instanceof Date) return value;
  const text = String(value);
  return /^[=+\-@\t\r]/.test(text) ? "'" + text : text;
}

function sendEmail(submittedAt, fields) {
  const find = (key) => (fields.find((f) => f.key === key) || {}).value || '';
  const name = find('clientName') || '(isimsiz / no name)';
  const clientEmail = find('email');

  const when = Utilities.formatDate(submittedAt, Session.getScriptTimeZone(), 'dd.MM.yyyy HH:mm');
  const sheetUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  const answered = fields.filter((f) => f.value);

  // The answers, grouped by section: plain text for the email's text part, and
  // one HTML table shared by the email body and the PDF.
  let text = 'Yeni müşteri ihtiyaç formu / New client requirements form\n' + when + '\n';
  let table = '<table style="border-collapse:collapse;width:100%;max-width:720px">';

  let section = null;
  answered.forEach((f) => {
    if (f.section && f.section !== section) {
      section = f.section;
      text += '\n== ' + section + ' ==\n';
      table +=
        '<tr><td colspan="2" style="padding:18px 0 6px;font-weight:bold;color:#977f52;border-bottom:1px solid #b49a6a">' +
        escapeHtml(section) +
        '</td></tr>';
    }
    text += f.label + ':\n' + f.value + '\n\n';
    table +=
      '<tr>' +
      '<td style="padding:6px 12px 6px 0;vertical-align:top;color:#6b6b6b;width:40%">' +
      escapeHtml(f.label) +
      '</td>' +
      // <br> rather than white-space:pre-wrap, which the PDF conversion ignores.
      '<td style="padding:6px 0;vertical-align:top">' +
      escapeHtml(f.value).replace(/\n/g, '<br>') +
      '</td>' +
      '</tr>';
  });
  table += '</table>';

  text += '\nTüm yanıtlar / All responses: ' + sheetUrl + '\n';
  const html =
    '<div style="font-family:Arial,sans-serif;font-size:14px;color:#0b1728">' +
    '<p style="margin:0 0 4px">Yeni müşteri ihtiyaç formu / New client requirements form</p>' +
    '<p style="margin:0 0 16px;color:#6b6b6b">' +
    escapeHtml(when) +
    '</p>' +
    table +
    '<p style="margin-top:24px"><a href="' +
    sheetUrl +
    '">Tüm yanıtlar / All responses</a></p></div>';

  const options = { name: SENDER_NAME, htmlBody: html };
  // Replying to the email then goes straight to the client.
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail)) options.replyTo = clientEmail;

  // A failed PDF should not cost the notification, so the email goes out
  // without the attachment in that case.
  try {
    options.attachments = [buildPdf(name, submittedAt, when, table)];
  } catch (err) {
    console.error('PDF failed: ' + err);
  }

  MailApp.sendEmail(NOTIFY_TO, 'Müşteri ihtiyaç formu: ' + name, text, options);
}

/**
 * The submission as a PDF on EFKA letterhead, converted by Google from the
 * same table as the email. Google's converter handles tables, inline styles
 * and embedded images but not web fonts or flexbox, so the layout is built
 * from tables and the logo (which is set in Cormorant Garamond) is an image.
 */
function buildPdf(name, submittedAt, when, table) {
  const doc =
    '<html><head><meta charset="utf-8"><title>Müşteri İhtiyaç Formu</title></head>' +
    '<body style="font-family:Arial,sans-serif;font-size:12px;color:#0b1728">' +
    // Letterhead: the efka | CONSULTING lockup, gold rule below.
    '<img src="data:image/png;base64,' +
    LOGO_PNG +
    '" width="206" height="48" alt="efka consulting">' +
    '<div style="border-top:1px solid #b49a6a;margin:12px 0 22px"></div>' +
    // Title and who the form is for.
    '<h1 style="margin:0 0 10px;font-size:18px;font-weight:normal">Ev Personeli | Müşteri İhtiyaç Formu</h1>' +
    '<table style="border-collapse:collapse;margin-bottom:6px;font-size:11px">' +
    '<tr><td style="padding:2px 16px 2px 0;color:#6b6b6b">Müşteri</td><td style="padding:2px 0">' +
    escapeHtml(name) +
    '</td></tr>' +
    '<tr><td style="padding:2px 16px 2px 0;color:#6b6b6b">Gönderim zamanı</td><td style="padding:2px 0">' +
    escapeHtml(when) +
    '</td></tr>' +
    '</table>' +
    // Full page width here; the email keeps its narrower table.
    table.replace('max-width:720px', 'max-width:none') +
    // Closing note, as on the form itself.
    '<div style="margin-top:28px;padding-top:8px;border-top:1px solid #e7e0d3;font-size:8px;line-height:1.5;color:#8a8a8a">' +
    escapeHtml(DISCLAIMER) +
    '<br>' +
    'Bu belge, efka-consulting.com üzerindeki müşteri ihtiyaç formundan otomatik olarak oluşturulmuştur.' +
    '</div>' +
    '</body></html>';

  // Letters and digits only, so the file name survives every mail client;
  // Turkish letters are kept.
  const slug =
    String(name)
      .replace(/[^\p{L}\p{N}]+/gu, '-')
      .replace(/^-+|-+$/g, '') || 'form';
  const stamp = Utilities.formatDate(submittedAt, Session.getScriptTimeZone(), 'yyyy-MM-dd-HHmm');

  return Utilities.newBlob(doc, 'text/html', 'form.html')
    .getAs('application/pdf')
    .setName('Musteri-Formu-' + slug + '-' + stamp + '.pdf');
}

function escapeHtml(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function reply(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}

/**
 * The efka | CONSULTING lockup for the letterhead: docs/client-form/letterhead-logo.png
 * (412x96, shown at half size so it stays sharp in print), base64-encoded.
 * To change the logo, replace that file and paste its base64 here
 * (on a Mac: base64 -i letterhead-logo.png | pbcopy).
 */
const LOGO_PNG =
  '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';
