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
import {
  generateMetadata as generateSEOMetadata,
  generateServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Omninet Pro - Modern Tech Agency | Web Development & Digital Solutions",
  description:
    "Transform your digital presence with Omninet Pro. We offer premium web development, brand design, e-commerce solutions, SEO, and digital marketing services. Expert team delivering modern, high-performance digital solutions.",
  path: "/",
  keywords: [
    "e-commerce development",
    "store setup",
    "brand design",
    "SEO services",
    "digital marketing",
    "web design agency",
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
      <OurTeam />
    </>
  );
};

export default Home;
