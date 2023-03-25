import { Email, Map, Phone } from "@/components/Icons";
import React from "react";

import maps from "/public/assets/images/Maps.png";
import Image from "next/image";
import clsx from "clsx";

function ContactSection() {
  return (
    <>
      <h2
        className={clsx(
          "text-center text-6xl font-semibold text-Secondary-100",
          "md:text-[48px]"
        )}
      >
        Contact Us
      </h2>
      <div className="mt-[60px] flex flex-row flex-wrap gap-4">
        <div className="flex flex-grow flex-col gap-10">
          <div className="rounded-11xl border-[1px] border-Primary-80 px-8 py-6">
            <div className="flex flex-row text-Primary-80">
              <Map className="m-2 w-5 md:w-8" />
              <div className="flex flex-col pl-2">
                <span className={clsx("text-lg font-semibold", "md:text-7xl")}>
                  Location
                </span>
                <span className={clsx("pt-2 text-2xs", "md:text-2xl")}>
                  Jln. Pahlawan no 16
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-11xl border-[1px] border-Primary-80 px-8 py-6">
            <div className="flex flex-row text-Primary-80">
              <Email className="m-2 w-5 md:w-8" />
              <div className="flex flex-col pl-2">
                <span className={clsx("text-lg font-semibold", "md:text-7xl")}>
                  Email
                </span>
                <span className={clsx("pt-2 text-2xs", "md:text-2xl")}>
                  service@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-11xl border-[1px] border-Primary-80 px-8 py-6">
            <div className="flex flex-row text-Primary-80">
              <Phone className="m-2 w-5 md:w-8" />
              <div className="flex flex-col pl-2">
                <span className={clsx("text-lg font-semibold", "md:text-7xl")}>
                  Call
                </span>
                <span className={clsx("pt-2 text-2xs", "md:text-2xl")}>
                  +628678213018
                </span>
              </div>
            </div>
          </div>
        </div>

        <Image src={maps} alt="maps" className="hidden md:flex" />
      </div>
    </>
  );
}

export default ContactSection;
