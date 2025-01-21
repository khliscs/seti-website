import { Children } from "react";
import AnimatedBackground from "./motion/motionbackround";
import CustomPatternSVG from "./motion/motiondraw";

export default function Container(props: { [x: string]: any; children: any; }) {
  const { children } = props;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden bg-red-950">
        <CustomPatternSVG />
      </div>
      {/* Hintergrundanimation */}

      {/* Fixierter Header */}
      <div className="fixed top-0 w-full h-[80px] flex items-center justify-center w-full z-50">
        <img
          src="/Logo.svg" // Pfad zu SVG, ohne './public'
          alt="Logo"
          className="h-[50px] w-auto"
        />
      </div>

      {/* Hauptinhalt */}
      <div className="relative z-10 flex flex-col pt-[64px] h-full overflow-y-auto">

        {/* Main Content */}
        <main id="skip" className="flex-1 w-full p-4">

          <div className="sticky right-0 top-0 w-full w-12 sm:w-20 flex flex-col items-start space-y-16 ml-auto z-50">
              <button className="w-16 h-20 text-white font-extrabold font-mono	text-3xl transform rotate-90">
                FAQ
              </button>
              <button className="w-16 h-30 text-white font-extrabold font-mono	text-3xl transform rotate-90">
                Tickets
              </button>
              <button className="w-16 h-40 text-white font-extrabold font-mono	text-3xl transform rotate-90">
                Location
              </button>
              <button className="w-16 h-40 text-white font-extrabold font-mono	text-3xl transform rotate-90">
                Contact
              </button>
          </div>
          <div className="-mt-[700px]">
            {children}
          </div>




        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4">
          Footer Placeholder
        </footer>
      </div>
    </div>
  );
}
