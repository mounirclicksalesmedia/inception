"use client";

import Reveal from "@/components/Reveal";
import { useState, FormEvent } from "react";

const CHIPS = [
  "استراتيجية علامة",
  "هوية",
  "حملة",
  "موقع",
  "فيلم",
  "علاقات عامّة",
  "أخرى",
];

export default function ContactPageAr() {
  const [active, setActive] = useState<string[]>([]);
  const toggle = (chip: string) =>
    setActive((curr) =>
      curr.includes(chip) ? curr.filter((c) => c !== chip) : [...curr, chip]
    );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("شكراً لك. سنتواصل معك قريباً.");
    (e.currentTarget as HTMLFormElement).reset();
    setActive([]);
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">ابدأ مشروعاً · 004</span>
          <h1 className="h-display h1" style={{ marginTop: 24, maxWidth: "14ch" }}>
            أخبرنا<br />
            <em className="serif-touch gold">عن خطوتك القادمة</em>.
          </h1>
          <p className="body-lg" style={{ maxWidth: "56ch", marginTop: 36 }}>
            نردّ على كلّ استفسار خلال يوم عمل واحد. الرسائل المختصرة تتلقّى
            ردوداً مختصرة — اكتب ما يكفي لبدء حوار حقيقي.
          </p>
        </div>
        <div className="najdi-pattern"></div>
      </section>

      <section className="section contact-section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <Reveal>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-row">
                <label className="form-label">
                  <span className="mono lbl">01 / الاسم</span>
                  <input type="text" required placeholder="الاسم الكامل" />
                </label>
                <label className="form-label">
                  <span className="mono lbl">02 / الجهة</span>
                  <input type="text" placeholder="اسم المؤسّسة" />
                </label>
              </div>
              <div className="form-row">
                <label className="form-label">
                  <span className="mono lbl">03 / البريد</span>
                  <input type="email" required placeholder="you@brand.com" />
                </label>
                <label className="form-label">
                  <span className="mono lbl">04 / الهاتف</span>
                  <input type="tel" placeholder="+966" />
                </label>
              </div>
              <label className="form-label">
                <span className="mono lbl">05 / ما الذي تحتاجه؟</span>
                <div className="form-chips">
                  {CHIPS.map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      className={`chip ${active.includes(chip) ? "active" : ""}`}
                      onClick={() => toggle(chip)}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </label>
              <label className="form-label">
                <span className="mono lbl">06 / حدّثنا عن المشروع</span>
                <textarea
                  rows={5}
                  placeholder="بضع جمل عن البريف والجدول الزمني ونطاق الميزانية."
                />
              </label>
              <button
                type="submit"
                className="btn btn-solid"
                style={{ marginTop: 24 }}
              >
                إرسال الطلب <span className="arrow">→</span>
              </button>
            </form>
          </Reveal>

          <Reveal as="aside" className="contact-aside">
            <div className="aside-block">
              <span className="eyebrow">الاستوديوهات</span>
              <div className="aside-loc">
                <h4 className="h-display h4">الرياض</h4>
                <p className="text-mute">
                  طريق الملك فهد، العليا<br />الرياض 12333، السعودية
                </p>
              </div>
              <div className="aside-loc">
                <h4 className="h-display h4">جدّة</h4>
                <p className="text-mute">
                  شارع التحلية، الزهراء<br />جدّة 23425، السعودية
                </p>
              </div>
            </div>
            <div className="aside-block">
              <span className="eyebrow">مباشر</span>
              <ul className="aside-list">
                <li>
                  <span className="mono">أعمال جديدة</span>
                  <a href="mailto:hello@inception.sa">hello@inception.sa</a>
                </li>
                <li>
                  <span className="mono">إعلام</span>
                  <a href="mailto:press@inception.sa">press@inception.sa</a>
                </li>
                <li>
                  <span className="mono">توظيف</span>
                  <a href="mailto:join@inception.sa">join@inception.sa</a>
                </li>
                <li>
                  <span className="mono">هاتف</span>
                  <a href="tel:+966112345678">+966 11 234 5678</a>
                </li>
              </ul>
            </div>
            <div className="aside-block">
              <span className="eyebrow">ساعات العمل</span>
              <p className="text-mute" style={{ marginTop: 12 }}>
                الأحد–الخميس · 9 صباحاً–6 مساءً<br />السبت بموعد مسبق
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
