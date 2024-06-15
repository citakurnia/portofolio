import React from "react";
import * as Icon from "@/assets/svg-collection";
import SocialMediaIcons from "../socialMedia";

export default function Footer() {
  const svgClassName =
    "text-primary-deep-blue/70 hover:text-primary-deep-blue/90";
  return (
    <div>
      <footer className="flex justify-between text-sm">
        <p>&copy; 2024 by Cita Kurnia</p>
        <div className="flex space-x-10">
          <div className="flex flex-row space-x-6">
            <SocialMediaIcons svgClassName={svgClassName} />
          </div>
        </div>
      </footer>
    </div>
  );
}
