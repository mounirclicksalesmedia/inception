import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Inception",
  description:
    "Inception is a Saudi-based marketing agency. Strategy, web, mobile, social, paid media and content — built and run by one in-house team.",
};

const PILLARS = [
  {
    n: "01",
    title: "Full stack, in-house.",
    body: "Brand, web, mobile, social, paid media and content under one roof. No outsourcing the work that defines your brand.",
  },
  {
    n: "02",
    title: "Built in Saudi.",
    body: "Bilingual EN / AR by default. We understand the local market, the platforms that matter, and how to talk to a Saudi audience.",
  },
  {
    n: "03",
    title: "Run by senior people.",
    body: "Every account is led by senior strategists, developers and media buyers — not handed off to juniors after the pitch.",
  },
];

const TEAM = [
  { name: "Strategy Lead", role: "Brand & Positioning", img: "bust" },
  { name: "Creative Director", role: "Design & Identity", img: "column" },
  { name: "Head of Engineering", role: "Web & Mobile", img: "amphora" },
  { name: "Head of Media", role: "Paid Ads & PPC", img: "hand" },
  { name: "Social Lead", role: "Content & Community", img: "bust" },
  { name: "Head of Production", role: "Photo, Video & Motion", img: "amphora" },
];

const STATS = [
  { num: "06", label: "Core services" },
  { num: "100%", label: "In-house team" },
  { num: "EN/AR", label: "Bilingual delivery" },
  { num: "KSA", label: "Riyadh-based" },
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About · 003</span>
          <h1 className="h-display h1" style={{ marginTop: 24, maxWidth: "18ch" }}>
            A Saudi agency,<br />
            built <em className="serif-touch gold">in-house</em>.
          </h1>
          <p className="body-lg" style={{ maxWidth: "56ch", marginTop: 36 }}>
            Inception is a Riyadh-based marketing agency. We design brands,
            build websites and mobile apps, run paid media and social, and
            produce the content behind it all — under one roof, with one
            senior team you actually work with.
          </p>
        </div>
        <div className="najdi-pattern"></div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <Reveal className="about-pillars" stagger={0.12} y={24}>
            {PILLARS.map((p) => (
              <div key={p.n} className="pillar">
                <div className="pillar-num h-display gold">{p.n}</div>
                <h3 className="h-display h3">{p.title}</h3>
                <p className="text-mute">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">The studio · 004</span>
            <h2 className="h-display h2">
              Partners &amp; <em className="serif-touch gold">principals</em>
            </h2>
          </Reveal>
          <Reveal className="team-grid" stagger={0.08} y={24}>
            {TEAM.map((m) => (
              <div key={m.name} className="team-card">
                <div className="team-img" data-img={m.img}></div>
                <div className="team-info">
                  <h4 className="h4 h-display">{m.name}</h4>
                  <span className="mono team-role">{m.role}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--bg-warm)", borderBlock: "1px solid var(--line-soft)" }}
      >
        <div className="container">
          <Reveal className="awards-grid" stagger={0.1} y={20}>
            {STATS.map((s) => (
              <div key={s.label} className="award-stat">
                <div className="award-num h-display">
                  {s.num.endsWith("+") ? (
                    <>
                      {s.num.slice(0, -1)}
                      <span className="gold">+</span>
                    </>
                  ) : (
                    s.num
                  )}
                </div>
                <div className="meta-label">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
