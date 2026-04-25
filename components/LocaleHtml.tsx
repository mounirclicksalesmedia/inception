"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/lib/i18n";

export default function LocaleHtml() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = getLocaleFromPath(pathname);
    const html = document.documentElement;
    if (locale === "ar") {
      html.setAttribute("lang", "ar");
      html.setAttribute("dir", "rtl");
      html.classList.add("is-ar");
    } else {
      html.setAttribute("lang", "en");
      html.setAttribute("dir", "ltr");
      html.classList.remove("is-ar");
    }
  }, [pathname]);

  return null;
}
