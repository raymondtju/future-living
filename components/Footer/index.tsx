import React from "react";
import Layout from "../Layout";
import { Facebook, Instagram, WaveLine, Youtube } from "../Icons";

function Footer() {
  return (
    <>
      <footer className="relative mt-[180px] bg-no-repeat pt-[120px] pb-10">
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
          <div className="mt-20">
            <div className="flex flex-wrap">
              <div>
                <h2 className="text-12xl font-bold uppercase text-White-20">
                  future living
                </h2>
                <div className="flex gap-4 pt-4">
                  <Facebook className="h-8 w-8 text-White-20" />
                  <Instagram className="h-8 w-8 text-White-20" />
                  <Youtube className="h-8 w-8 text-White-20" />
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-16 pl-0 lg:pl-[120px]">
                <div className="flex flex-col">
                  <h3 className="mb-7 text-5xl font-semibold text-White-20">
                    Navigation
                  </h3>
                  <ul className="flex flex-grow flex-col space-y-6 text-2xl text-White-20">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h3 className="mb-7 text-5xl font-semibold text-White-20">
                    Contact Us
                  </h3>
                  <ul className="flex flex-col space-y-6 text-2xl text-White-20">
                    <li>service@future.com</li>
                    <li>+629802130323</li>
                    <li>Jl.Pahlawan No 18</li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h3 className="mb-7 text-5xl font-semibold text-White-20">
                    Privacy & Policy
                  </h3>
                  <ul className="flex flex-col space-y-6 text-2xl text-White-20">
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
