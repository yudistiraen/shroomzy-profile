"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const items = [
  "EXTRA PEDAS",
  "BALADO",
  "BARBEQUE",
  "JAGUNG MANIS",
  "JAGUNG BAKAR",
  "SAPI PANGGANG",
  "KEJU MANIS",
  "SAOS",
  "MAYONAISE",
];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      let tween: gsap.core.Tween | undefined;

      // Measure the real pixel width of one full copy and animate exactly
      // that distance — an exact, content-agnostic loop instead of a
      // percentage guess, so the seam between the last and first word
      // never skips or snaps.
      const build = () => {
        tween?.kill();
        gsap.set(track, { x: 0 });
        const setWidth = track.scrollWidth / 2;
        tween = gsap.to(track, {
          x: -setWidth,
          duration: 22,
          ease: "none",
          repeat: -1,
        });
      };

      build();
      window.addEventListener("resize", build);

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => tween?.pause());

      return () => {
        window.removeEventListener("resize", build);
        mm.revert();
        tween?.kill();
      };
    },
    { scope: trackRef }
  );

  const doubled = [...items, ...items];

  return (
    <div className="grain overflow-hidden border-y border-line bg-ink py-4">
      <div
        ref={trackRef}
        className="flex w-max whitespace-nowrap will-change-transform"
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mr-10 flex items-center font-display text-xl italic tracking-tight text-cream/90"
          >
            {item}
            <span className="ml-10 text-spice" aria-hidden="true">
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
