"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import LenisScroll from "../LenisScroll";
import NavBarTwo from "./NavBarTwo";
import Footer from "./Footer";
import Navbar from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface ProvidersProps {
  children: React.ReactNode;
  organizationSchema?: object;
  websiteSchema?: object;
}

const Providers = ({
  children,
  organizationSchema,
  websiteSchema,
}: ProvidersProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <>
      <html lang="en">
        <head>
          {/* Structured Data - Organization */}
          {organizationSchema && (
            <script
              id="organization-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(organizationSchema),
              }}
            />
          )}
          {/* Structured Data - Website */}
          {websiteSchema && (
            <script
              id="website-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(websiteSchema),
              }}
            />
          )}
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} relative overflow-x-hidden antialiased`}
        >
          <LenisScroll />
          {isHomePage ? <NavBarTwo className="absolute" /> : <Navbar />}
          {children}
          <Footer />
          <script src="./node_modules/preline/dist/preline.js"></script>
        </body>
      </html>
    </>
  );
};

export default Providers;
