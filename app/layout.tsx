import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteNav } from "@/components/site-nav";
import { Analytics } from "@vercel/analytics/next";
import { jsonLd } from "@/lib/jsonld";

const TITLE = "Victor Citroën — AI Deployment Manager & GenAI Delivery Strategist · Zürich";
const DESC =
  "AI Deployment Manager, GenAI Delivery & Deployment Strategist and AI Product / Engagement Lead in Zürich. I take enterprise AI from first conversation to live, GDPR-compliant deployment — specialising in Palantir Foundry & AIP, with 30+ products delivered across three continents.";

export const metadata: Metadata = {
  metadataBase: new URL("https://victorcitroen.com"),
  title: TITLE,
  description: DESC,
  keywords: [
    "AI consultant Zürich", "AI specialist Zürich", "AI consultant Switzerland",
    "AI product lead", "AI delivery lead", "Palantir Foundry consultant", "Palantir AIP",
    "GenAI consultant", "LLM integration", "RAG", "GDPR-compliant AI deployment", "AI strategy",
    "workflow automation", "fractional AI lead", "enterprise AI", "AI for automotive",
    "AI in healthcare", "AI for fintech", "AI for logistics", "AI for public sector",
    "AI for HR", "AI for recruitment", "AI Deployment Manager", "GenAI Delivery Strategist",
    "AI Engagement Lead", "AI Product Lead",
  ],
  authors: [{ name: "Victor Citroën" }],
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  verification: { google: "BrtQuhh76iHBF8-ufBQjnzWDC_2ha82xl5aLGvWt040" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "Victor Citroën",
    url: "https://victorcitroen.com/",
    title: "Victor Citroën — AI Deployment Manager & GenAI Delivery Strategist",
    description:
      "From discovery to live, GDPR-compliant deployment. Specialising in Palantir Foundry & AIP. 30+ products across three continents. Based in Zürich.",
    images: [
      { url: "/assets/og.jpg", width: 1200, height: 630, alt: "Victor Citroën — Enterprise AI, delivered. AI consultancy in Zürich." },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Citroën — AI Deployment Manager & GenAI Delivery Strategist",
    description: "Discovery to deployment. Specialising in Palantir Foundry & AIP. AI consultant in Zürich.",
    images: ["/assets/og.jpg"],
  },
  other: {
    "geo.region": "CH-ZH",
    "geo.placename": "Zürich, Switzerland",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f5f7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <SiteNav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
