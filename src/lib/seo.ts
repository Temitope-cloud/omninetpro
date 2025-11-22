import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omninetpro.com";
const siteName = "Omninet Pro";
const defaultTitle = "Omninet Pro - Modern Tech Agency | Web Development & Digital Solutions";
const defaultDescription =
  "Omninet Pro is a premium tech agency offering web development, brand design, technical consulting, product strategy, and creative technology services. Transform your digital presence with our expert team.";

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
    "web development",
    "digital agency",
    "tech consulting",
    "brand design",
    "product strategy",
    "e-commerce solutions",
    "web design",
    "digital transformation",
    "creative technology",
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
    description: defaultDescription,
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
    description: defaultDescription,
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
    serviceType: "Digital Agency Services",
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
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom web development and web applications",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brand Design",
            description: "Complete brand identity and design services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical Consulting",
            description: "Expert technical consulting and strategy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Solutions",
            description: "Complete e-commerce store setup and optimization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & Content",
            description: "Search engine optimization and content creation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marketing & Ads",
            description: "Digital marketing and advertising management",
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

