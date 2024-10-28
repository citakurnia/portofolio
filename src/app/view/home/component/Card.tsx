"use client";

import Image from "next/image";
import Link from "next/link";
import SocialMediaIcons from "@/app/components/socialMedia";

export default function Card() {
  const svgClassName = "text-white/80 hover:text-white/95";

  const openPDF = () => {
    const pdfUrl = "/cita-kurnia-cv.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="relative pt-6 rounded-lg shadow-xl bg-primary-med-blue/30">
      <div className="text-center">
        <Image
          src="/prof-photo.png"
          priority={true}
          alt="Cita Kurnia"
          width={400}
          height={400}
          className="w-36 h-36 rounded-full mx-auto z-10"
        />
        <h2 className="mt-4 text-2xl font-semibold">Cita Kurnia</h2>
        <p className="mt-2 text-lg text-gray-800">Full Stack Developer</p>
      </div>
      <div className="mt-6 md:mt-8 md:pb-2 flex justify-center space-x-4">
        <button className="bg-primary-med-blue/80 text-white hover:bg-primary-med-blue w-32 h-10 rounded-full text-base">
          <Link href="/project">PROJECTS</Link>
        </button>
        <button
          className="border border-primary-steel px-4 py-2  hover:bg-primary-soft-pink/70 w-32 h-10 rounded-full text-base"
          onClick={openPDF}
        >
          <div>RESUME</div>
        </button>
      </div>
      <div className="mt-5 flex justify-center space-x-5 py-2 h-10 bg-primary-deep-blue/60 rounded-b-lg">
        <SocialMediaIcons svgClassName={svgClassName} />
      </div>
    </div>
  );
}
