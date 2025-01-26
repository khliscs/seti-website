import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import React from "react";

export default function LineupAccordion() {
  return (
    <div className="mb-8">
      <Accordion>
        <AccordionItem>
          <AccordionHeader>
            <div className="mb-4 bt-transparent">
              <div className=" pb-4 pt-4 bg-black/50 cursor-pointer">
                <h3 className="text-[#ddd8b9] font-special text-4xl text-left ml-4">Lineup</h3>
              </div>
            </div>
          </AccordionHeader>

          <AccordionBody>
            <div className="accordion-body">
              <AccordionItem>
                <AccordionHeader>
                  <div className="mb-4 bt-transparent">
                    <div className="pb-4 pt-4 bg-black/50 cursor-pointer">
                      <h3 className="text-[#ddd8b9] font-special text-3xl text-left ml-4">Areccibo-floor</h3>
                    </div>
                  </div>
                </AccordionHeader>

                <AccordionBody>
                  <div className="text-[#ddd8b9] ml-4 text-left font-mono text-base">
                    Soon to be announced. Check out Instagram for further updates.
                  </div>
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionHeader>
                  <div className="mb-4 bt-transparent">
                    <div className="pb-4 pt-4 bg-black/50 cursor-pointer">
                      <h3 className="text-[#ddd8b9] font-special text-3xl text-left ml-4">Tribehouse-floor</h3>
                    </div>
                  </div>
                </AccordionHeader>

                <AccordionBody>
                  <div className="text-[#ddd8b9] ml-4 text-left font-mono text-base">
                    Soon to be announced. Check out Instagram for further updates.
                  </div>
                </AccordionBody>
              </AccordionItem>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
