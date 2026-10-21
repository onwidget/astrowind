/*
 * The household client requirements form, from EFKA_Client_Requirements_Form_.docx.
 *
 * The document is bilingual, English first with Turkish underneath, and the
 * page keeps that layout. Every label here is the document's own wording.
 *
 * The page renders from this list, and each submission carries the labels
 * with the answers, so the Google Sheet's column headers and the notification
 * email come from here too. To add or reword a question, change it here only.
 * Keep `key` stable once the form is in use: the Apps Script matches columns
 * by key, so a renamed key starts a new column.
 */

/**
 * The Google Apps Script web app that receives submissions: paste the URL
 * ending in `/exec` in place of the empty string (see docs/client-form/SETUP.md).
 * It is public in the page source either way. `PUBLIC_CLIENT_FORM_ENDPOINT` in
 * the environment overrides it, which is how the form is tested locally.
 */
export const CLIENT_FORM_ENDPOINT: string =
  import.meta.env.PUBLIC_CLIENT_FORM_ENDPOINT ||
  'https://script.google.com/macros/s/AKfycbz2c-vTMAQKNZp_6F3zuK95qUTJ_0akLyNhD7j62ml9DbxNl23aAxAeDDd7vBQTWeK4/exec';

/**
 * Cloudflare Turnstile site key for the bot check (public, like the endpoint):
 * paste it in place of the empty string. The widget only works on the
 * hostnames set for it in Cloudflare. `PUBLIC_TURNSTILE_SITE_KEY` overrides
 * it, e.g. with Cloudflare's always-passing test key `1x00000000000000000000AA`
 * for local testing.
 */
export const TURNSTILE_SITE_KEY: string = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAAFfGZ-cOZ6ezmeKb';

export interface Bilingual {
  en: string;
  tr: string;
}

export interface Option extends Bilingual {
  value: string;
  /** Shows a text box for details when chosen, e.g. "Other: ____". */
  detail?: Bilingual;
}

export type Field =
  | (Bilingual & {
      key: string;
      type: 'text' | 'email' | 'tel' | 'number' | 'textarea';
      required?: boolean;
      autocomplete?: string;
      /** Spans both columns on wide screens. */
      wide?: boolean;
    })
  | (Bilingual & { key: string; type: 'radio' | 'checkbox'; options: Option[]; wide?: boolean })
  | (Bilingual & { key: string; type: 'range'; unit: Bilingual; wide?: boolean });

export interface Section extends Bilingual {
  key: string;
  fields: Field[];
}

// Checks the list against Section while giving it that general type, so the
// page can read optional properties such as `detail` and `required`.
const sections = (list: Section[]) => list;

const YES = { value: 'yes', en: 'Yes', tr: 'Evet' };
const NO = { value: 'no', en: 'No', tr: 'Hayır' };
const OTHER = { value: 'other', en: 'Other', tr: 'Diğer', detail: { en: 'Please specify', tr: 'Belirtiniz' } };

export const clientForm = {
  meta: {
    title: 'Müşteri İhtiyaç Formu · Client Requirements Form',
    description: 'EFKA Consulting household worker client requirements form.',
  },

  title: { en: 'Household Worker | Client Requirements Form', tr: 'Ev Personeli | Müşteri İhtiyaç Formu' },

  intro: {
    en: `Please complete this form so EFKA Consulting can identify candidates suited to your household
      and employment needs. Information will be shared with recruitment partners only as needed for
      candidate matching.`,
    tr: `EFKA Consulting’in evinizin ve istihdam ihtiyaçlarınızın gerekliliklerine uygun adayları
      belirleyebilmesi için lütfen bu formu doldurunuz. Bilgiler, yalnızca aday eşleştirmesi için
      gerekli olduğu ölçüde işe alım ortaklarımızla paylaşılacaktır.`,
  },

  sections: sections([
    {
      key: 'contact',
      en: '1. Client & household contact',
      tr: '1. Müşteri ve hane iletişim bilgileri',
      fields: [
        {
          key: 'clientName',
          type: 'text',
          required: true,
          autocomplete: 'name',
          en: 'Client / employer full name',
          tr: 'Müşteri / işveren adı soyadı',
        },
        {
          key: 'city',
          type: 'text',
          autocomplete: 'address-level2',
          en: 'City / district (Türkiye)',
          tr: 'İl / ilçe (Türkiye)',
        },
        {
          key: 'phone',
          type: 'tel',
          required: true,
          autocomplete: 'tel',
          en: 'Phone / WhatsApp',
          tr: 'Telefon / WhatsApp',
        },
        { key: 'email', type: 'email', autocomplete: 'email', en: 'Email', tr: 'E-posta' },
        {
          key: 'contactMethod',
          type: 'checkbox',
          wide: true,
          en: 'Preferred contact method',
          tr: 'Tercih edilen iletişim yöntemi',
          options: [
            { value: 'phone', en: 'Phone', tr: 'Telefon' },
            { value: 'whatsapp', en: 'WhatsApp', tr: 'WhatsApp' },
            { value: 'email', en: 'Email', tr: 'E-posta' },
          ],
        },
        { key: 'adults', type: 'number', en: 'Number of adults in household', tr: 'Evde yaşayan yetişkin sayısı' },
        { key: 'children', type: 'number', en: 'Number of children', tr: 'Çocuk sayısı' },
        { key: 'childrenAges', type: 'text', wide: true, en: 'Children’s ages', tr: 'Çocukların yaşları' },
      ],
    },
    {
      key: 'home',
      en: '2. Home & accommodation',
      tr: '2. Ev ve konaklama koşulları',
      fields: [
        {
          key: 'propertyType',
          type: 'radio',
          wide: true,
          en: 'Property type',
          tr: 'Konut tipi',
          options: [
            { value: 'apartment', en: 'Apartment / flat', tr: 'Daire' },
            { value: 'house', en: 'Detached house / villa', tr: 'Müstakil ev / villa' },
            OTHER,
          ],
        },
        {
          key: 'privateBedroom',
          type: 'radio',
          en: 'Private bedroom for worker?',
          tr: 'Personel için özel yatak odası var mı?',
          options: [YES, NO, { value: 'arranged', en: 'To be arranged', tr: 'Ayarlanacak' }],
        },
        {
          key: 'privateBathroom',
          type: 'radio',
          en: 'Private bathroom for worker?',
          tr: 'Personel için özel banyo var mı?',
          options: [YES, { value: 'shared', en: 'Shared bathroom', tr: 'Ortak banyo' }],
        },
        {
          key: 'pets',
          type: 'radio',
          wide: true,
          en: 'Pets in household?',
          tr: 'Evcil hayvan var mı?',
          options: [NO, { value: 'yes', en: 'Yes', tr: 'Evet', detail: { en: 'Type / number', tr: 'Türü / sayısı' } }],
        },
      ],
    },
    {
      key: 'position',
      en: '3. Position & care requirements',
      tr: '3. Pozisyon ve bakım ihtiyaçları',
      fields: [
        {
          key: 'primaryRole',
          type: 'checkbox',
          wide: true,
          en: 'Primary role',
          tr: 'Temel görev',
          options: [
            { value: 'nanny', en: 'Nanny / infant-child care', tr: 'Dadı / bebek-çocuk bakımı' },
            { value: 'elderly', en: 'Elderly care', tr: 'Yaşlı bakımı' },
            { value: 'patient', en: 'Patient care', tr: 'Hasta bakımı' },
            { value: 'household', en: 'Household help', tr: 'Ev yardımcısı' },
          ],
        },
        {
          key: 'careAges',
          type: 'text',
          wide: true,
          en: 'Age(s) of person(s) receiving care',
          tr: 'Bakım verilecek kişi(ler)in yaşları',
        },
        {
          key: 'infantExperience',
          type: 'radio',
          wide: true,
          en: 'Prior newborn / infant experience required?',
          tr: 'Yenidoğan / bebek bakım deneyimi gerekli mi?',
          options: [
            YES,
            { value: 'preferred', en: 'Preferred', tr: 'Tercihen' },
            { value: 'na', en: 'Not applicable', tr: 'İlgili değil' },
          ],
        },
        {
          key: 'specialNeeds',
          type: 'textarea',
          wide: true,
          en: 'Special care needs or relevant instructions, if any',
          tr: 'Varsa özel bakım ihtiyaçları veya ilgili talimatlar',
        },
      ],
    },
    {
      key: 'duties',
      en: '4. Duties',
      tr: '4. Görevler',
      fields: [
        {
          key: 'householdDuties',
          type: 'checkbox',
          wide: true,
          en: 'Household duties expected',
          tr: 'Beklenen ev işleri',
          options: [
            { value: 'cleaning', en: 'Cleaning', tr: 'Temizlik' },
            { value: 'laundry', en: 'Laundry', tr: 'Çamaşır' },
            { value: 'ironing', en: 'Ironing', tr: 'Ütü' },
            { value: 'cooking', en: 'Cooking', tr: 'Yemek' },
          ],
        },
        {
          key: 'additionalDuties',
          type: 'checkbox',
          wide: true,
          en: 'Additional duties',
          tr: 'Ek görevler',
          options: [
            { value: 'petCare', en: 'Pet care', tr: 'Evcil hayvan bakımı' },
            { value: 'schoolRuns', en: 'School runs', tr: 'Okula götürme / getirme' },
            { value: 'travel', en: 'Travel with family', tr: 'Aileyle seyahat' },
            OTHER,
          ],
        },
      ],
    },
    {
      key: 'preferences',
      en: '5. Candidate preferences',
      tr: '5. Aday tercihleri',
      fields: [
        {
          key: 'workerAge',
          type: 'range',
          wide: true,
          en: 'Preferred worker age range',
          tr: 'Tercih edilen çalışan yaş aralığı',
          unit: { en: 'years', tr: 'yaş' },
        },
        {
          key: 'english',
          type: 'radio',
          wide: true,
          en: 'English proficiency',
          tr: 'İngilizce seviyesi',
          options: [
            { value: 'basic', en: 'Basic', tr: 'Temel' },
            { value: 'conversational', en: 'Conversational', tr: 'Günlük konuşma' },
            { value: 'fluent', en: 'Fluent', tr: 'Akıcı' },
          ],
        },
        { key: 'otherLanguages', type: 'text', en: 'Other language preferences', tr: 'Diğer dil tercihleri' },
        {
          key: 'minExperience',
          type: 'number',
          en: 'Minimum relevant experience (years)',
          tr: 'Asgari ilgili deneyim (yıl)',
        },
        {
          key: 'skills',
          type: 'textarea',
          wide: true,
          en: 'Preferred skills / training / certifications',
          tr: 'Tercih edilen beceriler / eğitimler / sertifikalar',
        },
        {
          key: 'additionalPreferences',
          type: 'textarea',
          wide: true,
          en: 'Any additional preferences or non-negotiable requirements',
          tr: 'Ek tercihler veya vazgeçilmez koşullar',
        },
      ],
    },
    {
      key: 'selection',
      en: '6. Selection & additional information',
      tr: '6. Seçim ve ek bilgiler',
      fields: [
        {
          key: 'interviewAvailability',
          type: 'text',
          wide: true,
          en: 'Availability for interviews',
          tr: 'Görüşmeler için uygun olunan zamanlar',
        },
        {
          key: 'additionalInfo',
          type: 'textarea',
          wide: true,
          en: 'Additional information for candidate matching',
          tr: 'Aday eşleştirmesi için ek bilgiler',
        },
        // The document's "Completed by / date": the date is recorded with the submission.
        { key: 'completedBy', type: 'text', wide: true, en: 'Completed by', tr: 'Dolduran kişi' },
      ],
    },
  ]),

  // Not in the document. The form collects personal data, possibly including
  // health information about the person receiving care, and shares it with
  // recruitment partners abroad, which under KVKK needs the notice and
  // explicit consent. The wording should be checked by EFKA's lawyer.
  consent: {
    en: `I have read the KVKK privacy notice, and I consent to the information I give here, including any
      health information about the person receiving care, being processed and shared with
      recruitment partners for candidate matching.`,
    tr: `KVKK Aydınlatma Metni’ni okudum. Bu formda verdiğim bilgilerin, bakım alacak kişiye ait sağlık
      bilgileri dâhil, aday eşleştirmesi amacıyla işlenmesine ve işe alım ortaklarıyla paylaşılmasına
      açık rıza veriyorum.`,
    linkText: { en: 'Read the notice', tr: 'Metni okuyun' },
    href: '/kvkk',
  },

  disclaimer: {
    en: `This form is for initial candidate matching and does not constitute an employment contract or
      confirmation of candidate availability. Employment terms and legal requirements will be confirmed
      separately.`,
    tr: `Bu form, ilk aday eşleştirmesi amacıyla hazırlanmıştır; iş sözleşmesi veya adayın müsait olduğuna
      dair bir teyit niteliği taşımaz. Çalışma koşulları ve yasal gereklilikler ayrıca
      kesinleştirilecektir.`,
  },

  submit: { en: 'Submit', tr: 'Gönder' },
  sending: { en: 'Sending…', tr: 'Gönderiliyor…' },
  required: { en: 'Required', tr: 'Zorunlu' },
  rangeTo: { en: 'to', tr: '–' },

  success: {
    en: 'Thank you. We have received your answers and will be in touch shortly.',
    tr: 'Teşekkür ederiz. Yanıtlarınız bize ulaştı, en kısa sürede sizinle iletişime geçeceğiz.',
  },
  error: {
    en: 'Sorry, the form could not be sent. Please try again, or email us at',
    tr: 'Üzgünüz, form gönderilemedi. Lütfen tekrar deneyin ya da bize şu adresten yazın:',
  },
  errorEmail: 'info@efka-consulting.com',
  verifying: {
    en: 'The security check is still running. Please try again in a few seconds.',
    tr: 'Güvenlik doğrulaması sürüyor. Lütfen birkaç saniye sonra tekrar deneyin.',
  },
};
