import React from "react";
import Script from "next/script";
import { Metadata } from "next";
import Herosection from "./component/HeroSection";
import ShortAboutSection from "./component/ShortAboutSection";
import BestProject from "./component/BestProject";
import OurServices from "./component/OurServices";
import HeroSectionTwo from "./component/HeroSectionTwo";
import AboutUsSection from "./component/AboutUsSection";
import OurTeam from "./component/OurTeam";
import FounderSpotlight from "./component/FounderSpotlight";
import RefundGuarantee from "./component/RefundGuarantee";
import {
  generateMetadata as generateSEOMetadata,
  generateServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Omninet Pro - E-commerce Solutions | Online Store Setup & Optimization",
  description:
    "Transform your e-commerce business with Omninet Pro. We create, revamp, and optimize online stores with complete setup, design, branding, SEO, marketing, and conversion optimization. Expert team delivering high-performing e-commerce solutions.",
  path: "/",
  keywords: [
    "online store setup",
    "e-commerce store creation",
    "store revamping",
    "shopify store setup",
    "store design and branding",
    "e-commerce optimization",
    "store conversion optimization",
    "product research",
    "niche research",
    "tiktok shop setup",
    "instagram shop setup",
    "facebook ads for e-commerce",
    "abandoned cart recovery",
    "e-commerce SEO",
  ],
});

const Home = () => {
  const serviceSchema = generateServiceSchema();

  return (
    <>
      {/* Structured Data - Services */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <HeroSectionTwo />
      {/* <Herosection /> */}
      <ShortAboutSection />
      <AboutUsSection />

      <BestProject />
      <OurServices />
      <FounderSpotlight />
      <OurTeam />
      <RefundGuarantee />
    </>
  );
};

export default Home;
