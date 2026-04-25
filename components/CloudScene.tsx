"use client";

import { useEffect, useRef } from "react";
import {
  Scene,
  FogExp2,
  PerspectiveCamera,
  WebGLRenderer,
  CanvasTexture,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  AdditiveBlending,
  BufferGeometry,
  BufferAttribute,
  PointsMaterial,
  Points,
} from "three";

/**
 * Volumetric "cloud" particle scene rendered behind the hero.
 * Pauses its render loop when offscreen, skips on mobile / reduced-motion,
 * and caps DPR to keep GPU cost low.
 */
export default function CloudScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.matchMedia("(max-width: 700px)").matches;
    const isLowEnd =
      typeof navigator !== "undefined" &&
      "hardwareConcurrency" in navigator &&
      (navigator.hardwareConcurrency || 8) <= 4;

    // On low-end / mobile / reduced-motion: skip the WebGL scene entirely.
    if (reduced || isSmall || isLowEnd) return;

    const PLUME_COUNT = 16;
    const STAR_COUNT = 280;

    const scene = new Scene();
    scene.fog = new FogExp2(0x0a0807, 0.0025);

    const camera = new PerspectiveCamera(
      55,
      mount.clientWidth / Math.max(1, mount.clientHeight),
      1,
      3000
    );
    camera.position.z = 600;

    const renderer = new WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const spriteCanvas = document.createElement("canvas");
    spriteCanvas.width = 128;
    spriteCanvas.height = 128;
    const sctx = spriteCanvas.getContext("2d");
    if (sctx) {
      const grad = sctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, "rgba(232, 200, 137, 0.55)");
      grad.addColorStop(0.4, "rgba(212, 162, 76, 0.18)");
      grad.addColorStop(1, "rgba(10, 8, 7, 0)");
      sctx.fillStyle = grad;
      sctx.fillRect(0, 0, 128, 128);
    }
    const cloudTexture = new CanvasTexture(spriteCanvas);

    const plumes: { mesh: Mesh; speed: number }[] = [];
    const plumeMaterial = new MeshBasicMaterial({
      map: cloudTexture,
      depthWrite: false,
      depthTest: false,
      transparent: true,
      blending: AdditiveBlending,
      opacity: 0.28,
    });
    const plumeGeometry = new PlaneGeometry(900, 900);

    for (let i = 0; i < PLUME_COUNT; i++) {
      const mesh = new Mesh(plumeGeometry, plumeMaterial);
      mesh.position.set(
        (Math.random() - 0.5) * 1600,
        (Math.random() - 0.5) * 800,
        -500 + Math.random() * 700
      );
      mesh.rotation.z = Math.random() * Math.PI * 2;
      const s = 0.6 + Math.random() * 1.4;
      mesh.scale.set(s, s, 1);
      scene.add(mesh);
      plumes.push({ mesh, speed: 0.0001 + Math.random() * 0.0003 });
    }

    const positions = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2400;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1400;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1400;
    }
    const starGeo = new BufferGeometry();
    starGeo.setAttribute("position", new BufferAttribute(positions, 3));
    const starMat = new PointsMaterial({
      size: 1.6,
      color: 0xd4a24c,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
      blending: AdditiveBlending,
    });
    const stars = new Points(starGeo, starMat);
    scene.add(stars);

    let mouseX = 0;
    let mouseY = 0;
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 60;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 30;
    };
    document.addEventListener("mousemove", onMouse, { passive: true });

    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / Math.max(1, h);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    let raf = 0;
    let t = 0;
    let isVisible = true;
    let isTabActive = !document.hidden;

    const animate = () => {
      if (!isVisible || !isTabActive) {
        raf = requestAnimationFrame(animate);
        return;
      }
      t += 0.0016;
      for (let i = 0; i < plumes.length; i++) {
        const p = plumes[i];
        p.mesh.rotation.z += p.speed;
        p.mesh.position.y += Math.sin(t + i) * 0.06;
      }
      stars.rotation.y += 0.0003;
      stars.rotation.x += 0.00012;
      camera.position.x += (mouseX - camera.position.x) * 0.02;
      camera.position.y += (-mouseY - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(mount);

    const onVisibility = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("mousemove", onMouse);
      document.removeEventListener("visibilitychange", onVisibility);
      plumeGeometry.dispose();
      plumeMaterial.dispose();
      cloudTexture.dispose();
      starGeo.dispose();
      starMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="cloud-canvas" aria-hidden="true" />;
}
