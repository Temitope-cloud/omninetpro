import { Button } from "@/components/ui/button";
import { ShimmeringText } from "@/components/ui/shimmering-text";
import { WordRotate } from "@/components/ui/word-rotate";
import { Code } from "lucide-react";
import React from "react";
import Navbar from "./Navbar";
import { SlidingNumber } from "@/components/ui/sliding-number";
import MarqueeDefault from "./Marquee";

const Herosection = () => {
  return (
    <>
      <div className="relative h-screen w-screen ">
        <Navbar className="absolute w-full z-10 bg-muted backdrop-blur-sm" />
        <div className="md:flex items-center h-full bg-muted relative">
          <div className="flex-1 h-full">
            <div className="p-20 pt-30 border-r-2 ">
              <ShimmeringText
                text="E-Commerce Made Simple"
                className="text-sm font-bold border px-2 rounded-2xl"
                duration={1.5}
                repeatDelay={1}
              />

              <h1 className="text-5xl font-bold text-foreground/90">
                Helping You
                <WordRotate
                  words={["Lunch", "Grow", "Succeed"]}
                  animationStyle="flip"
                  className="px-2 font-bold bg-linear-to-r from-blue-600 via-[#181349] to-[#181349] bg-clip-text text-transparent"
                  duration={1500}
                  pauseDuration={250}
                  loop
                />
                in E-Commerce.{" "}
              </h1>
              <p className="mt-3">
                Whether you’re new to e-commerce or trying to scale, we provide
                everything you need to build a successful online presence.
              </p>
              <p className="text-sm font-bold flex items-center gap-1 text-foreground/40 font-mono">
                Over
                <SlidingNumber
                  from={0}
                  to={100}
                  duration={2}
                  digitHeight={40}
                />
                clients
              </p>
              <div className="mt-10 flex  items-center gap-5">
                <Button variant="outline" size="lg">
                  {" "}
                  Our Services{" "}
                </Button>
                <Button variant="default" size="lg">
                  {" "}
                  Get in Touch{" "}
                </Button>
              </div>
              {/*  */}
            </div>
            <div className="border-2 w-full grid grid-cols-3">
              <div className="border-r flex flex-col items-center justify-center py-6">
                <Code />
                <p className="uppercase font-semibold text-center mt-2">Dev</p>
              </div>
              <div className="border-r flex flex-col items-center justify-center py-6">
                <Code />
                <p className="uppercase font-semibold text-center mt-2">
                  Strategy
                </p>
              </div>
              <div className="flex flex-col items-center justify-center py-6">
                <Code />
                <p className="uppercase font-semibold text-center mt-2">
                  Launch
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 h-full hidden md:block">
            <img src="/image.jpg" className="h-full object-cover" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
