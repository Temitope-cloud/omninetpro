import React from "react";
import type { Metadata } from "next";

import TeamConnectGrid from "../component/TeamConnectGrid";
import { teamMembers } from "@/lib/teamDirectory";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Our Team - Omninet Pro | E-commerce Experts",
  description:
    "Connect with every Omninet Pro expert in one place. Meet the strategists, designers, researchers, and marketers powering premium e-commerce experiences.",
  path: "/our-team",
  keywords: [
    "e-commerce team",
    "shopify experts",
    "online store specialists",
    "store setup experts",
    "omninet pro team",
    "e-commerce consultants",
  ],
});

const TeamPage = () => {
  return (
    <div className="mx-auto max-w-340 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          The Omninet Collective
        </p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-5xl">
          Every specialist. One mission.
        </h1>
        <p className="mt-4 text-base text-gray-600 md:text-lg">
          From store setup to conversion strategy, meet the people who craft,
          test, and scale our clients&apos; e-commerce experiences.
        </p>
      </div>

      <TeamConnectGrid members={teamMembers} />
    </div>
  );
};

export default TeamPage;

