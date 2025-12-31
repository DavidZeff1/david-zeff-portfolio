"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/leetcode", label: "LeetCode Roadmap" },
    { href: "/stepblocker", label: "StepBlocker" },
    {
      href: "https://job-app-generator-two.vercel.app/",
      label: "Dynamic Resume Generator",
    },
  ];

  return (
    <nav className="flex justify-center gap-6 mb-12">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            pathname === link.href
              ? "border-b-2 border-[var(--accent)] text-[var(--heading)]"
              : "text-[var(--muted)] hover:text-[var(--heading)]"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
