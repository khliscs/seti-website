import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <div className={'mb-24 '}>
      <div className="mb-4 bt-transparent">
        <div className={'pb-4 pt-4 bg-black/50  '}>
          <Accordion open={open === 1} placeholder={""}>
            <AccordionHeader onClick={() => handleOpen(1)} placeholder={""} className={'text-[#ddd8b9] font-special text-4xl text-left ml-4 '}>
              Journey
            </AccordionHeader>
            <AccordionBody className={'text-[#ddd8b9] ml-2 text-left font-mono text-base'}>
              By public Transport you have to travel to the train station Erfurt-Ost, from where it&apos;s a 30 min walk to the Festival.
              If you want to drive to the SETI, leave the B7 at exit Erfurt-Roter-Berg/Erfurt-Schwerborn/Zoo, for navigation, use Am Johannishof 8 in 99085 Erfurt.
              Camping and festivalgrounds will be open on Friday.

            </AccordionBody>
          </Accordion>

        </div>
      </div>
      <div className="mb-4 bt-transparent">
      <div className={'pb-4 pt-4 bg-black/50'}>
        <Accordion open={open === 2} placeholder={""}>
          <AccordionHeader onClick={() => handleOpen(2)} placeholder={""} className={'text-[#ddd8b9] font-special text-4xl text-left ml-4'}>
            Camping
          </AccordionHeader>
          <AccordionBody className={'text-[#ddd8b9] ml-2 text-left font-mono text-base'}>
            There will be a limited Camping space. Please pack wisely, so everyone can have a comfortable space for camping. Also pack something to protect you from the sun, as there is no shadow on the camping ground.
            The SETI is surrounded by nature reserves and agricultural land, so wild camping can&apos;t be tolerated.
            Farmers and their vehicles need a lot of space around the roads, which have to be accessible all the time. Also you don't camp in nature reserves.
          </AccordionBody>
        </Accordion>
      </div>
      </div>
      <div className="mb-4 bt-transparent">
        <div className={'pb-4 pt-4 bg-black/50'}>
          <Accordion open={open === 3} placeholder={""}>
            <AccordionHeader onClick={() => handleOpen(3)} placeholder={""} className={'text-[#ddd8b9] font-special text-4xl text-left ml-4'}>
              Food and drinks
            </AccordionHeader>
            <AccordionBody className={'text-[#ddd8b9] ml-2 text-left font-mono text-base'}>
              We will have food shops at our gathering as well as free drinking water. Please use this ressource mindful, as we are not connected to the water grid.
              Please get water for cleaning or water guns from thanks that aren&apos;t labeled as drinking water.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div className="mb-4 bt-transparent">
        <div className={'pb-4 pt-4 bg-black/50'}>
          <Accordion open={open === 5} placeholder={""}>
            <AccordionHeader onClick={() => handleOpen(5)} placeholder={""} className={'text-[#ddd8b9] font-special text-4xl text-left ml-4'}>
              Showers
            </AccordionHeader>
            <AccordionBody className={'text-[#ddd8b9] ml-2 text-left font-mono text-base'}>
              There is a single outdoor shower, that you may use.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div className="mb-4 bt-transparent">
        <div className={'pb-4 pt-4 bg-black/50'}>
          <Accordion open={open === 6} placeholder={""}>
            <AccordionHeader onClick={() => handleOpen(6)} placeholder={""} className={'text-[#ddd8b9] font-special text-4xl text-left ml-4'}>
              Parking
            </AccordionHeader>
            <AccordionBody className={'text-[#ddd8b9] ml-2 text-left font-mono text-base'}>
              As camping space is limited, there will be a parking space near the festival. You can find it on the map. Please don't park anywhere else as you might get towed.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div className="mb-4 bt-transparent">
        <div className={'pb-4 pt-4 bg-black/50'}>
          <Accordion open={open === 7} placeholder={""}>
            <AccordionHeader onClick={() => handleOpen(7)} placeholder={""} className={'text-[#ddd8b9] font-special text-4xl text-left ml-4'}>
              Awareness & Security
            </AccordionHeader>
            <AccordionBody className={'text-[#ddd8b9] ml-2 text-left font-mono text-base'}>
              We will have an awarenessteam which will be recognizable by string lights. If you or others feel harassed or you see something suspicious, please do not hesitate and ask the awarenessteam for help.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div className="mb-4 bt-transparent">
        <div className={'pb-4 pt-4 bg-black/50'}>
          <Accordion open={open === 8} placeholder={""}>
            <AccordionHeader onClick={() => handleOpen(8)} placeholder={""} className={'text-[#ddd8b9] font-special text-4xl text-left ml-4'}>
              Nazis and other scum
            </AccordionHeader>
            <AccordionBody className={'text-[#ddd8b9] ml-2 text-left font-mono text-base'}>
              The SETI Gathering is no place for hate. Our staff is trained and sensitized to recognize scene clothing and codes.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
}