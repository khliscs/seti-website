
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import React, { useState } from "react";


export default function FaqAccordion() {

  return (
    <div className={'mb-36 '}>

      <Accordion>
        <AccordionItem>
          <div className="mb-4 bt-transparent">
            <div className={'pb-4 pt-4 bg-black/50  '}>
              <AccordionHeader>
                <h3 className={'text-[#ddd8b9] font-special text-4xl text-left ml-4'}>FAQ</h3>
              </AccordionHeader>
            </div>
          </div>

          <AccordionBody>
            <div className="accordion-body">
              <AccordionItem>
                <div className="mb-4 bt-transparent">
                  <div className={'pb-4 pt-4 bg-black/50  '}>
                    <AccordionHeader>
                      <h3 className={'text-[#ddd8b9] font-special text-3xl text-left ml-4'}>Camping</h3>
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="text-[#ddd8b9] ml-2 text-left font-mono text-base">
                        There will be a limited Camping space. Please pack wisely, so everyone can have a comfortable space for camping. Also pack something to protect you from the sun, as there is no shadow on the camping ground.
                        The SETI is surrounded by nature reserves and agricultural land, so wild camping can&apos;t be tolerated.
                        Farmers and their vehicles need a lot of space around the roads, which have to be accessible all the time. Also you don't camp in nature reserves.
                      </div>
                    </AccordionBody>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem>
                <div className="mb-4 bt-transparent">
                  <div className={'pb-4 pt-4 bg-black/50  '}>
                    <AccordionHeader>
                      <h3 className={'text-[#ddd8b9] font-special text-3xl text-left ml-4'}>Food and drinks</h3>
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="text-[#ddd8b9] ml-2 text-left font-mono text-base">
                      We will have food shops at our gathering as well as free drinking water. Please use this ressource mindful, as we are not connected to the water grid.
                      Please get water for cleaning or water guns from thanks that aren&apos;t labeled as drinking water.
                      </div>
                    </AccordionBody>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem>
                <div className="mb-4 bt-transparent">
                  <div className={'pb-4 pt-4 bg-black/50  '}>
                    <AccordionHeader>
                      <h3 className={'text-[#ddd8b9] font-special text-3xl text-left ml-4'}>Showers</h3>
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="text-[#ddd8b9] ml-2 text-left font-mono text-base">
                      There is a single outdoor shower, that you may use.
                      </div>
                    </AccordionBody>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem>
                <div className="mb-4 bt-transparent">
                  <div className={'pb-4 pt-4 bg-black/50  '}>
                    <AccordionHeader>
                      <h3 className={'text-[#ddd8b9] font-special text-3xl text-left ml-4'}>Parking</h3>
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="text-[#ddd8b9] ml-2 text-left font-mono text-base">
                      As camping space is limited, there will be a parking space near the festival. You can find it on the map. Please don't park anywhere else as you might get towed.
                      </div>
                    </AccordionBody>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem>
                <div className="mb-4 bt-transparent">
                  <div className={'pb-4 pt-4 bg-black/50  '}>
                    <AccordionHeader>
                      <h3 className={'text-[#ddd8b9] font-special text-3xl text-left ml-4'}>Awareness & Security</h3>
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="text-[#ddd8b9] ml-2 text-left font-mono text-base">
                      We will have an awarenessteam which will be recognizable by string lights. If you or others feel harassed or you see something suspicious, please do not hesitate and ask the awarenessteam for help. Gathering is no place for hate. Our staff is trained and sensitized to recognize scene clothing and codes.
                      </div>
                    </AccordionBody>
                  </div>
                </div>
              </AccordionItem>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

