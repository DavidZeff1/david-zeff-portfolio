import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, VT323, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
// Echoes Charter on the resume, so the site and the PDF read as one identity.
const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
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
        className={`${inter.className} ${mono.variable} ${pixel.variable} ${serif.variable} bg-[var(--bg)] text-[var(--fg)] min-h-screen transition-colors`}
      >
        {/* No max-width here: the homepage wants a narrow reading measure,
            the LeetCode roadmap wants the full canvas. Each page owns its
            own container; this only supplies the gutter. */}
        <main className="px-6 py-12 md:py-20">
          <Header />
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  );
}
