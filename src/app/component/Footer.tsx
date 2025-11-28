"use client";

import TextPressure from "@/components/TextPressure";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Instagram,
  Github,
  Facebook,
  MailCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const router = useRouter();

  const services = [
    { name: "Store Setup", href: "#" },
    { name: "Branding", href: "#" },
    { name: "Store Verification", href: "#" },
    { name: "Store Optimization", href: "#" },
    { name: "SEO & Content", href: "#" },
    { name: "Marketing", href: "#" },
  ];

  const company = [
    { name: "About Us", href: "/about-us" },
    { name: "Our Team", href: "/our-team" },
    { name: "Our Approach", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  const resources = [
    { name: "Whatsapp", href: "https://wa.me/16833335332" },
    // { name: "Instagram", href: "https://www.instagram.com/proomninet" },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@omninet_pro2?_r=1&_t=ZS-91mZJibc4bh",
    },
    { name: "Telegram", href: "https://t.me/taiwo129008" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/proomninet",
      label: "Instagram",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/proomninet",
      label: "Instagram",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/proomninet",
      label: "Instagram",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/proomninet",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-foreground text-muted-foreground">
      {/* CTA Section */}
      <div className="border-border/50 border-b">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-16 lg:px-24">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-background text-3xl font-bold md:text-4xl lg:text-5xl">
                Ready to work with us?
              </h2>
              <p className="text-muted-foreground text-lg">
                Partner with us for your business and achieve amazing results.
                Let's build something extraordinary together.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="border-border/50 text-background hover:bg-muted/10 flex cursor-pointer items-center gap-2"
                onClick={() => router.push("/contact-us")}
              >
                Contact Us
                <MailCheck className="h-4 w-4" />
              </Button>
              <Button
                variant="default"
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 flex cursor-pointer items-center gap-2"
                onClick={() => router.push("https://wa.me/16833335332")}
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-16 lg:px-24">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div
            className="cursor-pointer space-y-4 lg:col-span-2"
            onClick={() => router.push("/")}
          >
            <img src="/logo-white.png" alt="logo" width={300} height={350} />

            <p className="text-muted-foreground max-w-sm leading-relaxed">
              We know how important customer experience is for a business.
              Therefore, we strive to deliver exceptional e-commerce solutions
              that drive growth and success.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="text-muted-foreground h-4 w-4 shrink-0" />
                <a
                  href="mailto:hello@omninetpro.com"
                  className="hover:text-background transition-colors"
                >
                  support@omninetpro.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="text-muted-foreground h-4 w-4 shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-background transition-colors"
                >
                  +1 (683) 333-5332
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="text-muted-foreground mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Westferry Circus,
                  <br />
                  4HD, London.
                </span>
              </div>
            </div>

            {/* Shopify Partnership Badge */}
            <div className="pt-6">
              <a
                href="https://www.shopify.com/partners"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                aria-label="Certified Shopify Partner"
              >
                <Image
                  src="/Certified-Shopify-Partner.png"
                  alt="Certified Shopify Partner"
                  width={120}
                  height={120}
                  className="h-auto w-24 transition-opacity hover:opacity-80"
                />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-background mb-4 text-sm font-semibold tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-background text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-background mb-4 text-sm font-semibold tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-background text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-background mb-4 text-sm font-semibold tracking-wider uppercase">
              Socials
            </h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-muted-foreground hover:text-background text-sm transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-border/50 border-t pt-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-2">
              <h4 className="text-background text-lg font-semibold">
                Stay Updated
              </h4>
              <p className="text-muted-foreground text-sm">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-muted/20 border-border/50 text-background placeholder:text-muted-foreground focus:ring-background/20 focus:border-background/50 rounded-md border px-4 py-2 transition-all focus:ring-2 focus:outline-none"
              />
              <Button
                variant="default"
                className="bg-background text-foreground hover:bg-background/90 flex shrink-0 items-center gap-2"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-border/50 border-t">
        <div className="mx-auto max-w-7xl px-6 py-6 md:px-16 lg:px-24">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} OmninetPro. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="#"
                className="text-muted-foreground hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-background transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-background transition-colors"
              >
                Refund Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-background transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <TextPressure
        text="Omninet Pro!"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={36}
        className="pointer-none:"
      />
    </footer>
  );
};

export default Footer;
