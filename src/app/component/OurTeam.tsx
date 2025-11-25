"use client";

import Link from "next/link";
import React from "react";

import TeamConnectGrid from "./TeamConnectGrid";
import { teamMembers } from "@/lib/teamDirectory";

const OurTeam = () => {
  const featuredMembers = teamMembers.slice(0, 3);

  return (
    <>
      <div id="our-team"></div>
      <div className="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            Meet a few of our experts
          </h2>
          <p className="mt-1 text-gray-600">
            A focused snapshot of the leads building premium e-commerce
            experiences.
          </p>
        </div>

        <TeamConnectGrid members={featuredMembers} />

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-gray-600">Want to see the full squad?</p>
          <Link
            href="/our-team"
            className="inline-flex items-center rounded-full border border-gray-900 px-5 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
          >
            Explore all team members
          </Link>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
