import React from "react";
import Link from "next/link";

const NavBarTwo = ({ className }: { className?: React.ReactNode }) => {
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About ",
      link: "/about-us",
    },
    {
      name: "Our Services",
      link: "/#services",
    },
    {
      name: "Contact",
      link: "/contact-us",
    },
  ];
  return (
    <nav
      className={`text-muted top-0 right-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4 md:px-16 lg:px-24 ${className}`}
    >
      <div className="text-xl font-bold text-white uppercase">OmninetPro</div>
      <div className="flex items-center gap-6">
        {menus.map((menu, idx) => (
          <Link
            key={idx}
            href={menu.link}
            className="hover:text-muted-foreground text-sm font-medium text-white transition-colors"
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBarTwo;
