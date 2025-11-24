import React from "react";
import Script from "next/script";
import { Metadata } from "next";
import {
  generateMetadata as generateSEOMetadata,
  generateBreadcrumbSchema,
} from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact Us - Omninet Pro | Get Your E-commerce Store Started",
  description:
    "Contact Omninet Pro for expert e-commerce solutions. Get help with online store setup, revamping, optimization, and marketing. Reach out to our team in London, UK. Email us at support@omninetpro.com or call +1 (683) 333-5332. Let's transform your e-commerce business together.",
  path: "/contact-us",
  keywords: [
    "contact omninet pro",
    "e-commerce consultation",
    "store setup consultation",
    "get quote for online store",
    "e-commerce agency london",
    "shopify store help",
    "store revamping consultation",
  ],
});

const ContactUs = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://omninetpro.com" },
    { name: "Contact Us", url: "https://omninetpro.com/contact-us" },
  ]);

  return (
    <>
      {/* Structured Data - Breadcrumbs */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* Structured Data - LocalBusiness */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Omninet Pro",
            image: "https://omninetpro.com/logo.png",
            "@id": "https://omninetpro.com",
            url: "https://omninetpro.com",
            telephone: "+1-683-333-5332",
            email: "support@omninetpro.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Westferry Circus, 4HD",
              addressLocality: "London",
              addressCountry: "GB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 51.5074,
              longitude: -0.1278,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
          }),
        }}
      />
      {/* Contact */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-10">
          <h2 className="text-2xl font-medium text-black sm:text-4xl">
            Contacts
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden rounded-2xl bg-gray-100">
            <img
              className="rounded-2xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
              src="https://img.freepik.com/premium-photo/young-businesswoman-answering-phone-calls-desk_236854-53497.jpg?w=1060"
              alt="Contacts Image"
            />
          </div>
          {/* End Col */}

          <div className="space-y-8 lg:space-y-16">
            <div>
              <h3 className="mb-5 font-semibold text-black">Our address</h3>

              {/* Grid */}
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex gap-4">
                  <svg
                    className="size-5 shrink-0 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>

                  <div className="grow">
                    <p className="text-sm text-gray-600">United Kingdom</p>
                    <address className="mt-1 text-black not-italic">
                      Westferry Circus,4HD,
                      <br />
                      London
                    </address>
                  </div>
                </div>
              </div>
              {/* End Grid */}
            </div>

            <div>
              <h3 className="mb-5 font-semibold text-black">Our contacts</h3>

              {/* Grid */}
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex gap-4">
                  <svg
                    className="size-5 shrink-0 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
                  </svg>

                  <div className="grow">
                    <p className="text-sm text-gray-600">Email us</p>
                    <p>
                      <a
                        className="relative inline-block font-medium text-black before:absolute before:start-0 before:bottom-0.5 before:-z-1 before:h-1 before:w-full before:bg-[#21178f] hover:before:bg-black focus:outline-hidden focus:before:bg-black"
                        href="mailto:example@site.so"
                      >
                        support@omninetpro.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="grow">
                    <p className="text-sm text-gray-600">Whatsapp</p>
                    <p>
                      <a
                        className="relative inline-block font-medium text-black before:absolute before:start-0 before:bottom-0.5 before:-z-1 before:h-1 before:w-full before:bg-[#21178f] hover:before:bg-black focus:outline-hidden focus:before:bg-black"
                        href="mailto:example@site.so"
                      >
                        +1 (683) 333-5332
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Grid */}
            </div>
          </div>
          {/* End Col */}
        </div>
      </div>
      {/* End Contact */}
    </>
  );
};

export default ContactUs;
