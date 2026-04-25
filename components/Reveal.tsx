"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: string;
  delay?: number;
  y?: number;
  stagger?: number;
};

const tagMap: Record<string, React.ElementType> = {
  div: "div",
  section: "section",
  article: "article",
  aside: "aside",
  header: "header",
  footer: "footer",
  main: "main",
  span: "span",
  ul: "ul",
  ol: "ol",
  li: "li",
  nav: "nav",
};

export default function Reveal({
  children,
  className = "",
  as = "div",
  delay = 0,
  y = 32,
  stagger = 0,
}: Props) {
  const [el, setEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!el) return;
    const targets = stagger > 0 ? Array.from(el.children) : el;
    gsap.set(targets, { autoAlpha: 0, y });
    const tween = gsap.to(targets, {
      autoAlpha: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      delay,
      stagger,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [el, delay, y, stagger]);

  const Wrapper = tagMap[as] ?? (tagMap.div as React.ElementType);
  return (
    <Wrapper ref={setEl} className={className}>
      {children}
    </Wrapper>
  );
}
