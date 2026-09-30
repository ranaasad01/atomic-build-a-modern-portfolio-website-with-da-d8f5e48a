"use client";
import { MouseEvent, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { navLinks, primaryCta } from "@/lib/data";

const LOGO_URL =
  "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/logos/d8f5e48a-90ad-4766-8719-99ae2c4d6c85/6e7218d535dc4338a043e5afda17b53e.png";

export default function Navbar() {
  const t = useTranslations();
  const navT = t.raw("nav") as Record<string, string>;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label={t("nav.homeAria")}>
          <Image
            src={LOGO_URL}
            alt="Kiran Voss logo"
            width={36}
            height={36}
            className="h-9 w-auto rounded-md"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
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
                  className="text-sm font-medium text-[var(--muted-foreground)] transition-colors duration-300 hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                >
                  {navT[link.key] ?? link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href={pathname === "/" ? primaryCta.href : `/${primaryCta.href}`}
              onClick={(e) => handleAnchorClick(e, primaryCta.href)}
              className="inline-flex items-center rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-[var(--background)] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              {navT[primaryCta.key] ?? primaryCta.label}
            </Link>
          </motion.div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] p-2 text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--primary)] md:hidden"
          aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--background)] md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
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
                      onClick={
                        isAnchor
                          ? (e) => handleAnchorClick(e, link.href)
                          : () => setIsOpen(false)
                      }
                      className="block rounded-lg px-3 py-3 text-base font-medium text-[var(--foreground)] transition-colors duration-300 hover:bg-[var(--card)]"
                    >
                      {navT[link.key] ?? link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href={pathname === "/" ? primaryCta.href : `/${primaryCta.href}`}
                  onClick={(e) => {
                    handleAnchorClick(e, primaryCta.href);
                    setIsOpen(false);
                  }}
                  className="block rounded-full bg-[var(--primary)] px-4 py-3 text-center text-sm font-semibold text-[var(--background)]"
                >
                  {navT[primaryCta.key] ?? primaryCta.label}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
