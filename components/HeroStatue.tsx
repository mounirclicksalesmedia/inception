"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function HeroStatue() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none), (prefers-reduced-motion: reduce)").matches) return;
    const xTo = gsap.quickTo(el, "x", { duration: 0.7, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.7, ease: "power3.out" });
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;
      xTo(dx * -10);
      yTo(dy * -10);
    };
    document.addEventListener("mousemove", onMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="hero-statue" aria-hidden="true">
      <div ref={ref} className="statue-frame">
        <Image
          src="/home/hero.png"
          alt="Inception — leading marketing agency in Saudi Arabia"
          fill
          priority
          sizes="(max-width: 1024px) 60vw, 320px"
          style={{ objectFit: "cover" }}
        />
        <div className="statue-shimmer"></div>
        <div className="statue-tag">
          <span>FIG · 01</span>
          <span>—</span>
          <span>N° 01 MARKETING AGENCY · KSA</span>
        </div>
      </div>
    </div>
  );
}
