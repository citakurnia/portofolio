"use client";

import Link from "next/link";
import { SvgMenuButton } from "@/assets/svg-collection";
import { useState } from "react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="flex justify-between items-center px-2">
      <div className="flex items-center space-x-2">
        <span className="bg-primary-deep-blue h-4 w-4 inline-block rounded-full"></span>
        <span className="text-lg font-bold">Cita Kurnia</span>
        <span>/ Fullstack Developer</span>
      </div>
      <nav className="hidden md:flex md:pr-4 md:space-x-6 lg:space-x-10">
        <Link href="/." className="hover:text-primary-deep-blue">
          ABOUT ME
        </Link>
        <Link href="/pages/portofolio" className="hover:text-primary-deep-blue">
          PORTOFOLIO
        </Link>
        <Link href="/pages/contact" className="hover:text-primary-deep-blue">
          CONTACT
        </Link>
      </nav>
      <div
        className="md:hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="md:hidden">
          <button className="focus:outline-none">
            <SvgMenuButton />
          </button>
        </div>
        {isHovered && (
          <div className="flex flex-col md:hidden bg-primary-soft-pink/80 shadow-lg rounded-lg p-4 absolute top-12 right-4 w-40">
            <Link
              href="/."
              className="block mb-4 hover:text-primary-deep-blue text-center"
              onClick={() => setIsHovered(false)}
            >
              ABOUT ME
            </Link>
            <Link
              href="/pages/portofolio"
              className="block mb-4 hover:text-primary-deep-blue text-center"
              onClick={() => setIsHovered(false)}
            >
              PORTOFOLIO
            </Link>
            <Link
              href="/pages/contact"
              className="block hover:text-primary-deep-blue text-center"
              onClick={() => setIsHovered(false)}
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
