import Image from "next/image";
import Link from "next/link";
import {
  SvgLinkedIn,
  SvgGithub,
  SvgInstagram,
  SvgEmail,
} from "@/assets/svg-collection";

export default function Card() {
  const svgClassName = "text-white/80 hover:text-white/95";

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
        <p className="mt-2 text-gray-800">FULL-STACK DEVELOPER</p>
      </div>
      <div className="mt-6 md:mt-8 md:pb-2 flex justify-center space-x-4">
        <Link href="/pages/portofolio">
          <button className="bg-primary-med-blue/80 text-white hover:bg-primary-med-blue px-4 py-2 rounded-full">
            PORTOFOLIO
          </button>
        </Link>
        <Link href="/pages/contact">
          <button className="border border-primary-steel px-4 py-2 rounded-full hover:bg-primary-soft-pink/70">
            CONTACT
          </button>
        </Link>
      </div>
      <div className="mt-5 flex justify-center space-x-5 py-2 bg-primary-deep-blue/60 rounded-b-lg">
        <a
          href="https://www.linkedin.com/in/cita-kurnia-hermaningsih-004675164/"
          target="_blank"
          className={svgClassName}
        >
          <SvgLinkedIn
            width={23}
            height={23}
            fill="none"
            className="hover: fill-current"
          />
        </a>
        <a
          href="https://www.instagram.com/cita_kh/"
          target="_blank"
          className={svgClassName}
        >
          <SvgInstagram
            width={23}
            height={23}
            fill="none"
            className="hover: fill-current"
          />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=citakurniah@gmail.com"
          target="_blank"
          className={svgClassName}
        >
          <SvgEmail
            width={23}
            height={23}
            fill="none"
            className="hover: fill-current"
          />
        </a>
        <a
          href="https://github.com/citakurnia"
          target="_blank"
          className={svgClassName}
        >
          <SvgGithub
            width={23}
            height={23}
            fill="none"
            className="hover: fill-current"
          />
        </a>
      </div>
    </div>
  );
}
