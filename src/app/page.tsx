"use client";
import Head from "next/head"
import Container from "./components/container";
import PretixWidget from "./components/index/pretix";
import ContactSection from "./components/index/contact";
import MapsSection from "./components/index/OSMaps";
import FaqAccordion from "./components/index/faq2";
import Announcement from "./components/index/announcement";
import { useRef } from "react";
import dynamic from 'next/dynamic';
import LineupAccordion from "./components/index/Lineup";

const Map = dynamic(() => import("./components/index/OSMaps"), { ssr: false });




export default function Page() {
  const meta = {
    title: 'SETI-GATHERING',
    description: `Test`,
  };

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);


  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
      </Head>

      <Container ref1={ref1} ref2={ref2} ref3={ref3}>
        <div className="bg-inherit mt-[35rem] mb-8 mr-12 sm:mr-32 ">
          <Announcement />
          <div ref={ref2} className="mt-36">
            <PretixWidget />
          </div>
          <div>
            <LineupAccordion />
          </div>
          <div ref={ref1}>
            <FaqAccordion />
          </div>
          <div ref={ref3}>
          <Map/>
          </div>
        </div >
      </Container>

    </div >
  )
}

  
