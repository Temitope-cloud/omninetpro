"use client";

import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowRight, Sparkles, Star, Layers } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  impact: string;
  link?: string;
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
    title: "Furniture Store",
    description:
      "Premium e-commerce furniture platform with curated drops, seamless checkout, and editorial storytelling.",
    category: "Brand Commerce",
    image: "/liz.jpeg",
    impact: "+22% repeat purchases",
    tags: ["Shopify Plus", "Interactive Lookbook"],
    link: "https://nestnook.net/",
  },
  {
    id: 2,
    title: "Gym Hub",
    description:
      "Modern gym shop featuring live inventory, product comparisons, and intelligent bundling.",
    category: "Marketplace Build",
    image: "/project/1.png",
    impact: "-34% support tickets",
    tags: ["Multi-vendor", "Automation"],
    link: "https://www.gymbuddy.co.in/",
  },
];

const stats = [
  { label: "Commerce Launches", value: "60+" },
  { label: "Conversion Uplift", value: "32%" },
  { label: "Avg. Build Time", value: "8 weeks" },
];

const BestProject = () => {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-16 lg:px-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-primary/10 absolute -top-10 right-0 h-[420px] w-[420px] blur-[140px]" />
        <div className="bg-foreground/5 absolute bottom-0 left-0 h-[380px] w-[380px] blur-[110px]" />
      </div>

      <div className="relative space-y-16">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl space-y-4">
            <div className="border-primary/30 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.3em] uppercase">
              Curated Work
              <Sparkles className="h-4 w-4" />
            </div>
            <SplitText
              text="E-commerce experiences crafted for ambitious teams."
              className="text-foreground text-4xl leading-tight font-bold md:text-5xl"
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
            <p className="text-muted-foreground text-lg">
              From high-volume drops to boutique launches, every build combines
              strategic UX, purposeful storytelling, and conversion
              intelligence.
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="flex h-auto cursor-pointer items-center gap-2 px-8 py-6"
            onClick={() => window.open("/about-us", "_blank")}
          >
            Our Approach
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>

        {/* Featured Project */}
        <div className="grid items-center gap-8 lg:grid-cols-3">
          <Card className="relative overflow-hidden border-none bg-linear-to-br from-[#0f101a] via-[#1b1530] to-[#020106] text-white lg:col-span-2">
            <div className="absolute inset-0">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="h-full w-full object-cover opacity-30"
              />
            </div>
            <div className="relative z-10 space-y-6 p-8">
              <div className="flex items-center gap-2 text-sm font-semibold tracking-widest text-white/70 uppercase">
                <Layers className="h-4 w-4" />
                {featuredProject.category}``
              </div>
              <h3 className="text-3xl leading-tight font-bold md:text-4xl">
                {featuredProject.title}
              </h3>
              <p className="text-lg leading-relaxed text-white/80">
                {featuredProject.description}
              </p>
              <p className="text-primary/80 text-sm font-semibold tracking-[0.3em] uppercase">
                {featuredProject.impact}
              </p>
              <div className="flex flex-wrap gap-3">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 px-4 py-1 text-xs tracking-wider text-white/80 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button
                  className="h-auto gap-2 px-6 py-5 text-base"
                  onClick={() => router.push("https://haveninabreeze.com/")}
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="cursor-pointer gap-2 rounded border text-base text-white hover:bg-white/10"
                  onClick={() => router.push("https://wa.me/16833335332")}
                >
                  Schedule a Walkthrough
                  <Star className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Other projects */}
          <div className="space-y-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="border-foreground/10 bg-background/90 shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
                      {project.category}
                    </span>
                    <span className="text-primary text-xs font-semibold">
                      {project.impact}
                    </span>
                  </div>
                  <h3 className="text-foreground text-xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary/80 cursor-pointer gap-2 px-0 hover:bg-transparent"
                    onClick={() => router.push(project.link ?? "")}
                  >
                    Explore Project
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-foreground/10 dark:bg-foreground/5 rounded-3xl border bg-white/70 p-6 text-center shadow-sm backdrop-blur-md"
            >
              <p className="text-foreground text-3xl font-bold">{stat.value}</p>
              <p className="text-muted-foreground mt-2 text-xs tracking-[0.4em] uppercase">
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
