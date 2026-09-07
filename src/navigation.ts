/**
 * Site navigation — one definition, used by SiteHeader and SiteFooter.
 * Add a page here and it appears in both.
 */

export interface NavLink {
  text: string;
  href: string;
}

/** Primary nav. `text` is what the header prints; `footerText` overrides it below. */
export const mainNav: (NavLink & { footerText?: string })[] = [
  { text: 'Services', href: '/services' },
  { text: 'Team', href: '/team', footerText: 'The network' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
];

export const footerNav: NavLink[] = mainNav.map(({ text, footerText, href }) => ({
  text: footerText ?? text,
  href,
}));

export const legalNav: NavLink[] = [
  { text: 'Privacy', href: '/privacy' },
  { text: 'Terms', href: '/terms' },
];

/** The call to action repeated in the header and on every page bottom. */
export const primaryCta: NavLink = { text: 'Start a project', href: '/contact' };
