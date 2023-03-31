import React, { Fragment, useState } from "react";
import SectionTitle from "../SectionTitle";
import SectionBody from "../SectionBody";
import { ThreeSixty, VirtualReality } from "../Icons";
import { Dialog, Transition } from "@headlessui/react";
import { Poppins } from "next/font/google";
import Button from "../Button";
import clsx from "clsx";
import usePropertyDataStore from "@/hooks/usePropertyData";

export function DetailVRTour() {
  const [VReality, setVReality] = useState(false);

  const propertyDetail = usePropertyDataStore((state) => state.propertyDetail);

  return (
    <>
      <SectionTitle>VR Tour</SectionTitle>
      <SectionBody>
        <Transition.Root show={VReality} as={Fragment}>
          <Dialog
            open={VReality}
            onClose={setVReality}
            className="relative z-10 "
            as="div"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto p-2">
              <div
                className={clsx(
                  `flex max-h-max min-h-full items-end font-poppins`,
                  "big:px-10 big:py-6"
                )}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 translate-y-0 scale-95"
                  enterTo="opacity-100 translate-y-0 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 scale-100"
                  leaveTo="opacity-0 translate-y-4 translate-y-0 scale-95"
                >
                  <Dialog.Panel className="relative my-2 w-full transform overflow-hidden rounded-11xl bg-white px-2 py-2 text-left shadow-xl transition-all">
                    <Button
                      className="mb-3 flex justify-end"
                      onClick={() => setVReality(false)}
                    >
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Button>
                    <div
                      style={{
                        left: 0,
                        width: "100%",
                        height: 0,
                        maxHeight: "100vh",
                        position: "relative",
                        paddingBottom: "75%",
                      }}
                    >
                      <iframe
                        src={propertyDetail?.model}
                        style={{
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          border: 0,
                        }}
                        allowFullScreen
                        allow="xr-spatial-tracking;"
                      ></iframe>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        <div
          className="relative h-full w-full hover:cursor-pointer"
          onClick={() => setVReality(true)}
        >
          <ThreeSixty className="absolute inset-0 left-1/2 top-1/2 z-10 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform fill-none stroke-White-20/80 md:h-[148px] md:w-[148px] big:h-[280px] big:w-[280px]" />
          <VirtualReality className="absolute top-4 right-4 h-9 w-9 fill-White-20/80 md:top-7 md:right-7 md:h-12 md:w-12 big:right-[60px] big:top-[60px] big:h-20 big:w-20" />

          <div
            style={{
              backgroundImage: `url(${propertyDetail?.modelCover})`,
            }}
            className="h-[211px] w-full rounded-11xl bg-center object-cover md:h-[400px] big:h-[529px]"
          />
        </div>
      </SectionBody>
    </>
  );
}
