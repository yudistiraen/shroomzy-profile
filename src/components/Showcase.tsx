"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { business } from "@/data/business";

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".showcase-photo", {
        clipPath: "inset(0 0 100% 0)",
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".showcase-text", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="galeri"
      className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32"
    >
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
        <div className="showcase-photo relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_30px_60px_-20px_rgba(43,27,18,0.4)]">
          <Image
            src="/assets/shroomzy-product.jpg"
            alt="Semangkuk jamur crispy Shroomzy siap disantap"
            fill
            sizes="(min-width: 768px) 560px, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        </div>

        <div>
          <p className="showcase-text mb-4 text-xs font-bold uppercase tracking-[0.14em] text-chili">
            Bukti Rasa
          </p>
          <h2 className="showcase-text font-display text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
            Rating sempurna, langsung dari pelanggan sekitar Depok.
          </h2>
          <p className="showcase-text mt-6 max-w-md text-lg leading-[1.7] text-ink-soft">
            {business.name} tercatat dengan rating{" "}
            <span className="font-semibold text-chili">
              {business.rating.toFixed(1)} / 5.0
            </span>{" "}
            di Google Maps sebagai {business.category.toLowerCase()}. Tekstur
            renyah yang konsisten jadi alasan pelanggan datang kembali.
          </p>

          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="showcase-text mt-8 inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-bold text-ink transition-colors duration-200 hover:border-chili hover:text-chili"
          >
            Lihat di Google Maps
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
