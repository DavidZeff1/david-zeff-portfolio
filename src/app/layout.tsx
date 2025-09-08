import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David's Portfolio",
  description: "Showcasing my projects and resume",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/80 backdrop-blur-md shadow-sm">
          <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
            {/* Logo / Name */}
            <h1 className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
              David Zeff
            </h1>

            {/* Nav Links */}
            <ul className="flex gap-6 text-sm font-medium">
              <li>
                <Link
                  href="#hero"
                  scroll={true}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  scroll={true}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  scroll={true}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  scroll={true}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Page content */}
        <main className="max-w-6xl mx-auto px-4 py-12">{children}</main>

        {/* Footer */}
        <footer className="border-t bg-white mt-12">
          <div className="max-w-6xl mx-auto p-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} David Zeff.
          </div>
        </footer>
      </body>
    </html>
  );
}
