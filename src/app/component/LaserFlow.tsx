"use client";

import LaserFlow from "@/components/LaserFlow";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useRef } from "react";
import React from "react";

// NOTE: You can also adjust the variables in the shader for super detailed customization

// Basic Usage Example Component
export function LaserFlowBasic() {
  return (
    <div style={{ height: "500px", position: "relative", overflow: "hidden" }}>
      <LaserFlow />
    </div>
  );
}

// Image Example Interactive Reveal Effect
export function LaserFlowBoxExample() {
  const revealImgRef = useRef<HTMLImageElement>(null);

  return (
    <div
      style={{
        height: "800px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#060010",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", `${x}px`);
          el.style.setProperty("--my", `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", "-9999px");
          el.style.setProperty("--my", "-9999px");
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        color="#AE9EFF"
      />

      <div className="absolute top-20 left-10 w-150">
        <h2 className="text-5xl md:text-6xl  text-white font-bold">
          {" "}
          E-commerce. Stores. Growth. Simplified.
        </h2>
        <p className="text-white mt-2 w-[70%]">
          Starting an online store doesn’t have to be confusing. We simplify the
          process and walk with you from idea to launch.
        </p>
        <Button
          variant="outline"
          className="cursor-pointer bg-[#5a5086] text-white w-30 mt-5 "
        >
          Our Services
          <MoveRight />
        </Button>
      </div>

      <div
        className="bg-[url(/shopify-dash.png)] bg-cover "
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "86%",
          height: "60%",
          backgroundColor: "red",
          borderRadius: "20px",
          border: "2px solid #FF79C6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "2rem",
          zIndex: 6,
        }}
      >
        {/* <img src="" className="z-0 absolute" alt="" /> */}
      </div>

      <img
        ref={revealImgRef}
        src="/shopify-dash.png"
        alt="Reveal effect"
        style={
          {
            position: "absolute",
            width: "100%",
            top: "-50%",
            zIndex: 5,
            mixBlendMode: "lighten",
            opacity: 0.3,
            pointerEvents: "none",
            "--mx": "-9999px",
            "--my": "-9999px",
            WebkitMaskImage:
              "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
            maskImage:
              "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          } as React.CSSProperties
        }
      />
    </div>
  );
}
