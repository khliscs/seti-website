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
    <div className={'mb-24'}>
      <div className={'pb-4'}>
        <Accordion open={open === 1} placeholder={""}>
          <AccordionHeader onClick={() => handleOpen(1)} placeholder={""} className={'text-white font-special text-4xl text-left'}>Camping </AccordionHeader>
          <AccordionBody className={'text-white text-left font-mono text-base'}>
          there will be a camp-site for caravans, aswell as normal tennt&apos;s.
          </AccordionBody>
        </Accordion>
      </div>
      <div className={'pb-4'}>
        <Accordion open={open === 2} placeholder={""}>
          <AccordionHeader onClick={() => handleOpen(2)} placeholder={""} className={'text-white font-special text-4xl text-left'}>
            Parking
          </AccordionHeader>
          <AccordionBody className={'text-white text-left font-mono text-base'}>
            There will be space for parking 700m away from the Location &apos;
          </AccordionBody>
        </Accordion>
      </div>
      <div className={'pb-4'}>
        <Accordion open={open === 3} placeholder={""}>
          <AccordionHeader onClick={() => handleOpen(3)} placeholder={""} className={'text-white font-special text-4xl text-left'}>
            Awareness
          </AccordionHeader>
          <AccordionBody className={'text-white text-left font-mono text-base'}>
            We will have awareness at the whole Event. They will be visuable with vests and lights. (read more here)
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}