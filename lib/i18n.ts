export type Locale = "en" | "ar";

export function getLocaleFromPath(pathname: string | null | undefined): Locale {
  if (!pathname) return "en";
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

export function localizedHref(href: string, locale: Locale): string {
  if (locale !== "ar") return href;
  if (href === "/") return "/ar";
  if (href.startsWith("/ar")) return href;
  if (href.startsWith("/")) return `/ar${href}`;
  return href;
}

export function switchLocaleHref(pathname: string, target: Locale): string {
  const isAr = pathname === "/ar" || pathname.startsWith("/ar/");
  if (target === "ar") {
    if (isAr) return pathname;
    if (pathname === "/") return "/ar";
    return `/ar${pathname}`;
  }
  if (!isAr) return pathname;
  if (pathname === "/ar") return "/";
  return pathname.replace(/^\/ar/, "") || "/";
}

export const NAV_LABELS: Record<Locale, { home: string; services: string; work: string; about: string; contact: string; cta: string; brand: string }> = {
  en: {
    home: "Home",
    services: "Services",
    work: "Work",
    about: "About",
    contact: "Contact",
    cta: "Start a Project",
    brand: "INCEPTION",
  },
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    work: "الأعمال",
    about: "من نحن",
    contact: "تواصل",
    cta: "ابدأ مشروعاً",
    brand: "إنسبشن",
  },
};

export const FOOTER_COPY: Record<Locale, {
  eyebrow: string;
  headLine1: string;
  headLine2: string;
  headGold: string;
  cta: string;
  city: string;
  blurb: string;
  established: string;
  langPair: string;
  navHead: string;
  connectHead: string;
  contactHead: string;
  addrLine1: string;
  addrLine2: string;
  copyright: string;
  crafted: string;
}> = {
  en: {
    eyebrow: "Let's build something",
    headLine1: "Stories that move",
    headLine2: "markets",
    headGold: "forward",
    cta: "Start a Project",
    city: "Riyadh · Saudi Arabia",
    blurb:
      "A creative marketing agency turning ambitious ideas into measurable cultural moments.",
    established: "EST. 2018",
    langPair: "EN / AR",
    navHead: "Navigate",
    connectHead: "Connect",
    contactHead: "Contact",
    addrLine1: "King Fahd Rd, Olaya",
    addrLine2: "Riyadh 12333",
    copyright: "© 2026 Inception Agency · CR 1010987654",
    crafted: "Crafted in Riyadh",
  },
  ar: {
    eyebrow: "لنبنِ شيئاً معاً",
    headLine1: "قصص تُحرّك",
    headLine2: "الأسواق",
    headGold: "إلى الأمام",
    cta: "ابدأ مشروعاً",
    city: "الرياض · المملكة العربية السعودية",
    blurb:
      "وكالة تسويق إبداعية تُحوّل الأفكار الطموحة إلى لحظات ثقافية قابلة للقياس.",
    established: "تأسست · 2018",
    langPair: "AR / EN",
    navHead: "تنقّل",
    connectHead: "تواصل",
    contactHead: "اتصل بنا",
    addrLine1: "طريق الملك فهد، العليا",
    addrLine2: "الرياض 12333",
    copyright: "© 2026 وكالة إنسبشن · س.ت 1010987654",
    crafted: "صُنع في الرياض",
  },
};
