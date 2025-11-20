"use client";
import { Button } from "@/components/ui/button";
import { MenuSquare, Phone } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/navigation";
import PillNav from "@/components/PillNav";

const Navbar = ({ className }: { className?: React.ReactNode }) => {
  const [isTab, setIsTab] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const checkSize = () => {
      setIsTab(window.innerWidth >= 768 && window.innerWidth <= 1024);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Services", ariaLabel: "View our services", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about-us",
    },
    {
      name: "Services",
      link: "/#services",
    },
    {
      name: "Contact",
      link: "/contact-us",
    },
  ];
  const logo = "hello";
  return (
    <>
      <div
        className={`border-foreground/55 flex items-center justify-between border-b-2 pt-3 pb-2 ${className}`}
      >
        <div className="pl-5">
          <h1 className="text-foreground text-3xl font-bold uppercase">
            OmninetPro
          </h1>
        </div>
        <div className={`hidden justify-between gap-20 md:flex`}>
          {menus.map((menu, idx) => (
            <Link href={menu.link} key={idx}>
              {" "}
              {menu.name}{" "}
            </Link>
          ))}
        </div>

        <div className="flex gap-3 pr-5 text-end">
          <Button className="md:hidden" onClick={() => setOpenMenu(true)}>
            <MenuSquare />
          </Button>
          <MobileMenu open={openMenu} onClose={() => setOpenMenu(false)} />
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => router.push("/contact-us")}
          >
            <Phone />
            Get in touch
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
