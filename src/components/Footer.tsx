import { business } from "@/data/business";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 md:px-10">
        <div className="flex w-full flex-col items-center justify-between gap-3 text-sm text-ink-soft md:flex-row">
          <p className="font-display italic text-chili">{business.name}</p>
          <p>
            © {new Date().getFullYear()} {business.fullName}. Dibuat dengan
            resep rumahan dan kasih sayang di Depok.
          </p>
        </div>

        <div className="w-full border-t border-line" />

        <a
          href="https://laterra.click"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 opacity-50 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
            Crafted by
          </span>
          <span className="text-xs font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-chili">
            laterra.click
          </span>
        </a>
      </div>
    </footer>
  );
}
