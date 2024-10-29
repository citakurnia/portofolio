import { SvgEmail, SvgLinkedIn } from "@/assets/svg-collection";
import { Button } from "@/components/ui/button";

export default function ContactView() {
  const svgClassName =
    "text-primary-deep-blue/70 hover:text-primary-deep-blue/80 flex flex-row gap-4";
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center container mx-auto">
        <div className="relative z-10 w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw]">
          <div className="relative w-full p-4 py-8 rounded-lg shadow-lg bg-primary-med-blue/20">
            <div className="font-semibold text-xl sm:text-2xl text-center">
              My Contact
            </div>
            <p className="text-sm mt-2 text-black/80 text-center">
              Feel free to reach out for collaboration or inquiries!
            </p>
            <div>
              <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row justify-between px-4 sm:px-12 pt-4">
                <div className="flex flex-col items-center gap-2">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center space-x-2 bg-white/60"
                    asChild
                  >
                    <a
                      aria-label="Send email to Cita Kurnia with gmail"
                      href="https://mail.google.com/mail/?view=cm&to=citakurniah@gmail.com"
                      target="_blank"
                      className={svgClassName}
                    >
                      <div className="font-medium">Email</div>
                      <SvgEmail
                        width={25}
                        height={25}
                        fill="none"
                        className="hover: fill-current"
                      />
                    </a>
                  </Button>
                  <div className="text-black/70 text-sm">
                    citakurniah@gmail.com
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center space-x-2 bg-white/60"
                    asChild
                  >
                    <a
                      aria-label="Direct to Cita Kurnia's LinkedIn"
                      href="https://www.linkedin.com/in/citakurnia/"
                      target="_blank"
                      className={svgClassName}
                    >
                      <div className="font-medium">LinkedIn</div>
                      <SvgLinkedIn
                        width={25}
                        height={25}
                        fill="none"
                        className="hover: fill-current"
                      />
                    </a>
                  </Button>
                  <div className="text-black/70 text-sm">
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
