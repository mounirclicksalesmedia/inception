"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Wraps a heading whose direct children are .hero-line spans.
 * Each line's children are revealed with a staggered upward translate.
 */
export default function HeroLines({ children, className = "" }: Props) {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".hero-line > *");
    gsap.set(items, { yPercent: 110, autoAlpha: 0 });
    const tween = gsap.to(items, {
      yPercent: 0,
      autoAlpha: 1,
      duration: 1.1,
      ease: "expo.out",
      stagger: 0.08,
      delay: 0.25,
    });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <h1 ref={ref} className={className}>
      {children}
    </h1>
  );
}
