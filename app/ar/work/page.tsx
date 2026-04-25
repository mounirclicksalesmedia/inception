"use client";

import Reveal from "@/components/Reveal";
import { useState } from "react";

const FILTERS = [
  { id: "All", label: "الكل" },
  { id: "Branding", label: "هوية" },
  { id: "Web", label: "ويب" },
  { id: "Mobile", label: "جوّال" },
  { id: "Social", label: "سوشيال" },
  { id: "Paid Ads", label: "إعلانات مدفوعة" },
] as const;

const PROJECTS = [
  {
    tag: "2025 · هوية وموقع",
    title: "إطلاق علامة ضيافة",
    body: "نظام هوية وموقع إطلاق لعلامة ضيافة بوتيك تدخل السوق السعودي.",
    img: "amphora",
    cat: "Branding",
  },
  {
    tag: "2025 · تطبيق جوّال",
    title: "تطبيق فينتك",
    body: "منتج iOS وأندرويد أصلي لشركة خدمات مالية ناشئة في المنطقة، من تجربة المستخدم إلى الإطلاق على المتاجر.",
    img: "column",
    cat: "Mobile",
  },
  {
    tag: "2025 · تطوير ويب",
    title: "منصّة عقارات",
    body: "منصّة عقارية مخصّصة بنظام CRM لمطوّر مقرّه الرياض — ثنائية اللغة، سريعة، وجاهزة لـSEO.",
    img: "bust",
    cat: "Web",
  },
  {
    tag: "2024 · إعلانات مدفوعة",
    title: "حملة أداء D2C جمال",
    body: "برنامج كامل القمع عبر ميتا وجوجل وتيك توك حقّق نمواً لعلامة جمال D2C في المملكة والخليج.",
    img: "hand",
    cat: "Paid Ads",
  },
  {
    tag: "2024 · سوشيال ميديا",
    title: "نموّ سوشيال F&B",
    body: "محتوى وإدارة مجتمع ثنائية اللغة على مدار الساعة لمجموعة مطاعم سريعة النموّ.",
    img: "amphora",
    cat: "Social",
  },
  {
    tag: "2024 · تطوير ويب",
    title: "بناء متجر إلكتروني",
    body: "بناء متجر Headless مع نظام دفع مخصّص وتكاملات لعلامة أزياء سعودية محلّية.",
    img: "column",
    cat: "Web",
  },
];

export default function WorkPageAr() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("All");
  const visible = PROJECTS.filter((p) => filter === "All" || p.cat === filter);

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">أعمال مختارة · 002</span>
          <h1
            className="h-display h1"
            style={{ marginTop: 24, maxWidth: "20ch" }}
          >
            علامات، مواقع،<br />
            تطبيقات و<em className="serif-touch gold">حملات</em>.
          </h1>
          <div className="work-filter mono">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                className={filter === f.id ? "active" : ""}
                onClick={() => setFilter(f.id)}
                type="button"
              >
                {f.label}
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
