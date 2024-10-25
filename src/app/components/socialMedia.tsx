import {
  SvgLinkedIn,
  SvgGithub,
  SvgInstagram,
  SvgEmail,
} from "@/assets/svg-collection";

export default function SocialMediaIcons({
  svgClassName,
}: {
  svgClassName: string;
}) {
  return (
    <>
      <a
        aria-label="Direct to Cita Kurnia's GitHub"
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
      <a
        aria-label="Send email to Cita Kurnia with gmail"
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
        aria-label="Direct to Cita Kurnia's LinkedIn"
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
        aria-label="Direct to Cita Kurnia's Instagram"
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
    </>
  );
}
