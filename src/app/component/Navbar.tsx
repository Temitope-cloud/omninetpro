import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = ({ className }: { className?: React.ReactNode }) => {
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Services",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];
  return (
    <>
      <div
        className={`flex justify-between items-center  pt-3 border-b-2 border-foreground/55 pb-2 ${className}`}
      >
        <div className=" ">
          <h1 className="text-3xl font-bold uppercase text-foreground">
            OmninetPro
          </h1>
        </div>
        <div className="flex justify-between gap-30">
          {menus.map((menu, idx) => (
            <Link href={menu.link} key={idx}>
              {" "}
              {menu.name}{" "}
            </Link>
          ))}
        </div>
        <div className="  text-end">
          {" "}
          <Button variant="outline" className="">
            <Phone />
            Get in touch
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
