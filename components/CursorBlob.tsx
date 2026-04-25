"use client";

import { useEffect, useRef } from "react";

export default function CursorBlob() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (prefers-reduced-motion: reduce)").matches) return;
    const blob = ref.current;
    if (!blob) return;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;
    let raf = 0;
    let isTabActive = !document.hidden;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      blob.style.opacity = "1";
    };
    const onLeave = () => {
      blob.style.opacity = "0";
    };
    const onVisibility = () => {
      isTabActive = !document.hidden;
    };
    const loop = () => {
      if (isTabActive) {
        const dx = tx - cx;
        const dy = ty - cy;
        // Skip the DOM write when motion is below 0.1px — saves layout work.
        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
          cx += dx * 0.08;
          cy += dy * 0.08;
          blob.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
        }
      }
      raf = requestAnimationFrame(loop);
    };
    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <div ref={ref} className="cursor-blob" aria-hidden="true" />;
}
