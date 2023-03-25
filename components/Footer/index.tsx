import React from "react";
import Layout from "../Layout";
import { Facebook, Instagram, WaveLine, Youtube } from "../Icons";

function Footer() {
  return (
    <>
      <footer className="relative mt-[100px] bg-no-repeat pt-[60px] pb-10 md:mt-[180px] md:pt-[120px]">
        <WaveLine className="absolute bottom-0 -z-[1] w-full overflow-hidden fill-none stroke-[#348D9F] object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background: `url("/assets/images/footer-bg.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -11,
          }}
        ></div>
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `linear-gradient(0deg, rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0.4)), rgba(80, 52, 228, 0.5)`,
          }}
        ></div>
        <Layout>
          <div className="mt-0 md:mt-20">
            <div className="flex flex-wrap">
              <div>
                <h4 className="text-5xl font-bold uppercase text-White-20 md:text-12xl">
                  future living
                </h4>
                <div className="flex gap-4 pt-4">
                  <Facebook className="h-8 w-8 text-White-20" />
                  <Instagram className="h-8 w-8 text-White-20" />
                  <Youtube className="h-8 w-8 text-White-20" />
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-16 pl-0 pt-[60px] lg:pl-[120px] lg:pt-0">
                <div className="flex flex-col">
                  <h3 className="mb-7 text-xs font-semibold text-White-20 md:text-5xl">
                    Navigation
                  </h3>
                  <ul className="flex flex-grow flex-col gap-y-5 text-[12px] text-White-20 md:gap-y-6 md:text-2xl">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h3 className="mb-7 text-xs font-semibold text-White-20 md:text-5xl">
                    Contact Us
                  </h3>
                  <ul className="flex flex-col gap-y-5 text-[12px] text-White-20 md:gap-y-6 md:text-2xl">
                    <li>service@future.com</li>
                    <li>+629802130323</li>
                    <li>Jl.Pahlawan No 18</li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h3 className="mb-7 text-xs font-semibold text-White-20 md:text-5xl">
                    Privacy & Policy
                  </h3>
                  <ul className="flex flex-col gap-y-5 text-[12px] text-White-20 md:gap-y-6 md:text-2xl">
                    <li>Privacy & Policy</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="mt-[120px] text-center text-2xl font-semibold text-White-20">
              Copyright Future Living 2023
            </p>
          </div>
        </Layout>
      </footer>
    </>
  );
}

export default Footer;
