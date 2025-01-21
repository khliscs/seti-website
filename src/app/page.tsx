"use client";
import Head from "next/head"
import Container from "./components/container";
import PretixWidget from "./components/index/pretix";
import ContactSection from "./components/index/contact";
import MapsSection from "./components/index/maps";
import FaqAccordion from "./components/index/faq";

export default function Page() {
  const meta = {
    title: 'SETI-GATHERING',
    description: `Test`,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
      </Head>

      <Container>
        <div className="bg-inherit mt-96 mb-8 mr-12 sm:mr-32 ">
          <FaqAccordion />
          <PretixWidget />
          <ContactSection />
          <MapsSection />
        </div >
      </Container>

    </div >
  )
}
