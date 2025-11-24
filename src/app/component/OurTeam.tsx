"use client";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const OurTeam = () => {
  const router = useRouter();
  const teams = [
    {
      image: "/teams/1.jpg",
      title: "Digital Dynamo",
      subtitle: " Versatile Marketing Strategist",
      about:
        "Focused on building strong marketing strategy for e-commerce growth.",
    },
    {
      image: "/teams/2.jpg",
      title: "Heritage",
      subtitle: "Brand Developer",
      about: "Focused on building strong brands for e-commerce growth.",
    },
    {
      image: "/teams/3.jpg",
      title: "Mayowa",
      subtitle: "Marketing Specialist",
      about: "Drives smart marketing that helps stores grow.",
    },
    {
      image: "/teams/4.jpg",
      title: "MasterwithElla",
      subtitle: "Sales Funnel Expert",
      about: "Crafts funnels that turn visitors into buyers.",
    },
    {
      image: "/teams/5.jpg",
      title: "John Leni",
      subtitle: "Market Analyst",
      about: "Analyzes markets to uncover winning opportunities.",
    },
    {
      image: "/teams/6.jpg",
      title: "Kennex",
      subtitle: "Content and copywriting Expert",
      about:
        "Creates engaging content and copy that converts visitors into buyers.",
    },

    {
      image: "/teams/7.jpg",
      title: "Mothic",
      subtitle: "Product Research",
      about: "Researches products that help brands scale.",
    },
    {
      image: "/teams/8.jpg",
      title: "Daniel",
      subtitle: "Brand Strategist",
      about: "Builds strategies that shape stronger e-commerce brands.",
    },
    {
      image: "/teams/9.jpg",
      title: "Dawn",
      subtitle: "A.I Marketing Strategist",
      about:
        "Leverages artificial intelligence to craft data-driven marketing campaigns that boost brand performance.",
    },
    {
      image: "/teams/10.jpg",
      title: "Adesewa",
      subtitle: "Shopify Specialist",
      about:
        "Develops end-to-end Shopify solutions, creating seamless, high-performing e-commerce experiences.",
    },
    {
      image: "/teams/11.jpg",
      title: "Anny Mandy",
      subtitle: "Product Analyst, ",
      about:
        "Analyzes market trends and customer behavior to inform branding strategies that drive growth.",
    },
    {
      image: "/teams/12.jpg",
      title: "Dassy",
      subtitle: "E-commerce Design Expert, ",
      about:
        "Designs visually engaging and conversion-focused websites tailored for online stores.",
    },
    {
      image: "/teams/13.jpg",
      title: "Miracle",
      subtitle: "Shopify Store Sales and Marketing Expert",
      about:
        "Optimizes Shopify stores with targeted marketing strategies to increase sales and customer retention.",
    },
  ];
  return (
    <>
      <div id="our-team"></div>
      <div className="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            Our Team
          </h2>
          <p className="mt-1 text-gray-600">Creative people</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((team, idx) => (
            <div className="">
              <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 md:p-6">
                <div className="flex items-center gap-x-4">
                  <img
                    className="size-20 rounded-full object-cover object-top"
                    src={team.image}
                    alt={team.title}
                  />
                  <div className="grow">
                    <h3 className="font-medium text-gray-800">{team.title}</h3>
                    <p className="text-xs text-gray-500 uppercase">
                      {team.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-gray-500">{team.about}</p>
              </div>
              {/* End Col */}

              {/* End Col */}
            </div>
          ))}
          <div className="group col-span-full flex flex-col justify-center rounded-xl border border-dashed border-gray-200 p-4 text-center hover:shadow-2xs focus:shadow-2xs focus:outline-hidden md:p-6 lg:col-span-1">
            <h3 className="text-lg text-gray-800">
              We have experts to handle your project
            </h3>
            <div onClick={() => router.push("https://wa.me/16833335332")}>
              <span className="inline-flex items-center gap-x-2 text-blue-600 group-hover:text-blue-700 group-focus:text-blue-700">
                Hire Us
                <ExternalLink size={15} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
