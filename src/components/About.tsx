"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { business, flavors } from "@/data/business";

const stats = [
  {
    label: "Rating Google Maps",
    value: business.rating.toFixed(1),
    suffix: "/ 5.0",
  },
  { label: "Varian Rasa", value: String(flavors.length), suffix: "pilihan" },
  { label: "Diproses", value: "Harian", suffix: "fresh digoreng" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-reveal", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-stat", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 85%",
        },
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="tentang"
      className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32"
    >
      <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div>
          <p className="about-reveal mb-4 text-xs font-bold uppercase tracking-[0.14em] text-chili">
            Tentang Kami
          </p>
          <h2 className="about-reveal font-display text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
            Dari dapur rumahan, untuk pecinta jamur crispy di GDC dan sekitarnya.
          </h2>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <p className="about-reveal text-lg leading-[1.7] text-ink-soft">
            {business.fullName} lahir dari kecintaan pada camilan tradisional
            jamur crispy. Setiap hari kami memilih jamur tiram segar, mengiris
            dan menggorengnya hingga renyah sempurna, lalu melapisinya dengan
            bumbu tabur racikan sendiri, dari yang gurih original sampai pedas
            menggigit.
          </p>
          <p className="about-reveal text-lg leading-[1.7] text-ink-soft">
            Tanpa gerai besar, tanpa iklan berlebihan. Kepercayaan pelanggan di
            sekitar Cilodong, Depok, tumbuh dari mulut ke mulut dan terekam
            dalam rating sempurna di Google Maps.
          </p>

          <div className="about-stats mt-4 grid grid-cols-3 gap-4 border-t border-line pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <p className="font-display text-3xl font-bold text-chili">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                  {stat.suffix}
                </p>
                <p className="mt-2 text-sm text-ink-soft">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
