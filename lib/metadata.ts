import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type PageMetadata = {
  title: string;
  description: string;
  path: (typeof import("@/lib/site").indexableRoutes)[number];
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} field manual`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: ["/opengraph-image"],
    },
  };
}
