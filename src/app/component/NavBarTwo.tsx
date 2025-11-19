import React from "react";
import Link from "next/link";

const NavBarTwo = ({ className }: { className?: React.ReactNode }) => {
  const menus = ["Home", "About", "Our services", "Contact"];
  return (
    <nav
      className={`top-0 left-0 right-0 w-full z-50 flex items-center justify-between   text-muted px-6 md:px-16 lg:px-24 py-4 ${className}`}
    >
      <div className="text-xl font-bold text-white uppercase">OmninetPro</div>
      <div className="flex items-center gap-6">
        {menus.map((menu, idx) => (
          <Link
            key={idx}
            href="#"
            className="text-sm font-medium hover:text-muted-foreground text-white transition-colors"
          >
            {menu}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBarTwo;
