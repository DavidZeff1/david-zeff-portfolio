"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDataDropdownOpen, setIsDataDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const [isMobileDataOpen, setIsMobileDataOpen] = useState(false);
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

  // Close dropdowns when clicking outside
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProjectsOpen(false);
    setIsMobileDataOpen(false);
  };

  return (
    <>
      {/* Desktop Nav — hidden below md */}
      <nav className="hidden md:flex justify-center items-center gap-6 mb-12">
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

        {/* More Projects Dropdown */}
        <div ref={dropdownRef} className="relative">
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
            <div className="absolute top-full mt-2 left-0 min-w-[220px] bg-[var(--background)] border border-[var(--muted)]/20 rounded-lg shadow-lg py-2 z-[9999]">
              {projectLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--heading)] hover:bg-[var(--muted)]/10 transition-colors"
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
            className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
              isDataDropdownOpen
                ? "text-[var(--heading)]"
                : "text-[var(--muted)] hover:text-[var(--heading)]"
            }`}
          >
            Data Projects
            <svg
              className={`w-4 h-4 transition-transform ${
                isDataDropdownOpen ? "rotate-180" : ""
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

          {isDataDropdownOpen && (
            <div className="absolute top-full mt-2 left-0 min-w-[240px] bg-[var(--background)] border border-[var(--muted)]/20 rounded-lg shadow-lg py-2 z-[9999]">
              {dataProjectLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsDataDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--heading)] hover:bg-[var(--muted)]/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Nav — visible below md */}
      <div className="md:hidden mb-8">
        {/* Hamburger button */}
        <div className="flex justify-end px-4">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-[var(--muted)] hover:text-[var(--heading)] transition-colors"
            aria-label="Open menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-[9998] transition-opacity"
            onClick={closeMobileMenu}
          />
        )}

        {/* Slide-in drawer */}
        <div
          style={{ backgroundColor: "var(--bg)" }}
          className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] border-l border-[var(--muted)]/20 z-[99999] transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeMobileMenu}
              className="p-2 text-[var(--muted)] hover:text-[var(--heading)] transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu items */}
          <div className="flex flex-col px-4 gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? "bg-[var(--accent)]/10 text-[var(--accent)]"
                    : "text-[var(--muted)] hover:text-[var(--heading)] hover:bg-[var(--muted)]/10"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Divider */}
            <div className="h-px bg-[var(--muted)]/20 my-2" />

            {/* More Projects expandable */}
            <button
              onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
              className="flex items-center justify-between px-4 py-3 text-base font-medium text-[var(--muted)] hover:text-[var(--heading)] rounded-lg transition-colors"
            >
              More Projects
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMobileProjectsOpen ? "rotate-180" : ""
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
            {isMobileProjectsOpen && (
              <div className="flex flex-col pl-4 gap-1">
                {projectLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--heading)] rounded-lg hover:bg-[var(--muted)]/10 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {/* Data Projects expandable */}
            <button
              onClick={() => setIsMobileDataOpen(!isMobileDataOpen)}
              className="flex items-center justify-between px-4 py-3 text-base font-medium text-[var(--muted)] hover:text-[var(--heading)] rounded-lg transition-colors"
            >
              Data Projects
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMobileDataOpen ? "rotate-180" : ""
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
            {isMobileDataOpen && (
              <div className="flex flex-col pl-4 gap-1">
                {dataProjectLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--heading)] rounded-lg hover:bg-[var(--muted)]/10 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
