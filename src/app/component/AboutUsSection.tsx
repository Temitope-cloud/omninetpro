"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  Target,
} from "lucide-react";
import React from "react";

const AboutUsSection = () => {
  const highlights = [
    "Guided decision-making at every milestone",
    "Dedicated partnership from idea to launch",
    "People-first processes that elevate teams",
  ];

  const stats = [
    { label: "Stores Launched", value: "120+" },
    { label: "Collective Experience", value: "15yrs" },
    { label: "Client Satisfaction", value: "99%" },
  ];

  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-muted/40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 -left-10 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-foreground/10 blur-[90px] rounded-full" />
      </div>

      <div className="relative grid gap-12 lg:grid-cols-2 items-center">
        {/* Image / Visual Side */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[32px] shadow-2xl border border-white/10">
            <img
              src="/liz.jpeg"
              alt="Team at work"
              className="w-full h-[520px] object-cover scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-4 flex flex-col gap-3 text-white">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <p className="text-sm tracking-wide uppercase font-semibold">
                  Gradual & Intentional
                </p>
              </div>
              <p className="text-lg font-semibold leading-snug">
                Success is the art of thoughtful decisions woven together.
              </p>
              <div className="flex gap-6 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" /> People-first culture
                </span>
                <span className="flex items-center gap-2">
                  <Target className="w-4 h-4" /> Purposeful growth
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-foreground/10 bg-background/80 p-4 text-center shadow-sm"
              >
                <p className="text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Side */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Welcome to Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-snug">
              Building e-commerce legacies through
              <span className="text-primary"> intentional craftsmanship</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Omninetpro, we believe growth is earned through thoughtful
              decisions. We nurture relationships, invest deeply in our people,
              and create space for teams to fulfill their potential—one
              deliberate step at a time.
            </p>
            <p className="text-muted-foreground">
              Success isn’t rushed. It’s the reward of excellence, humility, and
              the courage to do the extraordinary together.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-foreground/90"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                <p className="text-base font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-base px-8 py-6 h-auto font-semibold"
            >
              Join Our Mission
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 h-auto font-semibold"
            >
              Explore Our Approach
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
