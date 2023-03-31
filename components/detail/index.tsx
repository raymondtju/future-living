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
import { Building, CCTV, Forest, Gate, Mushola } from "../Icons";
import { DetailVRTour } from "./DetailVRTour";
import { FacilityCard } from "./FacilityCard";
import buildUrl from "cloudinary-build-url";
import { DetailPhoto } from "./DetailPhoto";

const Detail = () => {
  const propertyDetail = usePropertyDataStore((state) => state.propertyDetail);
  const propertyData = usePropertyDataStore((state) => state.propertyData);
  const cloudinary = (name: string) => {
    return buildUrl(`future-living/${name}`, {
      cloud: {
        cloudName: "dstfzlnsw",
      },
      transformations: {
        resize: {
          type: "limit",
        },
      },
    });
  };
  return (
    <>
      <div className={clsx("h-[184px]", "md:h-[351px]", "big:h-[658px]")}>
        <Image
          src={cloudinary(propertyDetail?.image)}
          alt="foto"
          className="h-full w-full object-cover"
          width={1000}
          height={1000}
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
              <FacilityCard
                label="Mosque"
                desc="24 Meters"
                icon={<Mushola />}
              />
              <FacilityCard label="CCTV" desc="24 Hours" icon={<Forest />} />
              <FacilityCard
                label="Playground"
                desc="20 Meters"
                icon={<CCTV />}
              />
              <FacilityCard
                label="One Gate System"
                desc="24 Hours"
                icon={<Gate />}
              />
              <FacilityCard
                label="Public Fasilities"
                desc="Mall, Hospital & Others"
                icon={<Building />}
              />
            </div>
          </SectionBody>
        </div>

        <div className="mt-20">
          <SectionTitle>Detail Photo</SectionTitle>
          <SectionBody>
            <DetailPhoto />
          </SectionBody>
        </div>

        <div className="pt-[60px]" id="vr-tour">
          <DetailVRTour />
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
