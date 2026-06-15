import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  metadataBase: new URL("https://victorcitroen.com"),
  title: "Victor Citroën — Senior AI Technical Product Owner & CSM · Zürich",
  description:
    "Senior AI Technical Product Owner & CSM in Zürich. I take AI and enterprise-technology engagements from discovery to live, GDPR-compliant deployment — 30+ products delivered across Europe, LATAM and the US.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://victorcitroen.com/",
    title: "Victor Citroën — Senior AI Technical Product Owner & CSM",
    description:
      "From discovery to live, GDPR-compliant deployment. 30+ products delivered across three continents. Based in Zürich.",
    images: ["/assets/servicexpress.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Citroën — Senior AI Technical Product Owner & CSM",
    description:
      "From discovery to live, GDPR-compliant deployment. 30+ products across three continents. Zürich.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <SmoothScroll />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
