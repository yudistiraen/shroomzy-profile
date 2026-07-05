"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { business } from "@/data/business";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(".hero-eyebrow", {
        y: 16,
        opacity: 0,
        duration: 0.6,
        clearProps: "transform",
      })
        .from(
          ".hero-heading-line",
          { y: 40, opacity: 0, duration: 0.8, stagger: 0.1, clearProps: "transform" },
          "-=0.35"
        )
        .from(".hero-sub", {
          y: 20,
          opacity: 0,
          duration: 0.7,
          clearProps: "transform",
        }, "-=0.5")
        .from(
          ".hero-photo",
          { scale: 0.9, rotate: 8, opacity: 0, duration: 0.9 },
          "-=0.45"
        )
        .from(
          ".hero-badge",
          { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(2)" },
          "-=0.3"
        );

      gsap.to(".hero-photo", {
        y: -14,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.4,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="top"
      className="grain relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 60% 50% at 15% 10%, rgba(232,169,58,0.35), transparent 60%), radial-gradient(ellipse 55% 45% at 90% 20%, rgba(211,73,29,0.18), transparent 65%)",
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-10">
        <div>
          <p className="hero-eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-cream-soft px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">
            UMKM Jamur Crispy · GDC - Depok, Jawa Barat
          </p>

          <h1 className="font-display text-[13vw] leading-[0.95] font-semibold tracking-[-0.03em] text-ink sm:text-6xl md:text-6xl lg:text-7xl">
            <span className="hero-heading-line block">Kriuknya Nagih,</span>
            <span className="hero-heading-line block italic text-chili">
              Rasanya Juara.
            </span>
          </h1>

          <p className="hero-sub mt-6 max-w-md text-lg leading-[1.7] text-ink-soft">
            {business.name} menggoreng jamur tiram segar jadi camilan renyah
            tahan lama, dengan bumbu tabur aneka rasa racikan rumahan langsung
            dari dapur kami di Depok.
          </p>

          <div className="hero-cta-group mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`https://wa.me/${business.phoneWa}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-transparent bg-chili px-7 py-3.5 text-sm font-bold text-cream shadow-[0_10px_24px_-6px_rgba(211,73,29,0.55)] transition-transform duration-200 ease-out hover:scale-105 hover:bg-chili-dark active:scale-95"
            >
              Pesan via WhatsApp
            </a>
            <a
              href="#menu"
              className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-bold text-ink transition-colors duration-200 hover:border-chili hover:text-chili active:scale-95"
            >
              Lihat Varian Rasa
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="hero-photo relative aspect-[4/5] w-full max-w-sm -rotate-3 overflow-hidden rounded-[28px] bg-tan p-3 shadow-[0_30px_60px_-20px_rgba(43,27,18,0.45)]">
            <div className="relative h-full w-full overflow-hidden rounded-[20px]">
              <Image
                src="/assets/shroomzy-product.jpg"
                alt="Jamur crispy aneka rasa Shroomzy"
                fill
                priority
                sizes="(min-width: 768px) 384px, 80vw"
                className="object-cover mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-chili/10" />
            </div>
          </div>

          <div className="hero-badge absolute -top-4 right-4 flex -rotate-6 flex-col items-center rounded-2xl bg-cream px-4 py-3 text-center shadow-[0_16px_30px_-10px_rgba(43,27,18,0.35)] md:right-8">
            <span className="font-display text-2xl font-bold text-chili">
              {business.rating.toFixed(1)}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-soft">
              ★★★★★ Google
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
