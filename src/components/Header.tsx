"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <h1 className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
          David Zeff
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li>
            <Link
              href="#hero"
              scroll={true}
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              scroll={true}
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              scroll={true}
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              scroll={true}
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-md ">
          <ul className="flex flex-col gap-4 p-6 text-sm font-medium ">
            <li>
              <Link
                href="#hero"
                scroll={true}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                scroll={true}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                scroll={true}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                scroll={true}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
