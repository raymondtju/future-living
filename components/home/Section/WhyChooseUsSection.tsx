import React from "react";
import Layout from "@/components/Layout";
import { Award, Time, Trend } from "@/components/Icons";

function WhyChooseUsSection() {
  return (
    <>
      <div
        className="relative bg-no-repeat py-[120px]"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.24)), url("/assets/images/whychooseus-bg.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Layout>
          <h2 className="text-center text-14xl font-semibold text-White-20">
            Why Choose Us
          </h2>
          <p className="pt-4 text-2xl text-White-20">
            Private cluster that is presented specifically for families who like
            modern elegant and minimalist style housing
          </p>
          <div className="mt-[60px]">
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-15xl bg-[#DCDCDC]/50 py-16 px-11">
                <Award className="mx-auto flex w-20 text-White-20" />
                <h6 className="pt-8 text-center text-7xl font-medium text-White-20">
                  Winning 25+ Real Estate Award
                </h6>
              </div>
              <div className="rounded-15xl bg-[#DCDCDC]/50 py-16 px-11">
                <Trend className="mx-auto flex w-[90px] text-White-20" />
                <h6 className="pt-8 text-center text-7xl font-medium text-White-20">
                  Best Price On Market
                </h6>
              </div>
              <div className="rounded-15xl bg-[#DCDCDC]/50 py-16 px-11">
                <Time className="mx-auto flex w-20 text-White-20" />
                <h6 className="pt-8 text-center text-7xl font-medium text-White-20">
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
