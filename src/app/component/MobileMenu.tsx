"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface MobileMenuProps {
  open: any;
  onClose: any;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="animate-slideLeft relative ml-auto flex h-full w-[70%] max-w-xs flex-col gap-8 bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={onClose}>
            <X className="size-7" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-lg font-medium">
          <Link href="/" onClick={onClose}>
            Home
          </Link>
          <Link href="/about" onClick={onClose}>
            About
          </Link>
          <Link href="/services" onClick={onClose}>
            Services
          </Link>
          <Link href="/contact" onClick={onClose}>
            Contact
          </Link>
        </nav>

        <div className="mt-auto">
          <button className="w-full rounded-md border py-3 text-center font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
