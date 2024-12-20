"use client";

import Link from "next/link";
import { SvgMenuButton } from "@/assets/svg-collection";
import { useState } from "react";
import { usePathname } from "next/navigation";

const menuList = [
  {
    label: "About Me",
    href: "/",
  },
  {
    label: "Projects",
    href: "/project",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="flex justify-between items-center px-2">
      <div className="flex items-center space-x-2">
        <span className="bg-primary-deep-blue h-4 w-4 inline-block rounded-full"></span>
        <a href="/">
          <span className="text-normal sm:text-lg font-bold">Cita Kurnia</span>
        </a>
        <span>/ Full Stack Developer</span>
      </div>
      <nav className="hidden md:flex md:pr-4 space-x-1">
        {menuList.map((menu) => (
          <Link
            key={menu.label}
            href={menu.href}
            className={`hover:text-primary-deep-blue w-20 text-end ${
              pathname === menu.href && " text-primary-deep-blue"
            }`}
          >
            {menu.label}
          </Link>
        ))}
      </nav>
      <div
        className="md:hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="focus:outline-none py-2" aria-label="open menu">
          <SvgMenuButton />
        </button>
        {isHovered && (
          <div className="flex flex-col md:hidden bg-primary-soft-pink/80 shadow-lg rounded-lg p-4 absolute top-12 right-4 w-40 align-middle justify-center space-y-4">
            {menuList.map((menu) => (
              <Link
                key={menu.label}
                href={menu.href}
                className={`block hover:text-primary-deep-blue text-center ${
                  pathname === menu.href && " text-primary-deep-blue"
                }`}
                onClick={() => setIsHovered(false)}
              >
                {menu.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
