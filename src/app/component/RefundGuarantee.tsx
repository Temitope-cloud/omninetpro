"use client";

import { ShieldCheck } from "lucide-react";
import React from "react";

const RefundGuarantee = () => {
  return (
    <section className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-16 lg:px-24">
        <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-center md:gap-6">
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
        </div>
      </div>
    </section>
  );
};

export default RefundGuarantee;

