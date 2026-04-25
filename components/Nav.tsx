"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { getLocaleFromPath, localizedHref, switchLocaleHref, NAV_LABELS } from "@/lib/i18n";

export default function Nav() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = NAV_LABELS[locale];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const items = [
    { label: t.home, href: localizedHref("/", locale) },
    { label: t.services, href: localizedHref("/services", locale) },
    { label: t.work, href: localizedHref("/work", locale) },
    { label: t.about, href: localizedHref("/about", locale) },
    { label: t.contact, href: localizedHref("/contact", locale) },
  ];

  const otherLocale = locale === "ar" ? "en" : "ar";
  const switchHref = switchLocaleHref(pathname || "/", otherLocale);
  const switchLabel = locale === "ar" ? "EN" : "ع";

  return (
    <>
      <nav className="nav">
        <Link className="nav-logo" href={localizedHref("/", locale)} aria-label="Inception home">
          <span className="nav-logo-mark"></span>
          <span>{t.brand}</span>
        </Link>
        <div className="nav-links">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "is-active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="nav-right">
          <Link className="nav-lang" href={switchHref} aria-label={`Switch to ${otherLocale.toUpperCase()}`}>
            {switchLabel}
          </Link>
          <Link className="nav-cta" href={localizedHref("/contact", locale)}>
            <span className="dot"></span>
            <span>{t.cta}</span>
          </Link>
        </div>
        <button
          className="nav-burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        {items.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            {item.label}
          </Link>
        ))}
        <Link
          href={switchHref}
          onClick={() => setOpen(false)}
          className="mobile-lang"
        >
          <span className="num">→</span>
          {locale === "ar" ? "English" : "العربية"}
        </Link>
      </div>
    </>
  );
}
