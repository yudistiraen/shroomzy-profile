"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { business } from "@/data/business";

const details = [
  { label: "Alamat", value: business.address },
  { label: "Jam Buka", value: `${business.hoursLabel}, ${business.hoursValue}` },
  { label: "Telepon / WhatsApp", value: business.phoneDisplay },
];

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".location-reveal", {
        y: 26,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="lokasi"
      className="grain bg-ink py-24 text-cream md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="location-reveal mb-4 text-xs font-bold uppercase tracking-[0.14em] text-spice">
          Lokasi &amp; Pemesanan
        </p>
        <h2 className="location-reveal font-display max-w-xl text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
          Mampir langsung atau pesan dari rumah.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div className="location-reveal flex flex-col gap-7">
            {details.map((item) => (
              <div key={item.label} className="border-b border-cream/15 pb-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-spice">
                  {item.label}
                </p>
                <p className="mt-2 text-lg leading-[1.7] text-cream/90">
                  {item.value}
                </p>
              </div>
            ))}

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`https://wa.me/${business.phoneWa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-transparent bg-chili px-7 py-3.5 text-sm font-bold text-cream shadow-[0_10px_24px_-6px_rgba(211,73,29,0.55)] transition-transform duration-200 ease-out hover:scale-105 hover:bg-chili-dark active:scale-95"
              >
                Chat WhatsApp
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cream/25 px-7 py-3.5 text-sm font-bold text-cream transition-colors duration-200 hover:border-spice hover:text-spice active:scale-95"
              >
                Buka Petunjuk Arah
              </a>
            </div>
          </div>

          <div className="location-reveal overflow-hidden rounded-[28px] border border-cream/15 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
            <iframe
              title={`Peta lokasi ${business.name}`}
              src={business.mapsEmbedUrl}
              className="h-[360px] w-full grayscale-[15%] md:h-full md:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
