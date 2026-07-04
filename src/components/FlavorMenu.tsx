"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { flavors, spiceCustomization } from "@/data/business";

function SpiceScale() {
  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`Level pedas bisa diatur dari ${spiceCustomization.min} sampai ${spiceCustomization.max}`}
    >
      {Array.from({ length: spiceCustomization.max }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-chili"
          style={{ opacity: 0.35 + (i / (spiceCustomization.max - 1)) * 0.65 }}
        />
      ))}
    </div>
  );
}

export default function FlavorMenu() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".flavor-card");
      ScrollTrigger.batch(cards, {
        start: "top 88%",
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            overwrite: true,
          }),
      });
      gsap.set(cards, { y: 28, opacity: 0 });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="bg-cream-soft py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-chili">
              Menu
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
              Aneka Rasa, Satu Kekriukan.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-[1.7] text-ink-soft">
            Sembilan varian rasa, dari yang gurih klasik sampai yang berani
            pedas. Pilih sesuai selera lidahmu.
          </p>
        </div>

        <div className="mb-10 flex flex-col items-start gap-4 rounded-2xl border border-chili/20 bg-chili/5 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-ink">Atur Level Pedas Sendiri</p>
            <p className="mt-1 max-w-lg text-sm leading-[1.7] text-ink-soft">
              {spiceCustomization.note}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Ringan
            </span>
            <SpiceScale />
            <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Extra
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {flavors.map((flavor) => (
            <div
              key={flavor.name}
              className="flavor-card group flex flex-col justify-between rounded-2xl border border-line bg-cream p-6 shadow-[0_14px_28px_-18px_rgba(43,27,18,0.4)] transition-transform duration-200 ease-out hover:-translate-y-1.5"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {flavor.name}
                </h3>
                <p className="mt-2 text-sm leading-[1.7] text-ink-soft">
                  {flavor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
