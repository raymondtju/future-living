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
    <div className="relative overflow-hidden py-20">
      <Image
        className="absolute bottom-0 -right-[10%] overflow-hidden bg-clip-content"
        src={front}
        alt="front"
      />

      <div
        style={{
          background: `rgba(64, 165, 221, 0.3)`,
          filter: `blur(100px)`,
        }}
        className="absolute inset-y-0 left-0 h-[487px] w-[487px]"
      ></div>

      <div
        style={{ background: `rgba(64, 165, 221, 0.3)`, filter: `blur(100px)` }}
        className="absolute inset-y-0 right-0 h-[368px] w-[368px]"
      ></div>

      <Layout>
        <div className="w-6/12">
          <h1 className="text-17xl font-bold text-Primary-100">
            Future Urban Living Expert
          </h1>
          <h2 className="mt-4 text-12xl font-semibold text-Primary-100">
            The most comfortable home for the future life
          </h2>
          <div className="mt-12">
            <div className="flex gap-3">
              {heroInfo.map((info, index) => (
                <div className="flex flex-col p-3" key={index}>
                  <span className="mx-auto text-10xl font-semibold text-Secondary-100">
                    {info.title}
                  </span>
                  <span className="mx-auto text-2xl text-Secondary-80">
                    {info.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Hero;
