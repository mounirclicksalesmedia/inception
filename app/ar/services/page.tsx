import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import HeroLines from "@/components/HeroLines";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الخدمات — إنسبشن",
  description:
    "ستّ خدمات أساسية، فريق واحد: استراتيجية العلامة، تطوير المواقع، تطبيقات الجوّال، إدارة السوشيال ميديا، الإعلانات المدفوعة (PPC)، إنتاج المحتوى — تُنفَّذ داخلياً في المملكة العربية السعودية.",
};

const SERVICES = [
  {
    n: "/01",
    id: "srv-01",
    name: "استراتيجية العلامة",
    tag: "تموضع · هوية",
    img: "amphora",
    imgSrc: "/services/brand.png",
    fig: "FIG · 01",
    figLabel: "POSITIONING & IDENTITY",
    body: "تموضع واضح، اسم لا يُنسى، ونظام هوية يصمد عبر كلّ قناة — من أيقونة التطبيق إلى الإعلانات الخارجية.",
    list: [
      "تدقيق العلامة وأبحاث السوق",
      "هندسة التموضع والرسائل",
      "التسمية والهوية اللفظية",
      "تصميم الشعار وأنظمة الهوية البصرية",
      "إرشادات العلامة وخطّة الإطلاق",
    ],
    timing: "6–12 أسبوعاً",
    flip: false,
  },
  {
    n: "/02",
    id: "srv-02",
    name: "تطوير المواقع",
    tag: "مواقع · متاجر إلكترونية",
    img: "bust",
    imgSrc: "/services/webdevelopment.png",
    fig: "FIG · 02",
    figLabel: "WEB & PLATFORMS",
    body: "مواقع ومتاجر إلكترونية ومنصّات مخصّصة — مصمّمة للتحويل، ومبنيّة لتدوم. سريعة، متاحة، وسهلة الإدارة.",
    list: [
      "مواقع تسويقية ومؤسّسية",
      "متاجر إلكترونية (Shopify، سلّة، مخصّص)",
      "تطبيقات ويب ومنصّات SaaS",
      "أنظمة إدارة المحتوى وتكاملات API",
      "إعداد الأداء وSEO والتحليلات",
    ],
    timing: "6–14 أسبوعاً",
    flip: true,
  },
  {
    n: "/03",
    id: "srv-03",
    name: "تطبيقات الجوّال",
    tag: "iOS · أندرويد · هجين",
    img: "hand",
    imgSrc: "/services/mobileapps.png",
    fig: "FIG · 03",
    figLabel: "MOBILE PRODUCTS",
    body: "تطبيقات جوّال أصلية وهجينة — من أوّل واير فريم إلى إصدار App Store وGoogle Play، مع التحليلات وحلقات النموّ.",
    list: [
      "استراتيجية المنتج وتجربة المستخدم",
      "تطوير iOS وأندرويد",
      "تطبيقات هجينة (React Native / Flutter)",
      "هندسة الباك إند وواجهات API",
      "تحسين متاجر التطبيقات والإطلاق",
    ],
    timing: "10–20 أسبوعاً",
    flip: false,
  },
  {
    n: "/04",
    id: "srv-04",
    name: "إدارة السوشيال ميديا",
    tag: "استراتيجية · محتوى · مجتمع",
    img: "column",
    imgSrc: "/services/socialmedia.png",
    fig: "FIG · 04",
    figLabel: "ALWAYS-ON SOCIAL",
    body: "إدارة كاملة لقنوات السوشيال ميديا ثنائية اللغة — من خطط المحتوى الشهرية إلى الردّ على المجتمع — بنبرة تشبه علامتك فعلاً.",
    list: [
      "استراتيجية القنوات (إنستجرام، تيك توك، X، لينكد إن، سناب)",
      "خطط محتوى شهرية (عربي / إنجليزي)",
      "محتوى ثابت وفيديو وموشن",
      "إدارة المجتمع والرسائل الخاصّة",
      "تقارير وتطوير إبداعي مستمرّ",
    ],
    timing: "اشتراك شهري",
    flip: true,
  },
  {
    n: "/05",
    id: "srv-05",
    name: "الإعلانات المدفوعة (PPC)",
    tag: "جوجل · ميتا · تيك توك · سناب",
    img: "amphora",
    imgSrc: "/services/ads.png",
    fig: "FIG · 05",
    figLabel: "PERFORMANCE MEDIA",
    body: "إعلانات مدفوعة مبنيّة على نتائج أعمال حقيقية — عملاء محتملون، مبيعات، تثبيتات تطبيق — لا على أرقام زائفة. يبنيها ويُحسّنها مشترو إعلام محترفون.",
    list: [
      "إعلانات جوجل — Search وPMax وYouTube",
      "إعلانات ميتا — فيسبوك وإنستجرام",
      "إعلانات تيك توك وسناب وX",
      "تتبّع التحويلات وإسنادها",
      "صفحات الهبوط وتحسين معدّل التحويل",
    ],
    timing: "اشتراك شهري",
    flip: false,
  },
  {
    n: "/06",
    id: "srv-06",
    name: "إنتاج المحتوى",
    tag: "تصوير · فيديو · موشن",
    img: "column",
    imgSrc: "/services/contentpro.png",
    fig: "FIG · 06",
    figLabel: "STUDIO & POST",
    body: "فريق إنتاج داخلي يُصوّر ويُحرّر بسرعة السوشيال ولمعان البثّ — للإعلانات والسوشيال والأفلام التعريفية وإطلاق المنتجات.",
    list: [
      "أفلام تعريفية وإعلانات تلفزيونية",
      "فيديو قصير لأوّل السوشيال",
      "تصوير فوتوغرافي وريتوش",
      "موشن جرافيكس و3D وتأثيرات بصرية",
      "ما بعد الإنتاج والترجمة (عربي / إنجليزي)",
    ],
    timing: "حسب التصوير · اشتراك",
    flip: true,
  },
];

const LETTERS = ["أ.", "ب.", "ج.", "د.", "هـ."];

export default function ServicesPageAr() {
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
          <span>الخدمات · الفهرس</span>
          <span className="dim">06 تخصّصات</span>
        </div>
        <div className="srv-hero-meta-r">
          <span>العدد · 02</span>
          <span className="dim">RUH / JED</span>
        </div>

        <div className="container srv-hero-inner">
          <span className="eyebrow">الخدمات · 001</span>
          <HeroLines className="h-display srv-hero-title">
            <span className="hero-line line">
              <span>ستّ</span> <em className="serif-touch gold">تخصّصات</em>.
            </span>
            <span className="hero-line line">
              <span>هاجس</span> <em className="serif-touch">واحد</em>.
            </span>
          </HeroLines>
          <div className="srv-hero-foot">
            <p className="body-lg" style={{ maxWidth: "50ch" }}>
              من تموضع علامة جديدة إلى إدارة إعلاناتها المدفوعة — نُغطّي
              منظومة التسويق الكاملة داخلياً. فريق واحد بخبرة عالية،
              ومخرج واحد قابل للمحاسبة، ونتائج قابلة للقياس من اليوم الأوّل.
            </p>
            <div className="srv-hero-stats">
              <div>
                <div className="srv-stat-num h-display">120<span className="gold">+</span></div>
                <div className="meta-label">تعاقدات</div>
              </div>
              <div>
                <div className="srv-stat-num h-display">14</div>
                <div className="meta-label">جوائز</div>
              </div>
              <div>
                <div className="srv-stat-num h-display">07</div>
                <div className="meta-label">سنوات</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee srv-marquee" aria-hidden="true">
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

      {/* INDEX */}
      <section className="section srv-index-section">
        <div className="container">
          <Reveal className="srv-index-head">
            <span className="eyebrow">الفهرس · 002</span>
            <h2 className="h-display h2" style={{ marginTop: 18 }}>
              المجموعة <em className="serif-touch gold">الكاملة</em>.
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
                <span className="mono dim">تخصّص</span>
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
                  <span className="dim">مدّة التعاقد المعتادة</span>
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
            <span className="eyebrow">نموذج التعاقد · 003</span>
            <h2 className="h-display h2">
              ثلاث طرق <em className="serif-touch gold">للعمل</em> معنا.
            </h2>
          </Reveal>
          <Reveal className="models-grid" stagger={0.1} y={20}>
            <div className="model-card">
              <span className="mono dim">النموذج · A</span>
              <h3 className="h-display h3">مشروع</h3>
              <p>
                نطاق ومخرجات ثابتة — مناسب لإطلاق علامة، أو موقع جديد،
                أو بناء تطبيق جوّال، أو حملة واحدة.
              </p>
              <span className="model-rate">
                ابتداءً من <span className="gold">60 ألف ريال</span>
              </span>
            </div>
            <div className="model-card model-card-feature">
              <span className="mono dim">النموذج · B · الأكثر اختياراً</span>
              <h3 className="h-display h3">اشتراك</h3>
              <p>
                فريق أوّل مدمج عبر السوشيال والإعلانات المدفوعة والمحتوى
                — يُدير علامتك شهراً بشهر بمؤشّرات أداء واضحة.
              </p>
              <span className="model-rate">
                ابتداءً من <span className="gold">25 ألف ريال / شهر</span>
              </span>
            </div>
            <div className="model-card">
              <span className="mono dim">النموذج · C</span>
              <h3 className="h-display h3">سبرنت</h3>
              <p>
                أسبوعان مكثّفان — سبرنت علامة، أو تدقيق إعلانات مدفوعة،
                أو انطلاقة إعادة تصميم موقع. سريع، مركّز، حاسم.
              </p>
              <span className="model-rate">
                ابتداءً من <span className="gold">30 ألف ريال</span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE REV */}
      <div className="marquee srv-marquee marquee-rev" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["استراتيجية", "هوية", "ويب", "جوّال", "سوشيال", "إعلانات مدفوعة", "محتوى"].map((label, i) => (
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
              <span className="eyebrow">تواصل معنا · 004</span>
              <h2
                className="h-display h2"
                style={{ marginTop: 18, maxWidth: "18ch" }}
              >
                لديك فكرة مشروع؟
                <br />
                سنُجيب <em className="serif-touch gold">في اليوم نفسه</em>.
              </h2>
            </div>
            <Link className="btn btn-solid" href="/ar/contact">
              ابدأ مشروعاً <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
