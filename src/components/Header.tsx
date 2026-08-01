"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Deliberately three items. The previous nav carried eight, including two
 * dropdowns pointing at work the homepage now covers properly — breadth reads
 * as unfocused where a short nav reads as confident. Everything else stays
 * reachable from the footer.
 */
const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/resume/David-Zeff-Data-Analyst-EN.pdf", label: "CV", external: true },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="max-w-3xl mx-auto flex items-baseline justify-between gap-6 mb-20 md:mb-28">
      <Link
        href="/"
        className="text-sm font-medium tracking-tight text-[var(--heading)] hover:text-[var(--accent)] transition-colors"
      >
        David Zeff
      </Link>

      <nav className="flex items-baseline gap-6 md:gap-8">
        {LINKS.map((l) =>
          l.external ? (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] hover:text-[var(--heading)] transition-colors"
            >
              {l.label}
            </a>
          ) : (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                pathname === l.href
                  ? "text-[var(--heading)]"
                  : "text-[var(--muted)] hover:text-[var(--heading)]"
              }`}
            >
              {l.label}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}
