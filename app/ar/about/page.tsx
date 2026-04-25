import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن — إنسبشن",
  description:
    "إنسبشن وكالة تسويق سعودية. الاستراتيجية، والمواقع، وتطبيقات الجوّال، والسوشيال، والإعلانات المدفوعة، والمحتوى — يبنيها ويُديرها فريق داخلي واحد.",
};

const PILLARS = [
  {
    n: "01",
    title: "كل الخدمات داخلياً.",
    body: "العلامة، والمواقع، وتطبيقات الجوّال، والسوشيال، والإعلانات المدفوعة، والمحتوى — تحت سقف واحد. لا إسناد للأعمال التي تحدّد علامتك.",
  },
  {
    n: "02",
    title: "صُنعنا في السعودية.",
    body: "ثنائي اللغة عربي / إنجليزي افتراضياً. نفهم السوق المحلي، والمنصّات المهمّة، وكيف نخاطب الجمهور السعودي.",
  },
  {
    n: "03",
    title: "يقوده أصحاب خبرة.",
    body: "كلّ حساب يقوده خبراء استراتيجية ومطوّرون ومشترو إعلام محترفون — لا يُسلَّم للمبتدئين بعد العرض.",
  },
];

const TEAM = [
  { name: "قائد الاستراتيجية", role: "العلامة والتموضع", img: "bust" },
  { name: "المدير الإبداعي", role: "التصميم والهوية", img: "column" },
  { name: "رئيس الهندسة", role: "الويب والجوّال", img: "amphora" },
  { name: "رئيس الإعلام", role: "الإعلانات المدفوعة وPPC", img: "hand" },
  { name: "قائد السوشيال", role: "المحتوى والمجتمع", img: "bust" },
  { name: "رئيس الإنتاج", role: "تصوير وفيديو وموشن", img: "amphora" },
];

const STATS = [
  { num: "06", label: "خدمات أساسية" },
  { num: "100%", label: "فريق داخلي" },
  { num: "AR/EN", label: "تنفيذ ثنائي اللغة" },
  { num: "KSA", label: "من الرياض" },
];

export default function AboutPageAr() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">من نحن · 003</span>
          <h1 className="h-display h1" style={{ marginTop: 24, maxWidth: "20ch" }}>
            وكالة سعودية،<br />
            تعمل <em className="serif-touch gold">داخلياً</em>.
          </h1>
          <p className="body-lg" style={{ maxWidth: "56ch", marginTop: 36 }}>
            إنسبشن وكالة تسويق مقرّها الرياض. نصمّم العلامات، ونبني المواقع
            وتطبيقات الجوّال، ونُدير الإعلانات المدفوعة والسوشيال، ونُنتج
            المحتوى الذي يقف خلف ذلك كلّه — تحت سقف واحد، مع فريق أوّل
            تتعامل معه فعلاً.
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
            <span className="eyebrow">الاستوديو · 004</span>
            <h2 className="h-display h2">
              الشركاء و<em className="serif-touch gold">القيادات</em>
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
