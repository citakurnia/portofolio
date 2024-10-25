import { SvgEmail, SvgLinkedIn } from "@/assets/svg-collection";

export default function ContactView() {
  const svgClassName =
    "text-primary-deep-blue/50 hover:text-primary-deep-blue/80";
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center container mx-auto">
        <div className="relative z-10 w-[80vw]">
          <div className="relative w-full p-4 py-8 md:py-12 rounded-lg sm:rounded-full shadow-lg bg-primary-med-blue/20">
            <div className="font-semibold text-xl sm:text-2xl text-center">
              Contact Here
            </div>
            <p className="text-sm mt-2 text-black/80 text-center">
              Feel free to reach out for collaboration or inquiries!
            </p>
            <div>
              <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row justify-between px-4 sm:px-12 md:px-28 xl:px-72 pt-4">
                <div className="flex flex-col items-center">
                  <a
                    aria-label="Send email to Cita Kurnia with gmail"
                    href="https://mail.google.com/mail/?view=cm&to=citakurniah@gmail.com"
                    target="_blank"
                    className={svgClassName}
                  >
                    <SvgEmail
                      width={100}
                      height={100}
                      fill="none"
                      className="hover: fill-current"
                    />
                  </a>
                  <div className="text-black/60 text-sm">
                    citakurniah@gmail.com
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <a
                    aria-label="Direct to Cita Kurnia's LinkedIn"
                    href="https://www.linkedin.com/in/cita-kurnia-hermaningsih-004675164/"
                    target="_blank"
                    className={svgClassName}
                  >
                    <SvgLinkedIn
                      width={100}
                      height={100}
                      fill="none"
                      className="hover: fill-current"
                    />
                  </a>
                  <div className="text-black/60 text-sm">
                    Cita Kurnia Hermaningsih
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
