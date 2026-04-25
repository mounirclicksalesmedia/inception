import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import HeroLines from "@/components/HeroLines";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Inception",
  description:
    "Six disciplines, one team: Brand Strategy, Web Development, Mobile Applications, Social Media Management, Paid Ads & PPC, Content Production — built in-house in Saudi Arabia.",
};

const SERVICES = [
  {
    n: "/01",
    id: "srv-01",
    name: "Brand Strategy",
    tag: "positioning · identity",
    img: "amphora",
    imgSrc: "/services/brand.png",
    fig: "FIG · 01",
    figLabel: "POSITIONING & IDENTITY",
    body: "A clear position, a memorable name, and an identity system that holds up across every channel — from the app icon to the OOH placement.",
    list: [
      "Brand audits & market research",
      "Positioning & messaging architecture",
      "Naming & verbal identity",
      "Logo & visual identity systems",
      "Brand guidelines & rollout",
    ],
    timing: "6–12 weeks",
    flip: false,
  },
  {
    n: "/02",
    id: "srv-02",
    name: "Web Development",
    tag: "websites · e-commerce",
    img: "bust",
    imgSrc: "/services/webdevelopment.png",
    fig: "FIG · 02",
    figLabel: "WEB & PLATFORMS",
    body: "Websites, e-commerce stores and custom platforms — designed for conversion and built to last. Fast, accessible, and easy to manage.",
    list: [
      "Marketing & corporate websites",
      "E-commerce (Shopify, Salla, custom)",
      "Web apps & SaaS platforms",
      "CMS, integrations & APIs",
      "Performance, SEO & analytics setup",
    ],
    timing: "6–14 weeks",
    flip: true,
  },
  {
    n: "/03",
    id: "srv-03",
    name: "Mobile Applications",
    tag: "ios · android · cross-platform",
    img: "hand",
    imgSrc: "/services/mobileapps.png",
    fig: "FIG · 03",
    figLabel: "MOBILE PRODUCTS",
    body: "Native and cross-platform mobile apps — from the first wireframe to the App Store and Google Play release, with the analytics and growth loops to back them up.",
    list: [
      "Product & UX strategy",
      "iOS & Android development",
      "React Native / Flutter cross-platform",
      "Backend & API engineering",
      "App Store optimisation & launch",
    ],
    timing: "10–20 weeks",
    flip: false,
  },
  {
    n: "/04",
    id: "srv-04",
    name: "Social Media Management",
    tag: "strategy · content · community",
    img: "column",
    imgSrc: "/services/socialmedia.png",
    fig: "FIG · 04",
    figLabel: "ALWAYS-ON SOCIAL",
    body: "Bilingual social channels run end-to-end — from monthly content calendars to community replies — with a tone that actually sounds like your brand.",
    list: [
      "Channel strategy (IG, TikTok, X, LinkedIn, Snap)",
      "Monthly content calendars (EN / AR)",
      "Static, video & motion content",
      "Community management & DMs",
      "Reporting & creative iteration",
    ],
    timing: "Monthly retainer",
    flip: true,
  },
  {
    n: "/05",
    id: "srv-05",
    name: "Paid Ads & PPC",
    tag: "google · meta · tiktok · snap",
    img: "amphora",
    imgSrc: "/services/ads.png",
    fig: "FIG · 05",
    figLabel: "PERFORMANCE MEDIA",
    body: "Paid media built around real business outcomes — leads, sales, app installs — not vanity metrics. Built, tracked and optimised by senior buyers.",
    list: [
      "Google Ads — Search, Performance Max, YouTube",
      "Meta Ads — Facebook & Instagram",
      "TikTok, Snap & X paid",
      "Conversion tracking & attribution",
      "Landing pages & CRO",
    ],
    timing: "Monthly retainer",
    flip: false,
  },
  {
    n: "/06",
    id: "srv-06",
    name: "Content Production",
    tag: "photo · video · motion",
    img: "column",
    imgSrc: "/services/contentpro.png",
    fig: "FIG · 06",
    figLabel: "STUDIO & POST",
    body: "An in-house production team shooting and editing at the speed of social, with the polish of broadcast — for ads, social, brand films and product launches.",
    list: [
      "Brand films & TVCs",
      "Social-first short-form video",
      "Photography & retouching",
      "Motion graphics, 3D & VFX",
      "Post-production & localisation (EN / AR)",
    ],
    timing: "Per shoot · retainer",
    flip: true,
  },
];

const LETTERS = ["a.", "b.", "c.", "d.", "e."];

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="srv-hero">
        <div className="srv-hero-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}></span>
          ))}
        </div>
        <div className="najdi-pattern"></div>

        <div className="srv-hero-meta-l">
          <span>SERVICES · INDEX</span>
          <span className="dim">06 DISCIPLINES</span>
        </div>
        <div className="srv-hero-meta-r">
          <span>VOL · 02</span>
          <span className="dim">RUH / JED</span>
        </div>

        <div className="container srv-hero-inner">
          <span className="eyebrow">Services · 001</span>
          <HeroLines className="h-display srv-hero-title">
            <span className="hero-line line">
              <span>Six</span> <em className="serif-touch gold">disciplines</em>.
            </span>
            <span className="hero-line line">
              <span>One</span> <em className="serif-touch">obsession</em>.
            </span>
          </HeroLines>
          <div className="srv-hero-foot">
            <p className="body-lg" style={{ maxWidth: "50ch" }}>
              From positioning a new brand to running its paid media — we
              cover the full marketing stack in-house. One senior team,
              one accountable output, measurable from day one.
            </p>
            <div className="srv-hero-stats">
              <div>
                <div className="srv-stat-num h-display">120<span className="gold">+</span></div>
                <div className="meta-label">Engagements</div>
              </div>
              <div>
                <div className="srv-stat-num h-display">14</div>
                <div className="meta-label">Awards</div>
              </div>
              <div>
                <div className="srv-stat-num h-display">07</div>
                <div className="meta-label">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee srv-marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Brand Strategy", "Web Development", "Mobile Applications", "Social Media", "Paid Ads & PPC", "Content Production"].map((label, i) => (
              <span key={`${k}-${i}`} className="marquee-item">
                {label} <span className="star">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* INDEX */}
      <section className="section srv-index-section">
        <div className="container">
          <Reveal className="srv-index-head">
            <span className="eyebrow">Index · 002</span>
            <h2 className="h-display h2" style={{ marginTop: 18 }}>
              The full <em className="serif-touch gold">repertoire</em>.
            </h2>
          </Reveal>
          <Reveal className="srv-index-grid" stagger={0.06} y={16}>
            {SERVICES.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="srv-index-card">
                <span className="ix-num mono">{s.n}</span>
                <span className="ix-name h-display">{s.name}</span>
                <span className="ix-tag mono">{s.tag}</span>
                <span className="ix-arrow">↗</span>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* DETAIL CARDS */}
      <section className="section srv-detail-section">
        <div className="container">
          {SERVICES.map((s) => (
            <Reveal
              key={s.id}
              as="article"
              className={`srv-card ${s.flip ? "srv-card-flip" : ""}`}
            >
              <div id={s.id} style={{ position: "absolute", marginTop: -100 }} />
              <div className="srv-card-meta">
                <span className="mono ix-num">{s.n}</span>
                <span className="mono dim">DISCIPLINE</span>
              </div>
              <div className="srv-card-visual">
                {s.imgSrc ? (
                  <Image
                    src={s.imgSrc}
                    alt={s.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className="srv-visual" data-img={s.img}></div>
                )}
                <div className="srv-visual-tag mono">
                  <span>{s.fig}</span>
                  <span>—</span>
                  <span>{s.figLabel}</span>
                </div>
              </div>
              <div className="srv-card-body">
                <h3 className="h-display srv-card-name">{s.name}</h3>
                <p className="body-lg">{s.body}</p>
                <ul className="srv-card-list">
                  {s.list.map((item, i) => (
                    <li key={item}>
                      <span className="ck-num mono">{LETTERS[i]}</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="srv-card-foot">
                  <span className="dim">Typical engagement</span>
                  <span>{s.timing}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MODELS */}
      <section className="section srv-models">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Engagement · 003</span>
            <h2 className="h-display h2">
              Three ways to <em className="serif-touch gold">work</em> with us.
            </h2>
          </Reveal>
          <Reveal className="models-grid" stagger={0.1} y={20}>
            <div className="model-card">
              <span className="mono dim">Model · A</span>
              <h3 className="h-display h3">Project</h3>
              <p>
                Fixed scope and deliverables — best for a brand launch, a new
                website, a mobile app build, or a single campaign.
              </p>
              <span className="model-rate">
                From <span className="gold">SAR 60k</span>
              </span>
            </div>
            <div className="model-card model-card-feature">
              <span className="mono dim">Model · B · Most chosen</span>
              <h3 className="h-display h3">Retainer</h3>
              <p>
                A senior team embedded across your social, paid media and
                content — running the brand month to month with clear KPIs.
              </p>
              <span className="model-rate">
                From <span className="gold">SAR 25k / mo</span>
              </span>
            </div>
            <div className="model-card">
              <span className="mono dim">Model · C</span>
              <h3 className="h-display h3">Sprint</h3>
              <p>
                A focused two-week engagement — brand sprint, paid-media
                audit, or website redesign kickoff. Fast, tight, decisive.
              </p>
              <span className="model-rate">
                From <span className="gold">SAR 30k</span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE REV */}
      <div className="marquee srv-marquee marquee-rev" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Strategy", "Identity", "Web", "Mobile", "Social", "Paid Ads", "Content"].map((label, i) => (
              <span key={`${k}-${i}`} className="marquee-item italic serif-touch">
                {label} <span className="star">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* CTA */}
      <section className="section srv-cta">
        <div className="container">
          <Reveal className="srv-cta-inner">
            <div>
              <span className="eyebrow">Get in touch · 004</span>
              <h2
                className="h-display h2"
                style={{ marginTop: 18, maxWidth: "18ch" }}
              >
                Have a brief?
                <br />
                We&apos;ll <em className="serif-touch gold">read it</em> the
                same day.
              </h2>
            </div>
            <Link className="btn btn-solid" href="/contact">
              Start a Project <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
