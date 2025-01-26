import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import React from "react";

export default function FaqAccordion() {
  return (
    <div className="mb-12">
      <Accordion>
        <AccordionItem>
          <AccordionHeader>
            <div className="mb-4 h-24 flex items-center justify-between px-4 bg-black/50 cursor-pointer">
              <h3 className="text-[#ddd8b9] font-special text-4xl text-left">FAQ</h3>
            </div>
          </AccordionHeader>

          <AccordionBody>
            <div className="accordion-body">
              <AccordionItem>
                <AccordionHeader>
                  <div className="mb-4 h-24 flex items-center justify-between px-4 bg-black/50 cursor-pointer">
                    <h3 className="text-[#ddd8b9] font-special text-3xl text-left">Camping</h3>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <div className="relative">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="relative text-[#ddd8b9] ml-2 pl-1 mt-2 text-left font-mono text-base">
                      There will be a limited Camping space. Please pack wisely, so everyone can have a comfortable space for camping. 
                      Also pack something to protect you from the sun, as there is no shadow on the camping ground. 
                      The SETI is surrounded by nature reserves and agricultural land, so wild camping can&apos;t be tolerated. 
                      Farmers and their vehicles need a lot of space around the roads, which have to be accessible all the time. 
                      Also you don't camp in nature reserves.
                    </div>
                  </div>
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionHeader>
                  <div className="mb-4 h-24 flex items-center justify-between px-4 bg-black/50 cursor-pointer">
                    <h3 className="text-[#ddd8b9] font-special text-3xl text-left">Food and drinks</h3>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <div className="relative">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="relative text-[#ddd8b9] ml-2 pl-1 mt-2 text-left font-mono text-base">
                      We will have food shops at our gathering as well as free drinking water. Please use this resource mindfully, 
                      as we are not connected to the water grid. Please get water for cleaning or water guns from tanks that aren&apos;t 
                      labeled as drinking water.
                    </div>
                  </div>
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionHeader>
                  <div className="mb-4 h-24 flex items-center justify-between px-4 bg-black/50 cursor-pointer">
                    <h3 className="text-[#ddd8b9] font-special text-3xl text-left">Showers</h3>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <div className="relative">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="relative text-[#ddd8b9] ml-2 pl-1 mt-2 text-left font-mono text-base">
                      There is a single outdoor shower that you may use.
                    </div>
                  </div>
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionHeader>
                  <div className="mb-4 h-24 flex items-center justify-between px-4 bg-black/50 cursor-pointer">
                    <h3 className="text-[#ddd8b9] font-special text-3xl text-left">Parking</h3>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <div className="relative">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="relative text-[#ddd8b9] ml-2 pl-1 mt-2 text-left font-mono text-base">
                      As camping space is limited, there will be a parking space near the festival. You can find it on the map. 
                      Please don't park anywhere else as you might get towed.
                    </div>
                  </div>
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionHeader>
                  <div className="mb-4 h-24 flex items-center justify-between px-4 bg-black/50 cursor-pointer">
                    <h3 className="text-[#ddd8b9] font-special text-3xl text-left">Awareness & Security</h3>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <div className="relative">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="relative text-[#ddd8b9] ml-2 pl-1 mt-2 text-left font-mono text-base">
                      We will have an awareness team which will be recognizable by string lights. If you or others feel harassed 
                      or you see something suspicious, please do not hesitate and ask the awareness team for help. Gathering is no 
                      place for hate. Our staff is trained and sensitized to recognize scene clothing and codes.
                    </div>
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
