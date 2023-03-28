/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import clsx from "clsx";

import detail from "/public/assets/images/detail-house.png";

import Layout from "../Layout";
import { DetailTitle } from "./DetailTitle";
import { DetailCardInfo } from "./DetailCardInfo";
import SectionTitle from "../SectionTitle";
import SectionBody from "../SectionBody";
import PropertyCard from "../PropertyCard";
import usePropertyDataStore from "@/hooks/usePropertyData";

interface IFacilityCard {
  icon?: string;
  label: string;
  desc: string;
}
const FacilityCard = ({ icon, label, desc }: IFacilityCard) => {
  return (
    <div
      className={clsx(
        "flex w-full flex-col items-center rounded-14xl bg-White-20",
        "py-2"
      )}
      style={{
        boxShadow: "1px 1px 12px 0px rgba(80,52,228,0.12)",
      }}
    >
      {icon}
      <p
        className={clsx(
          "font-medium text-Primary-100",
          "text-xs",
          "md:text-4xl",
          "big:text-7xl"
        )}
      >
        {label}
      </p>
      <span
        className={clsx(
          "pt-2 text-Secondary-80",
          "text-[12px]",
          "md:text-xl",
          "big:text-5xl"
        )}
      >
        {desc}
      </span>
    </div>
  );
};

const Detail = () => {
  const propertyDetail = usePropertyDataStore((state) => state.propertyDetail);
  const propertyData = usePropertyDataStore((state) => state.propertyData);
  return (
    <>
      <div className={clsx("h-[184px]", "md:h-[351px]", "big:h-[658px]")}>
        <img
          src={propertyDetail?.image}
          alt="foto"
          className="h-full w-full object-cover"
        />
      </div>
      <Layout>
        <DetailTitle />
        <DetailCardInfo propertyDetail={propertyDetail} />
        <div className="mt-24">
          <SectionTitle>House Plan Detail</SectionTitle>
          <SectionBody>
            <div
              className={clsx(
                "inline-grid place-items-center gap-4",
                "md:grid-cols-2",
                "big:gap-10"
              )}
            >
              <div
                className={clsx(
                  "h-[270px]",
                  "md:h-[247px] md:w-full",
                  "big:h-[491px]"
                )}
              >
                <Image
                  src={detail}
                  alt="house-plan"
                  className={clsx("h-full object-cover", "md:w-full")}
                />
              </div>
              <p
                className={clsx(
                  "text-Black-100",
                  "pt-5 text-[12px]",
                  "md:text-sm",
                  "big:text-justify big:text-2xl"
                )}
              >
                Future Living presents the Lily type, a two-floor, three-bedroom
                residence designed in a modern minimalist and elegant style.
                Having a high ceiling combined with geometric shapes and
                monochrome colors is perfect for millennial tastes. Lily type
                also has a carport that is enough to accommodate a car and a
                motorcycle, with a luxurious canopy. Plus, every room of this
                residence has good air circulation and lighting access, making
                it the right choice for millennials or young families who
                prioritize a healthy lifestyle.
              </p>
            </div>
          </SectionBody>
        </div>

        <div className="mt-24">
          <SectionTitle>Facility</SectionTitle>
          <SectionBody>
            <div className={clsx("grid", "grid-cols-2 gap-4")}>
              <FacilityCard label="Mosque" desc="24 Meters" />
              <FacilityCard label="CCTV" desc="24 Hours" />
              <FacilityCard label="Playground" desc="20 Meters" />
              <FacilityCard label="One Gate System" desc="24 Hours" />
              <FacilityCard
                label="Public Fasilities"
                desc="Mall, Hospital & Others"
              />
            </div>
          </SectionBody>
        </div>

        <div className="mt-20">
          <SectionTitle>Detail Photo</SectionTitle>
        </div>

        <div className="mt-[60px]">
          <SectionTitle>VR Tour</SectionTitle>
        </div>

        <div className="mt-20">
          <SectionTitle>See Other Type</SectionTitle>
          <SectionBody>
            <PropertyCard propertyData={propertyData} />
          </SectionBody>
        </div>
      </Layout>
    </>
  );
};

export default Detail;
