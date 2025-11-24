import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omninetpro.com";
const siteName = "Omninet Pro";
const defaultTitle = "Omninet Pro - E-commerce Solutions | Online Store Setup & Optimization";
const defaultDescription =
  "Omninet Pro specializes in comprehensive e-commerce solutions. We create, revamp, and optimize online stores with store setup, design, branding, SEO, marketing, and conversion optimization. Transform your e-commerce business with our expert team.";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  keywords?: string[];
}

export function generateMetadata({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
  type = "website",
  noindex = false,
  keywords = [],
}: SEOProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteName}`
    : defaultTitle;
  const fullDescription = description || defaultDescription;
  const url = `${siteUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  const defaultKeywords = [
    "e-commerce solutions",
    "online store setup",
    "shopify store setup",
    "e-commerce store design",
    "store revamping",
    "e-commerce optimization",
    "store branding",
    "product research",
    "niche research",
    "store policies",
    "e-commerce SEO",
    "store conversion optimization",
    "abandoned cart recovery",
    "tiktok shop setup",
    "instagram shop setup",
    "facebook ads management",
    "email marketing automation",
    "e-commerce store management",
    "Omninet Pro",
  ];

  const allKeywords = [...defaultKeywords, ...keywords].join(", ");

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords,
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description: fullDescription,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [imageUrl],
      creator: "@omninetpro",
      site: "@omninetpro",
    },
    alternates: {
      canonical: url,
    },
    metadataBase: new URL(siteUrl),
    verification: {
      // Add your verification codes here when available
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // bing: "your-bing-verification-code",
    },
  };
}

// Structured Data (JSON-LD) generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Omninet Pro specializes in comprehensive e-commerce solutions including online store setup, revamping, design, branding, SEO, marketing, and optimization services.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-683-333-5332",
      contactType: "Customer Service",
      email: "support@omninetpro.com",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
    sameAs: [
      // Add social media links when available
      // "https://twitter.com/omninetpro",
      // "https://linkedin.com/company/omninetpro",
      // "https://facebook.com/omninetpro",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description:
      "Omninet Pro - Expert e-commerce solutions for online store setup, revamping, optimization, and marketing. Transform your e-commerce business with our comprehensive services.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "E-commerce Solutions",
    provider: {
      "@type": "Organization",
      name: siteName,
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "E-commerce Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Store Setup & Research",
            description: "Niche research, brand research, product research, and product listing optimization for e-commerce stores",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Store Design & Branding",
            description: "Theme importation and customization, full store design, branded checkout customization, and favicon creation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Store Policies & Verification",
            description: "Store policies setup, licensing and store verification, trusted site and trust badge integration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Store Optimization",
            description: "Website speed optimization, UI/UX and conversion optimization, one-page checkout setup, and abandoned checkout recovery",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & Content",
            description: "Search engine optimization, meta description optimization, blog post creation, and sitemap setup for e-commerce stores",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marketing & Ads",
            description: "Email campaign setup and automation, TikTok Shop setup and management, TikTok ads management, Instagram Shop setup, and Facebook ads management",
          },
        },
      ],
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

