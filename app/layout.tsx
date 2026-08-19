import { AdsterraPopunderGate, AdsterraSocialBarGate, AdsterraStickyRail, AdsterraGlobalFallback } from "@/components/ads";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Field Manual`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "A focused beginner guide to Tank Game on Roblox: first steps, controls, stats, codes, and practical tank strategy.",
  applicationName: SITE_NAME,
  category: "games",
  alternates: { canonical: "/" },
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
    title: `${SITE_NAME} — Field Manual`,
    description:
      "A focused beginner guide to Tank Game on Roblox: first steps, controls, stats, codes, and practical tank strategy.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Field Manual`,
    description:
      "A focused beginner guide to Tank Game on Roblox: first steps, controls, stats, codes, and practical tank strategy.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2ead8",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "An independent beginner guide and field manual for Tank Game on Roblox.",
    inLanguage: "en",
    isAccessibleForFree: true,
  };

  return (
    <html lang="en">
      <body>
        <AdsterraPopunderGate />
        <AdsterraSocialBarGate />
        <AdsterraStickyRail />
        <AdsterraGlobalFallback />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
