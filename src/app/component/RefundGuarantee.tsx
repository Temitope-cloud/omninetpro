"use client";

import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const RefundGuarantee = () => {
  return (
    <section className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-16 lg:px-24">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-emerald-600 shrink-0" />
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">
                Money-Back Guarantee
              </p>
              <p className="text-xs text-gray-600">
                Full refund if project is not delivered on or before due date
              </p>
            </div>
          </div>
          
          {/* Shopify Partnership Badge */}
          <div className="pt-2">
            <a
              href="https://www.shopify.com/partners"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              aria-label="Certified Shopify Partner"
            >
              <Image
                src="/Certified-Shopify-Partner.png"
                alt="Certified Shopify Partner"
                width={120}
                height={120}
                className="h-auto w-24 transition-opacity hover:opacity-80"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundGuarantee;


