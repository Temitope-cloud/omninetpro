"use client";

import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowRight, Sparkles, Star, Layers } from "lucide-react";
import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  impact: string;
  tags: string[];
}

const featuredProject: Project = {
  id: 0,
  title: "ShopSphere Experience",
  description:
    "A multi-region Shopify Plus build powering product drops, loyalty, and AI-assisted styling for a global fashion powerhouse.",
  category: "Enterprise Commerce",
  image: "/project/1.png",
  impact: "+38% conversion uplift • 4 markets launched",
  tags: ["Headless Shopify", "AI Personalisation", "Experience Design"],
};

const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Fashion Store",
    description:
      "Premium e-commerce platform with curated drops, seamless checkout, and editorial storytelling.",
    category: "Brand Commerce",
    image: "/project/1.png",
    impact: "+22% repeat purchases",
    tags: ["Shopify Plus", "Interactive Lookbook"],
  },
  {
    id: 2,
    title: "Tech Gadgets Hub",
    description:
      "Modern marketplace featuring live inventory, product comparisons, and intelligent bundling.",
    category: "Marketplace Build",
    image: "/project/1.png",
    impact: "-34% support tickets",
    tags: ["Multi-vendor", "Automation"],
  },
];

const stats = [
  { label: "Commerce Launches", value: "60+" },
  { label: "Conversion Uplift", value: "32%" },
  { label: "Avg. Build Time", value: "8 weeks" },
];

const BestProject = () => {
  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 right-0 w-[420px] h-[420px] bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-foreground/5 blur-[110px]" />
      </div>

      <div className="relative space-y-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold text-xs tracking-[0.3em] uppercase">
              Curated Work
              <Sparkles className="w-4 h-4" />
            </div>
            <SplitText
              text="E-commerce experiences crafted for ambitious teams."
              className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
              delay={50}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
            <p className="text-lg text-muted-foreground">
              From high-volume drops to boutique launches, every build combines
              strategic UX, purposeful storytelling, and conversion
              intelligence.
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 px-8 py-6 h-auto"
          >
            View Full Portfolio
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        {/* Featured Project */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <Card className="lg:col-span-2 relative overflow-hidden border-none bg-linear-to-br from-[#0f101a] via-[#1b1530] to-[#020106] text-white">
            <div className="absolute inset-0">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="relative z-10 p-8 space-y-6">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/70">
                <Layers className="w-4 h-4" />
                {featuredProject.category}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                {featuredProject.title}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                {featuredProject.description}
              </p>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
                {featuredProject.impact}
              </p>
              <div className="flex flex-wrap gap-3">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 rounded-full border border-white/20 text-xs uppercase tracking-wider text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="gap-2 text-base px-6 py-5 h-auto">
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="gap-2 text-base text-white hover:bg-white/10"
                >
                  Schedule a Walkthrough
                  <Star className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Other projects */}
          <div className="space-y-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="border-foreground/10 bg-background/90 shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {project.category}
                    </span>
                    <span className="text-xs font-semibold text-primary">
                      {project.impact}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-muted text-xs font-semibold text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="px-0 text-primary hover:text-primary/80 hover:bg-transparent gap-2"
                  >
                    Explore Project
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-3xl border border-foreground/10 bg-white/70 dark:bg-foreground/5 backdrop-blur-md text-center shadow-sm"
            >
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestProject;
