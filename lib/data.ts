export type NavLink = {
  label: string;
  href: string;
  key: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "Github" | "Twitter" | "Linkedin" | "Mail";
};

export const APP_NAME = "Kiran Voss";
export const APP_TAGLINE = "Product Designer & Frontend Developer";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", key: "home" },
  { label: "Work", href: "#featured-work", key: "work" },
  { label: "About", href: "#about-intro", key: "about" },
  { label: "Contact", href: "#cta", key: "contact" },
];

export const primaryCta: NavLink = {
  label: "Start a conversation",
  href: "#cta",
  key: "contact",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { label: "Email", href: "mailto:hello@kiranvoss.com", icon: "Mail" },
];
