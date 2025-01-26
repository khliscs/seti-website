
import React from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";

export default function Announcement() {
    return (
        <div>
            <Accordion>
                <AccordionItem>
                    <AccordionHeader>
                        <div className="pl-2 pt-4 bg-black/50">
                            <p className="text-[#ddd8b9] font-special text-3xl text-left">
                                30.5-2.6.25
                            </p>
                            <p className="text-[#ddd8b9] text-left font-mono text-base">
                                dark tekno and psy <br /><br />
                            </p>
                        

                        <div className="cursor-pointer">
                            <h3 className="text-[#ddd8b9] text-left font-mono text-base font-bold">
                                read more<br />
                            </h3>
                            </div>
                        </div>
                    </AccordionHeader>
                    <AccordionBody>
                        <div className="bg-black/50 text-[#ddd8b9]  text-left font-mono text-base">
                            SETI-Gathering is a festival which brings earthlings together to have liberating and beautiful experiences,
                            be it on the dancefloor immersed in visual and acoustic delights or enjoying the location and delving into art,
                            conversations and other revelations of life. We are a group of friends driven by the wish to create a festival
                            focused on the darker and more experimental side of Psy- and Tekno-culture. We aim to create a space in which
                            we can all freely express ourselves, and shed the layers of our daily social, physical and psychological demands.
                            We would like to invite you to join us on our next edition of SETI to launch ourselves into this year's highly
                            anticipated festival season.
                        </div>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>

        </div>
    );
}
