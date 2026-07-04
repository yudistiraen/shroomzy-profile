"use client";

import { useRef } from "react";
import { ScrollTrigger, useGSAP } from "@/lib/gsap";
import { business } from "@/data/business";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#menu", label: "Menu" },
  { href: "#galeri", label: "Galeri" },
  { href: "#lokasi", label: "Lokasi" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const trigger = ScrollTrigger.create({
      start: 60,
      onEnter: () => navRef.current?.classList.add("nav-solid"),
      onLeaveBack: () => navRef.current?.classList.remove("nav-solid"),
    });

    return () => trigger.kill();
  });

  return (
    <header
      ref={navRef}
      className="fixed top-0 z-40 w-full transition-[background-color,box-shadow] duration-300"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="font-display text-2xl font-semibold italic tracking-tight text-chili transition-transform duration-200 hover:-rotate-2 focus-visible:-rotate-2"
        >
          {business.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-[0.08em] text-ink-soft transition-colors duration-200 hover:text-chili focus-visible:text-chili"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`https://wa.me/${business.phoneWa}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-chili px-5 py-2.5 text-sm font-bold text-cream shadow-[0_6px_16px_-4px_rgba(211,73,29,0.55)] transition-transform duration-200 ease-out hover:scale-105 hover:bg-chili-dark active:scale-95"
        >
          Pesan Sekarang
        </a>
      </nav>

      <style jsx>{`
        header.nav-solid {
          background-color: color-mix(in srgb, var(--color-cream) 92%, transparent);
          backdrop-filter: blur(8px);
          box-shadow: 0 8px 24px -16px rgba(43, 27, 18, 0.35);
        }
      `}</style>
    </header>
  );
}
