import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, VT323 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const pixel = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "David Zeff — Data Analyst",
  description:
    "Data analyst and Computer Science graduate. End-to-end analytics projects in Python, SQL and Tableau — churn, margin bridging, campaign measurement.",
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
        className={`${inter.className} ${mono.variable} ${pixel.variable} bg-[var(--bg)] text-[var(--fg)] min-h-screen transition-colors`}
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
