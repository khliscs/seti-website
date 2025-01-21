import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function FaqAccordion() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <div className={'border p-2'}>
      <div className={'pb-4'}>
        <Accordion open={open === 1} placeholder={""}>
          <AccordionHeader onClick={() => handleOpen(1)} placeholder={""} className={'text-white font-special '}>What is Material Tailwind?</AccordionHeader>
          <AccordionBody className={'text-white'}>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
      <div className={'pb-4'}>
        <Accordion open={open === 2} placeholder={""}>
          <AccordionHeader onClick={() => handleOpen(2)} placeholder={""} className={'text-white font-special'}>
            How to use Material Tailwind?
          </AccordionHeader>
          <AccordionBody className={'text-white'}>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
      <div className={'pb-4'}>
        <Accordion open={open === 3} placeholder={""}>
          <AccordionHeader onClick={() => handleOpen(3)} placeholder={""} className={'text-white font-special'}>
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody className={'text-white'}>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}