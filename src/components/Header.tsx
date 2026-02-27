"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDataDropdownOpen, setIsDataDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dataDropdownRef = useRef<HTMLDivElement>(null);

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

  const dataProjectLinks = [
    {
      href: "https://davidzeff1-chicago-dashboard-wxkmlm.streamlit.app/",
      label: "Chicago Crime & Education Analysis",
    },
    {
      href: "https://airbnb-price-comparison-by-city.streamlit.app/",
      label: "Airbnb Pricing Analysis",
    },
    {
      href: "https://keyword-trends-1.streamlit.app/",
      label: "Google Searches Analysis",
    },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        dataDropdownRef.current &&
        !dataDropdownRef.current.contains(event.target as Node)
      ) {
        setIsDataDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <nav className="flex items-center">
        {mainLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              pathname === link.href
                ? "text-[var(--heading)]"
                : "text-[var(--muted)] hover:text-[var(--heading)]"
            }`}
          >
            {link.label}
          </Link>
        ))}

        {/* More Projects Dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              isDropdownOpen
                ? "text-[var(--heading)]"
                : "text-[var(--muted)] hover:text-[var(--heading)]"
            }`}
          >
            More Projects
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full mt-1 left-0 bg-[var(--background)] border border-[var(--border)] rounded shadow-md z-50 min-w-[200px]">
              {projectLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--heading)] hover:bg-[var(--hover)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Data Projects Dropdown */}
        <div ref={dataDropdownRef} className="relative">
          <button
            onClick={() => setIsDataDropdownOpen(!isDataDropdownOpen)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              isDataDropdownOpen
                ? "text-[var(--heading)]"
                : "text-[var(--muted)] hover:text-[var(--heading)]"
            }`}
          >
            Data Projects
          </button>

          {isDataDropdownOpen && (
            <div className="absolute top-full mt-1 left-0 bg-[var(--background)] border border-[var(--border)] rounded shadow-md z-50 min-w-[220px]">
              {dataProjectLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsDataDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--heading)] hover:bg-[var(--hover)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
