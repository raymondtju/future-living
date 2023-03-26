import React from "react";
import Layout from "../../Layout";
import { ComfortableSection } from "./ComfortableSection";
import { OurPropertySection } from "./OurPropertySection";
import WhoWeAreSection from "./WhoWeAreSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import ContactSection from "./ContactSection";
import Footer from "@/components/Footer";

function Section() {
  return (
    <>
      <Layout>
        <div className="mt-20 md:mt-32">
          <ComfortableSection />
        </div>
        <div className="mt-20 md:mt-32">
          <OurPropertySection />
        </div>
        <div className="mt-20 md:mt-32">
          <WhoWeAreSection />
        </div>
      </Layout>
      <div className="mt-20 md:mt-32">
        <WhyChooseUsSection />
      </div>
      <Layout>
        <div className="mt-20 md:mt-32">
          <ContactSection />
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default Section;
