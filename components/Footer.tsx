"use client";
import { MouseEvent, useEffect, useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail } from 'lucide-react';
import { navLinks, socialLinks, APP_NAME, APP_TAGLINE, type SocialLink } from "@/lib/data";

const ICONS: Record<SocialLink["icon"], typeof Github> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

const FALLBACK_YEAR = 2024;

export default function Footer() {
  const t = useTranslations();
  const navT = t.raw("nav") as Record<string, string>;
  const pathname = usePathname();
  const [year, setYear] = useState(FALLBACK_YEAR);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border-t border-[var(--border)] bg-[var(--background)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p
              className="text-lg font-semibold text-[var(--foreground)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {APP_NAME}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">{APP_TAGLINE}</p>
          </div>

          <nav aria-label={t("footer.navAria")}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => {
                const isAnchor = link.href.startsWith("#");
                const resolvedHref = isAnchor
                  ? pathname === "/"
                    ? link.href
                    : `/${link.href}`
                  : link.href;
                return (
                  <li key={link.key}>
                    <Link
                      href={resolvedHref}
                      onClick={isAnchor ? (e) => handleAnchorClick(e, link.href) : undefined}
                      className="text-sm text-[var(--muted-foreground)] transition-colors duration-300 hover:text-[var(--foreground)]"
                    >
                      {navT[link.key] ?? link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ul className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = ICONS[social.icon];
              return (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted-foreground)] md:flex-row md:items-center md:justify-between">
          <p suppressHydrationWarning>{t("footer.copyright", { year })}</p>
          <p>{t("footer.builtWith")}</p>
        </div>
      </div>
    </motion.footer>
  );
}
