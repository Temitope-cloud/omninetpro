"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  Target,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const AboutUsSection = () => {
  const router = useRouter();
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
    <section className="bg-muted/40 relative overflow-hidden px-6 py-24 md:px-16 lg:px-24">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="bg-primary/20 absolute top-10 -left-10 h-64 w-64 rounded-full blur-3xl" />
        <div className="bg-foreground/10 absolute right-0 bottom-0 h-72 w-72 rounded-full blur-[90px]" />
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        {/* Image / Visual Side */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-2xl">
            <img
              src="/liz.jpeg"
              alt="Team at work"
              className="h-[520px] w-full scale-105 object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute right-6 bottom-6 left-6 flex flex-col gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md">
              <div className="flex items-center gap-3">
                <Sparkles className="text-primary h-5 w-5" />
                <p className="text-sm font-semibold tracking-wide uppercase">
                  Gradual & Intentional
                </p>
              </div>
              <p className="text-lg leading-snug font-semibold">
                Success is the art of thoughtful decisions woven together.
              </p>
              <div className="flex gap-6 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" /> People-first culture
                </span>
                <span className="flex items-center gap-2">
                  <Target className="h-4 w-4" /> Purposeful growth
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-foreground/10 bg-background/80 rounded-2xl border p-4 text-center shadow-sm"
              >
                <p className="text-foreground text-2xl font-bold">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-1 text-xs tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Side */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-muted-foreground inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase">
              Welcome to Our Journey
            </span>
            <h2 className="text-foreground text-4xl leading-snug font-bold">
              Building e-commerce legacies through
              <span className="text-primary"> intentional craftsmanship</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
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
                className="text-foreground/90 flex items-start gap-3"
              >
                <CheckCircle2 className="text-primary mt-0.5 h-5 w-5" />
                <p className="text-base font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-auto cursor-pointer px-8 py-6 text-base font-semibold"
              onClick={() => router.push("https://wa.me/16833335332")}
            >
              Join Our Mission
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-auto cursor-pointer px-8 py-6 text-base font-semibold"
              onClick={() => router.push("/about-us")}
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
