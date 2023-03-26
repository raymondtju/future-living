import React from "react";

import front from "/public/assets/images/unsplash_koH7IVuwRLw-removebg-preview 1.png";
import Image from "next/image";
import Layout from "../Layout";

const heroInfo = [
  {
    title: "20K+",
    subtitle: "Unit Property",
  },
  {
    title: "10K+",
    subtitle: "Happy Customer",
  },
  {
    title: "25+",
    subtitle: "Winning Award",
  },
];

function Hero() {
  return (
    <>
      <div className="relative pt-20 overflow-hidden md:pt-20 md:pb-20">
        <div
          style={{
            background: `rgba(64, 165, 221, 0.3)`,
            filter: `blur(100px)`,
          }}
          className="absolute inset-y-0 left-0 h-[487px] w-[487px]"
        ></div>

        <div
          style={{
            background: `rgba(64, 165, 221, 0.3)`,
            filter: `blur(100px)`,
          }}
          className="absolute inset-y-0 right-0 h-[368px] w-[368px]"
        ></div>

        <Layout>
          <div className="w-auto md:w-6/12">
            <h1 className="font-bold text-center text-11xl text-Primary-100 md:text-left md:text-17xl">
              Future Urban Living Expert
            </h1>
            <h2 className="mt-4 text-5xl font-semibold text-center text-Primary-100 md:text-left md:text-12xl">
              The most comfortable home for the future life
            </h2>
            <div className="hidden mt-12 md:flex">
              <div className="flex gap-3">
                {heroInfo.map((info, index) => (
                  <div className="flex flex-col p-3" key={index}>
                    <span className="mx-auto text-3xl font-semibold text-Secondary-100 md:text-10xl">
                      {info.title}
                    </span>
                    <span className="mx-auto text-[12px] text-Secondary-80 md:text-2xl">
                      {info.subtitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Layout>
        <Image
          className="bottom-0 -right-[10%] mt-8 flex w-full max-w-screen-md justify-center overflow-hidden bg-clip-content md:absolute md:mt-0"
          src={front}
          alt="front"
        />
      </div>
      <Layout>
        <div className="flex mt-8 md:hidden">
          <div className="flex gap-4">
            {heroInfo.map((info, index) => (
              <div className="flex flex-col p-1 text-center" key={index}>
                <span className="mx-auto text-3xl font-semibold text-Secondary-100 md:text-10xl">
                  {info.title}
                </span>
                <span className="mx-auto text-[12px] text-Secondary-80 md:text-2xl">
                  {info.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Hero;
