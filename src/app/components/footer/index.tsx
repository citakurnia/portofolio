import React from "react";
import * as Icon from "@/assets/svg-collection";

export default function Footer() {
  const svgClassName =
    "text-primary-deep-blue/70 hover:text-primary-deep-blue/90";
  return (
    <div>
      <footer className="flex justify-between text-sm">
        <p>&copy; 2024 by Cita Kurnia</p>
        <div className="flex space-x-10">
          <div className="flex flex-row space-x-6">
            <a
              href="https://www.linkedin.com/in/cita-kurnia-hermaningsih-004675164/"
              target="_blank"
              className={svgClassName}
            >
              <Icon.SvgLinkedIn
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
              <Icon.SvgInstagram
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
              <Icon.SvgEmail
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
              <Icon.SvgGithub
                width={23}
                height={23}
                fill="none"
                className="hover: fill-current"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
