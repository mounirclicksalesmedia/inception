"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPath, localizedHref, NAV_LABELS, FOOTER_COPY } from "@/lib/i18n";

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = FOOTER_COPY[locale];
  const nav = NAV_LABELS[locale];

  return (
    <footer className="footer">
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2
              className="h-display h2"
              style={{ marginTop: 18, maxWidth: "14ch" }}
            >
              {t.headLine1}
              <br />
              {t.headLine2} <span className="serif-touch gold">{t.headGold}</span>.
            </h2>
          </div>
          <Link className="btn btn-solid" href={localizedHref("/contact", locale)}>
            {t.cta} <span className="arrow">→</span>
          </Link>
        </div>

        <div className="footer-huge">INCEPTION</div>

        <div className="footer-grid">
          <div className="footer-col">
            <h5>{t.city}</h5>
            <p
              style={{
                color: "var(--ink-mute)",
                fontSize: 14,
                maxWidth: "36ch",
              }}
            >
              {t.blurb}
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                marginTop: 22,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: ".15em",
                textTransform: "uppercase",
                color: "var(--ink-mute)",
              }}
            >
              <span>{t.established}</span>
              <span style={{ color: "var(--gold)" }}>●</span>
              <span>{t.langPair}</span>
            </div>
          </div>
          <div className="footer-col">
            <h5>{t.navHead}</h5>
            <ul>
              <li>
                <Link href={localizedHref("/", locale)}>{nav.home}</Link>
              </li>
              <li>
                <Link href={localizedHref("/services", locale)}>{nav.services}</Link>
              </li>
              <li>
                <Link href={localizedHref("/work", locale)}>{nav.work}</Link>
              </li>
              <li>
                <Link href={localizedHref("/about", locale)}>{nav.about}</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>{t.connectHead}</h5>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Behance</a></li>
              <li><a href="#">X / Twitter</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>{t.contactHead}</h5>
            <ul>
              <li>
                <a href="mailto:hello@inception.sa">hello@inception.sa</a>
              </li>
              <li>
                <a href="tel:+966112345678">+966 11 234 5678</a>
              </li>
              <li
                style={{
                  color: "var(--ink-mute)",
                  fontSize: 14,
                  marginTop: 6,
                }}
              >
                {t.addrLine1}
                <br />
                {t.addrLine2}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t.copyright}</span>
          <span>{t.crafted}</span>
        </div>
      </div>
      <div className="najdi-pattern" style={{ opacity: 0.04 }}></div>
    </footer>
  );
}
