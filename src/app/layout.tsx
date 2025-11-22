import type { Metadata } from "next";
import "./globals.css";

import Providers from "./component/Providers";
import {
  generateMetadata as generateSEOMetadata,
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/seo";

// Default SEO metadata for the site
export const metadata: Metadata = generateSEOMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <Providers
      organizationSchema={organizationSchema}
      websiteSchema={websiteSchema}
    >
      {children}
    </Providers>
  );
}
