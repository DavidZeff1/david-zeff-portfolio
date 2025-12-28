import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="en" suppressHydrationWarning>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3HZHYFBPJH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3HZHYFBPJH');
        `}
      </Script>

      <body
        className={`${inter.className} bg-[var(--bg)] text-[var(--fg)] min-h-screen transition-colors`}
      >
        <main className="max-w-6xl mx-auto px-4 py-12">
          <Header />
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  );
}
