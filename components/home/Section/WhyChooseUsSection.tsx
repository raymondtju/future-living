import React from "react";
import Layout from "@/components/Layout";
import { Award, Time, Trend } from "@/components/Icons";

function WhyChooseUsSection() {
  return (
    <>
      <div
        className="relative bg-no-repeat py-10 md:py-[120px]"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.24)), url("/assets/images/whychooseus-bg.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Layout>
          <h2 className="section-title text-center font-semibold text-White-20">
            Why Choose Us
          </h2>
          <p className="pt-4 text-center text-[12px] leading-[120%] text-White-20 md:text-2xl">
            Private cluster that is presented specifically for families who like
            modern elegant and minimalist style housing
          </p>
          <div className="mt-8 flex justify-center md:mt-[60px]">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="max-w-[200px] rounded-15xl bg-[#DCDCDC]/50 px-5 py-8 md:max-w-none md:py-16 md:px-11">
                <Award className="mx-auto flex w-10 text-White-20 md:w-20" />
                <h6 className="pt-5 text-center text-lg font-medium text-White-20 md:pt-8 md:text-7xl">
                  Winning 25+ Real Estate Award
                </h6>
              </div>
              <div className="max-w-[200px] rounded-15xl bg-[#DCDCDC]/50 px-5 py-8 md:max-w-none md:py-16 md:px-11">
                <Trend className="mx-auto flex w-[90px] text-White-20" />
                <h6 className="pt-8 text-center text-lg font-medium text-White-20 md:text-7xl">
                  Best Price On Market
                </h6>
              </div>
              <div className="max-w-[200px] rounded-15xl bg-[#DCDCDC]/50 px-5 py-8 md:max-w-none md:py-16 md:px-11">
                <Time className="mx-auto flex w-20 text-White-20" />
                <h6 className="pt-8 text-center text-lg font-medium text-White-20 md:text-7xl">
                  Customer Support For 24 Hours
                </h6>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}

export default WhyChooseUsSection;
