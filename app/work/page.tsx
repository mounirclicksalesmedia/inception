"use client";

import Reveal from "@/components/Reveal";
import { useState } from "react";

const FILTERS = ["All", "Branding", "Web", "Mobile", "Social", "Paid Ads"] as const;

const PROJECTS = [
  {
    tag: "2025 · Brand & Web",
    title: "Hospitality Brand Launch",
    body: "Identity system and launch website for a boutique hospitality concept entering the Saudi market.",
    img: "amphora",
    cat: "Branding",
  },
  {
    tag: "2025 · Mobile App",
    title: "Fintech Mobile Product",
    body: "Native iOS and Android product for a regional financial-services startup, from UX to App Store launch.",
    img: "column",
    cat: "Mobile",
  },
  {
    tag: "2025 · Web Development",
    title: "Real Estate Platform",
    body: "Custom property listings and CRM platform for a Riyadh-based developer — bilingual, fast, and SEO-ready.",
    img: "bust",
    cat: "Web",
  },
  {
    tag: "2024 · Paid Media",
    title: "D2C Beauty Performance",
    body: "Full-funnel Meta, Google and TikTok program that scaled a direct-to-consumer brand across KSA and the GCC.",
    img: "hand",
    cat: "Paid Ads",
  },
  {
    tag: "2024 · Social Media",
    title: "F&B Social Growth",
    body: "Always-on bilingual content and community management for a fast-growing restaurant group.",
    img: "amphora",
    cat: "Social",
  },
  {
    tag: "2024 · Web Development",
    title: "E-commerce Store Build",
    body: "Headless e-commerce build with custom checkout and integrations for a homegrown Saudi fashion label.",
    img: "column",
    cat: "Web",
  },
];

export default function WorkPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = PROJECTS.filter((p) => filter === "All" || p.cat === filter);

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Selected work · 002</span>
          <h1
            className="h-display h1"
            style={{ marginTop: 24, maxWidth: "18ch" }}
          >
            Brands, websites,<br />
            apps &amp; <em className="serif-touch gold">campaigns</em>.
          </h1>
          <div className="work-filter mono">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={filter === f ? "active" : ""}
                onClick={() => setFilter(f)}
                type="button"
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="najdi-pattern"></div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container work-archive">
          {visible.map((p) => (
            <Reveal as="div" key={p.title}>
              <a href="#" className="archive-row">
                <div className="archive-img" data-img={p.img}></div>
                <div className="archive-meta">
                  <span className="mono ar-tag">{p.tag}</span>
                  <h3 className="h-display archive-title">{p.title}</h3>
                  <p className="text-mute">{p.body}</p>
                </div>
                <span className="archive-arrow">→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
