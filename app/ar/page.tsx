import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import HeroLines from "@/components/HeroLines";
import HeroStatue from "@/components/HeroStatue";
import CloudScene from "@/components/CloudSceneLazy";

const SERVICES = [
  {
    n: "/01",
    name: "استراتيجية العلامة",
    desc: "تموضع، هوية، تسمية، إرشادات",
  },
  {
    n: "/02",
    name: "تطوير المواقع",
    desc: "مواقع، متاجر إلكترونية، منصّات مخصّصة",
  },
  {
    n: "/03",
    name: "تطبيقات الجوّال",
    desc: "iOS، أندرويد، تطبيقات هجينة",
  },
  {
    n: "/04",
    name: "إدارة السوشيال ميديا",
    desc: "استراتيجية، محتوى، إدارة المجتمع",
  },
  {
    n: "/05",
    name: "الإعلانات المدفوعة (PPC)",
    desc: "جوجل، ميتا، تيك توك، سناب",
  },
  {
    n: "/06",
    name: "إنتاج المحتوى",
    desc: "تصوير، فيديو، موشن، ما بعد الإنتاج",
  },
];

const STEPS = [
  { n: "01", title: "الاكتشاف", body: "نبدأ بمقابلات مع أصحاب العلاقة، وأبحاث الجمهور، وقراءة واضحة للسوق الذي تدخله." },
  { n: "02", title: "التخطيط", body: "استراتيجية وخارطة طريق واضحة — ما الذي سنبنيه، وماذا سنقول، وكيف سنقيس النتائج." },
  { n: "03", title: "البناء", body: "هوية، مواقع، تطبيقات، محتوى، وحملات — كلّها يصنعها فريق داخلي من ذوي الخبرة." },
  { n: "04", title: "النموّ", body: "إعلانات مدفوعة، سوشيال، SEO، وتحسين مستمرّ مرتبط بمؤشّرات أعمال حقيقية." },
];

const INSIGHTS = [
  {
    date: "04 · أبريل · 2026 — أداء",
    title: "لماذا تُهدر معظم خطط الإعلانات في السعودية الميزانية في الأسبوع الأوّل.",
    body: "إطار تدقيق سريع لاكتشاف الهدر البنيوي المخفي داخل حسابات ميتا وجوجل.",
  },
  {
    date: "22 · مارس · 2026 — رقمي",
    title: "الموقع الإلكتروني منتج، وليس بروشور.",
    body: "كيف تكتب البريف، وتبني، وتقيس موقعاً يستحقّ مكانه في القمع التسويقي.",
  },
  {
    date: "11 · مارس · 2026 — سوشيال",
    title: "تيك توك محرّك بحث. اكتب البريف على هذا الأساس.",
    body: "ما يتغيّر حين تتوقّف عن التعامل مع المحتوى القصير كتلفزيون، وتبدأ بالتعامل معه كمنصّة اكتشاف.",
  },
];

export default function HomeAr() {
  return (
    <main>
      {/* ========== HERO ========== */}
      <section className="hero">
        <video
          className="hero-video"
          src="https://video.wixstatic.com/video/b4ae0e_abeca5c618c04d56bab3e02d6eb4b5be/480p/mp4/file.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="hero-video-overlay" aria-hidden="true"></div>
        <CloudScene />
        <div className="hero-grid-lines">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div className="najdi-pattern"></div>

        <div className="hero-inner container">
          <div className="hero-top">
            <span className="eyebrow">وكالة إبداعية · 001</span>
          </div>

          <HeroLines className="hero-title h-display">
            <span className="hero-line">
              <span>نبني</span> <em className="serif-touch gold">علامات</em>
            </span>
            <span className="hero-line">
              <span>تنمو</span> <span className="hero-mark">▲</span>
            </span>
            <span className="hero-line">
              <span>على</span> <em className="serif-touch">أرض الواقع.</em>
            </span>
          </HeroLines>

          <div className="hero-bottom">
            <HeroStatue />

            <div className="hero-copy">
              <p className="body-lg" style={{ maxWidth: "40ch" }}>
                <span className="gold">إنسبشن</span> وكالة تسويق سعودية.
                نصمّم العلامات، ونبني المواقع والتطبيقات، ونُدير الإعلانات
                المدفوعة، ونُنتج المحتوى الذي يُحرّكها.
              </p>
              <div className="hero-cta-row">
                <Link className="btn btn-solid" href="/ar/work">
                  شاهد أعمالنا <span className="arrow">→</span>
                </Link>
                <Link className="btn btn-ghost" href="/ar/services">
                  ماذا نقدّم <span className="arrow">→</span>
                </Link>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-num h-display">06</div>
                <div className="stat-label">خدمات أساسية</div>
              </div>
              <div className="stat">
                <div className="stat-num h-display">100<span className="gold">%</span></div>
                <div className="stat-label">فريق داخلي</div>
              </div>
              <div className="stat">
                <div className="stat-num h-display">KSA</div>
                <div className="stat-label">من الرياض</div>
              </div>
            </div>
          </div>

          <div className="hero-scroll">
            <span>↓ مرّر</span>
            <span className="scroll-line"></span>
          </div>
        </div>
      </section>

      {/* ========== MARQUEE ========== */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["استراتيجية العلامة", "تطوير المواقع", "تطبيقات الجوّال", "السوشيال ميديا", "الإعلانات المدفوعة", "إنتاج المحتوى"].map((label, i) => (
              <span key={`${k}-${i}`} className="marquee-item">
                {label} <span className="star">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ========== INTRO ========== */}
      <Reveal as="section" className="section intro">
        <div className="container intro-grid">
          <div className="intro-eyebrow">
            <span className="eyebrow">بيان · 002</span>
          </div>
          <div className="intro-copy">
            <h2 className="h-display h2">
              استراتيجية وتصميم
              <br />
              وبرمجة و<em className="serif-touch gold">إعلام</em>
              <br />
              تحت <em className="serif-touch">سقف واحد</em>.
            </h2>
            <p className="body-lg" style={{ maxWidth: "52ch", marginTop: 32 }}>
              نحن وكالة تسويق متكاملة في المملكة العربية السعودية. من
              التموضع والهوية إلى المواقع وتطبيقات الجوّال والسوشيال
              والإعلانات المدفوعة — كلّ جزء من العلامة يبنيه ويُديره الفريق
              نفسه. لا أقسام منعزلة، ولا تسليم بين مزوّدين، ولا أعذار.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ========== SERVICES ========== */}
      <section className="section services" id="services">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">ماذا نقدّم · 003</span>
            <h2 className="h-display h2">
              ستّ تخصّصات.
              <br />
              <em className="serif-touch gold">هاجس</em> واحد.
            </h2>
          </Reveal>

          <Reveal className="services-list" stagger={0.08} y={20}>
            {SERVICES.map((s) => (
              <Link key={s.n} href="/ar/services" className="service-row">
                <span className="srv-num mono">{s.n}</span>
                <span className="srv-name h-display">{s.name}</span>
                <span className="srv-desc">{s.desc}</span>
                <span className="srv-arrow">→</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ========== FEATURED WORK ========== */}
      <section className="section featured-work">
        <div className="container">
          <Reveal className="section-head">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: 24,
              }}
            >
              <div>
                <span className="eyebrow">أعمال مختارة · 004</span>
                <h2 className="h-display h2" style={{ marginTop: 18 }}>
                  فصول <em className="serif-touch gold">حديثة</em>
                </h2>
              </div>
              <Link className="btn btn-ghost" href="/ar/work">
                تصفّح الأرشيف <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>

          <Reveal className="work-grid" stagger={0.12} y={24}>
            <Link href="/ar/work" className="work-card work-card-lg">
              <div className="work-img">
                <Image
                  src="/home/brand.png"
                  alt="إطلاق علامة ضيافة"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="work-meta">
                <span className="mono">2025 · هوية وموقع</span>
                <h3 className="h3 h-display">إطلاق علامة ضيافة</h3>
                <p className="text-mute" style={{ maxWidth: "48ch" }}>
                  نظام هوية كامل وموقع إطلاق لعلامة ضيافة بوتيك تدخل
                  السوق السعودي.
                </p>
              </div>
            </Link>
            <Link href="/ar/work" className="work-card">
              <div className="work-img">
                <Image
                  src="/home/ios.png"
                  alt="تطبيق فينتك"
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="work-meta">
                <span className="mono">2025 · تطبيق جوّال</span>
                <h3 className="h3 h-display">تطبيق فينتك</h3>
                <p className="text-mute">
                  منتج iOS وأندرويد لشركة خدمات مالية ناشئة في المنطقة.
                </p>
              </div>
            </Link>
            <Link href="/ar/work" className="work-card">
              <div className="work-img">
                <Image
                  src="/home/beautyperformance.png"
                  alt="حملة أداء D2C جمال"
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="work-meta">
                <span className="mono">2024 · إعلانات مدفوعة</span>
                <h3 className="h3 h-display">حملة أداء D2C جمال</h3>
                <p className="text-mute">
                  برنامج أداء كامل القمع في المملكة ودول الخليج.
                </p>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ========== APPROACH ========== */}
      <section className="section approach">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">المنهج · 005</span>
            <h2 className="h-display h2">
              من <em className="serif-touch">البريف</em> إلى{" "}
              <em className="serif-touch gold">النموّ</em>.
            </h2>
          </Reveal>
          <div className="approach-steps">
            {STEPS.flatMap((s, i) => {
              const nodes = [
                <Reveal key={s.n} as="div" className="step">
                  <div className="step-num mono">{s.n}</div>
                  <h4 className="h4">{s.title}</h4>
                  <p className="text-mute">{s.body}</p>
                </Reveal>,
              ];
              if (i < STEPS.length - 1) {
                nodes.push(
                  <div key={`d-${i}`} className="step-divider"></div>
                );
              }
              return nodes;
            })}
          </div>
        </div>
      </section>

      {/* ========== ABOUT TEASER ========== */}
      <section className="section about-teaser">
        <div className="container about-grid">
          <Reveal className="about-statue">
            <div className="statue-frame statue-frame-lg">
              <Image
                src="/home/saudiagency.png"
                alt="وكالة سعودية يقودها مشغّلون"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
              <div className="statue-tag">
                <span>FIG. 02</span>
                <span>—</span>
                <span>SAUDI AGENCY</span>
              </div>
            </div>
          </Reveal>
          <Reveal className="about-copy">
            <span className="eyebrow">عنّا · 006</span>
            <h2 className="h-display h2" style={{ marginTop: 18 }}>
              وكالة سعودية
              <br />
              يقودها <em className="serif-touch gold">مشغّلون</em>.
            </h2>
            <p className="body-lg" style={{ maxWidth: "46ch", marginTop: 28 }}>
              خبراء استراتيجية، ومصمّمون، ومطوّرون، وصنّاع أفلام، ومشترو
              إعلام — كلّهم داخليّون، كلّهم ذوو خبرة. نعمل مع المؤسّسين
              وقادة التسويق الذين يهتمّون بأداء العمل فعلاً.
            </p>
            <div className="about-meta">
              <div>
                <div className="meta-num h-display gold">06</div>
                <div className="meta-label">تخصّصات</div>
              </div>
              <div>
                <div className="meta-num h-display gold">KSA</div>
                <div className="meta-label">من الرياض</div>
              </div>
              <div>
                <div className="meta-num h-display gold">AR<span style={{ color: "var(--ink-low)" }}>/</span>EN</div>
                <div className="meta-label">فريق ثنائي اللغة</div>
              </div>
            </div>
            <Link className="btn btn-ghost" href="/ar/about" style={{ marginTop: 36 }}>
              اكتشف المزيد <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ========== INSIGHTS ========== */}
      <section className="section insights">
        <div className="container">
          <Reveal className="section-head">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: 24,
              }}
            >
              <div>
                <span className="eyebrow">ملاحظات ميدانية · 007</span>
                <h2 className="h-display h2" style={{ marginTop: 18 }}>
                  أحدث <em className="serif-touch gold">الأفكار</em>
                </h2>
              </div>
              <a className="btn btn-ghost" href="#">
                كل المقالات <span className="arrow">→</span>
              </a>
            </div>
          </Reveal>
          <Reveal className="insights-grid" stagger={0.1} y={20}>
            {INSIGHTS.map((it) => (
              <a key={it.title} href="#" className="insight">
                <span className="mono insight-meta">{it.date}</span>
                <h3 className="h3 h-display">{it.title}</h3>
                <p className="text-mute">{it.body}</p>
                <span className="insight-link mono">اقرأ المقال →</span>
              </a>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
