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
} from "lucide-react";
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
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-Commerce Development",
    description:
      "Custom online stores built with cutting-edge technology for seamless shopping experiences.",
    features: [
      "Custom store design",
      "Payment integration",
      "Inventory management",
      "Mobile responsive",
    ],
    color: "text-blue-500",
  },
  {
    id: 2,
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    description:
      "High-performance websites and web applications tailored to your business needs.",
    features: [
      "Modern frameworks",
      "SEO optimized",
      "Fast loading",
      "Scalable architecture",
    ],
    color: "text-purple-500",
  },
  {
    id: 3,
    icon: <Rocket className="w-6 h-6" />,
    title: "Launch & Strategy",
    description:
      "Complete launch strategies to get your business online and growing fast.",
    features: [
      "Go-to-market plan",
      "Brand positioning",
      "Launch campaigns",
      "Growth strategies",
    ],
    color: "text-orange-500",
  },
  {
    id: 4,
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analytics & Optimization",
    description:
      "Data-driven insights to optimize performance and maximize conversions.",
    features: [
      "Performance tracking",
      "Conversion optimization",
      "A/B testing",
      "Custom reports",
    ],
    color: "text-green-500",
  },
  {
    id: 5,
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs that engage users and drive conversions.",
    features: ["User research", "Wireframing", "Prototyping", "Design systems"],
    color: "text-pink-500",
  },
  {
    id: 6,
    icon: <Zap className="w-6 h-6" />,
    title: "Maintenance & Support",
    description:
      "Ongoing support to keep your platform running smoothly and securely.",
    features: [
      "24/7 monitoring",
      "Security updates",
      "Performance tuning",
      "Technical support",
    ],
    color: "text-yellow-500",
  },
];

const OurServices = () => {
  return (
    <section className="py-20 px-3 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16 border-b-2 pb-6">
          <div className="space-y-2">
            <SplitText
              text="Our Services"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
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
            <p className="text-muted-foreground text-lg max-w-2xl">
              Comprehensive e-commerce solutions to launch, grow, and scale your
              online business
            </p>
          </div>
          <Button
            variant="default"
            size="lg"
            className="flex items-center gap-2 shrink-0"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 relative"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${service.color}`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-medium text-foreground/60 group-hover:text-foreground transition-colors duration-300 pt-2 border-t border-border/50">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
