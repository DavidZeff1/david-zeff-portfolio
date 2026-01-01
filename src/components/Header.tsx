"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/leetcode", label: "LeetCode Roadmap" },
    { href: "/stepblocker", label: "StepBlocker" },
  ];

  const projectLinks = [
    {
      href: "https://job-app-generator-two.vercel.app/",
      label: "Dynamic Resume Generator",
    },
    {
      href: "https://job-tracker-eta-liard.vercel.app/",
      label: "Job Tracker",
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex justify-center gap-6 mb-12">
      {mainLinks.map((link) => (
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

      {/* Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
            isDropdownOpen
              ? "text-[var(--heading)]"
              : "text-[var(--muted)] hover:text-[var(--heading)]"
          }`}
        >
          More Projects
          <svg
            className={`w-4 h-4 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-[var(--background)] border border-[var(--muted)]/20 rounded-lg shadow-lg py-2 z-50">
            {projectLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--heading)] hover:bg-[var(--muted)]/10 transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
