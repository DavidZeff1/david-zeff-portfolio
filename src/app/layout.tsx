import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Script from "next/script"; // <-- Import Script

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = Metadata = {
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
    <html lang="en" suppressHydrationWarning>
      {/* 1. Add the first part of the Google Tag to the <head> using the Script component.
           'beforeInteractive' strategy ensures it loads before user interaction.
      */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3HZHYFBPJH"
        strategy="afterInteractive"
      />

      {/* 2. Add the second, inline configuration script.
           'afterInteractive' is a good balance for analytics.
      */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3HZHYFBPJH');
        `}
      </Script>

      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />

          {/* Page content */}
          <main className="max-w-6xl mx-auto px-4 py-12">{children}</main>

          {/* Footer */}
          <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 mt-12">
            <div className="max-w-6xl mx-auto p-4 text-center text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} David Zeff.
            </div>
          </footer>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
