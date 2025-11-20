"use client";

import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingCart,
  Code,
  Rocket,
  BarChart3,
  Palette,
  Zap,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  ExternalLink,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Store Setup & Research",
    description:
      "Custom online stores built with cutting-edge technology for seamless shopping experiences.",
    features: [
      "Niche Research",
      "Brand Research",
      "Product Research",
      "Product Listing & Optimization",
    ],
    color: "text-blue-500",
  },
  {
    id: 2,
    icon: <Code className="h-6 w-6" />,
    title: "Store Design & Branding",
    description:
      "High-performance websites and web applications tailored to your business needs.",
    features: [
      "Theme Importation & Customization",
      "Full Store Design",
      "Branded Checkout Customization",
      "Favicon Creation & Upload",
    ],
    color: "text-purple-500",
  },
  {
    id: 3,
    icon: <Rocket className="h-6 w-6" />,
    title: "Store Policies & Verification",
    description:
      "Complete launch strategies to get your business online and growing fast.",
    features: [
      "Store Policies Setup",
      "Licensing & Store Verificatio",
      "Trusted Site & Trust Badge Integration",
    ],
    color: "text-orange-500",
  },
  {
    id: 4,
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Store Optimization",
    description:
      "Data-driven insights to optimize performance and maximize conversions.",
    features: [
      "Website Speed Optimization",
      "Overall Store Optimization (UI/UX & Conversion)",
      "One-Page Checkout Setup",
      "Abandoned Checkout Recovery",
    ],
    color: "text-green-500",
  },
  {
    id: 5,
    icon: <Palette className="h-6 w-6" />,
    title: "SEO & Content",
    description:
      "Beautiful, intuitive designs that engage users and drive conversions.",
    features: [
      "Search Engine Optimization (SEO)",
      "Meta Description Optimization",
      "Blog Post Creation",
      "Sitemap Setup",
    ],
    color: "text-pink-500",
  },
  {
    id: 6,
    icon: <Zap className="h-6 w-6" />,
    title: "Marketing & Ads",
    description:
      "Ongoing support to keep your platform running smoothly and securely.",
    features: [
      "Email Campaign Setup & Automation",
      "TikTok Shop Setup & Management",
      "TikTok Ads Management",
      "Instagram Shop Setup",
      "Facebook Ads Management",
    ],
    color: "text-yellow-500",
  },
];

const OurServices = () => {
  const router = useRouter();
  return (
    <>
      <div id="services"></div>
      <section className="bg-muted/30 px-3 py-20">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 flex flex-col items-start justify-between gap-6 border-b-2 pb-6 md:flex-row md:items-center">
            <div className="space-y-2">
              <SplitText
                text="Our Services"
                className="text-foreground text-4xl font-bold md:text-5xl lg:text-6xl"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="right"
              />
              <p className="text-muted-foreground max-w-2xl text-lg">
                Comprehensive e-commerce solutions to launch, grow, and scale
                your online business
              </p>
            </div>
            <Button
              variant="default"
              size="lg"
              className="flex shrink-0 cursor-pointer items-center gap-2"
              onClick={() => router.push("https://wa.me/16833335332")}
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group border-border/50 relative cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div
                    className={`bg-muted mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${service.color}`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-foreground group-hover:text-primary mb-2 text-xl font-bold transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4 space-y-2">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="text-muted-foreground flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="text-primary h-4 w-4 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    onClick={() => router.push("https://wa.me/16833335332")}
                    className="text-foreground/60 group-hover:text-foreground border-border/50 flex items-center gap-2 border-t pt-2 text-sm font-medium transition-colors duration-300"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
