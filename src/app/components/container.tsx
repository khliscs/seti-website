import { Children, MutableRefObject, useState } from "react";
import AnimatedBackground from "./motion/motionbackround";
import CustomPatternSVG from "./motion/motiondraw";
import { TypeAnimation } from 'react-type-animation';

export default function Container(props: { [x: string]: any; children: any; ref1:MutableRefObject<null>; ref2:MutableRefObject<null> }) {
  const { children } = props;
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)

  const handleClickFaq = () => {
    props.ref1.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickTickets = () => {
    props.ref2.current?.scrollIntoView({behavior: 'smooth'});
  };
  setTimeout(function () {
    setShow1(true)
  }, 2000);

  setTimeout(function () {
    setShow2(true)
  }, 4000);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden bg-gradient-to-br from-[#542A08] from-10% via-[#852D14] via-30% to-[#600A1E] to-90%">
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
      <div className="relative z-10 flex flex-col pt-[40px] h-full w-full overflow-x-hidden overflow-y-auto">

        {/* Main Content */}
        <main id="skip" className="flex-1 w-full p-4">

          <div className="sticky right-0 top-0 w-12 sm:w-20 flex flex-col items-start space-y-12 ml-auto z-50">
            <button className="w-16 h-12 text-white font-extrabold font-special	text-5xl transform rotate-90" onClick={handleClickFaq}>
              <TypeAnimation
                sequence={['F', 200, 'Fa', 300, 'Faq', () => { },]}
                wrapper="span"
                cursor={false}
                repeat={0}
              />
            </button>
            <button className="w-16 h-44 text-white font-extrabold font-special	text-5xl transform rotate-90" onClick={handleClickTickets}>
              {show1 && <TypeAnimation
                sequence={['T', 200, 'Ti', 300, 'Tickets', () => { },]}
                wrapper="span"
                cursor={false}
                repeat={0}
              />}
            </button>
            <button className="w-16 h-72 text-white font-extrabold font-special	text-5xl transform rotate-90">
              {show2 && <TypeAnimation
                sequence={['Lo', 200, 'Locat', 300, 'Location', () => { },]}
                wrapper="span"
                cursor={true}
                repeat={0}
              />}
            </button>
          </div>
          <div className="-mt-[700px]">
            {children}
          </div>




        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4">
          Ticketsystem mit Hilfe von Pretix
        </footer>
      </div>
    </div>
  );
}
