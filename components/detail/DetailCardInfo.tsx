import React, { useState } from "react";
import clsx from "clsx";
import Label from "../Label";
import Button from "../Button";

import { Dialog } from "@headlessui/react";
import Link from "next/link";

export function DetailCardInfo({ propertyDetail }: any) {
  const [modalContact, setModalContact] = useState(false);
  return (
    <>
      <Dialog
        open={modalContact}
        onClose={() => setModalContact(false)}
        className="fixed bottom-0 z-10 w-full p-4"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <Dialog.Panel
          className={`relative mx-auto flex w-full flex-col rounded-11xl bg-white px-10 py-6 font-poppins md:w-8/12`}
        >
          <div
            className="inline-flex justify-end"
            onClick={() => setModalContact(false)}
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
          </div>

          <Dialog.Description className={"text-7xl font-medium text-Black-100"}>
            Call Agent via Moblie
          </Dialog.Description>
          <span className="pt-2 text-2xl text-White-100">+6285464232</span>

          <p className={"py-3 text-7xl text-Black-100"}>Or</p>
          <Dialog.Description className={"text-7xl font-medium text-Black-100"}>
            Call Agent on via Whatsapp
          </Dialog.Description>
          <span className="pt-2 text-2xl text-White-100">+6285464232</span>

          <a href="https://wa.me/6285464232" target="_blank" className="mt-8 ">
            <Button
              onClick={() => setModalContact(false)}
              className={clsx(
                "w-full bg-green-400 text-white outline-none",
                "rounded-11xl px-6 py-3",
                "md:px-8 md:py-3",
                "big:py-4 big:px-10 big:text-5xl"
              )}
            >
              Whatsapp
            </Button>
          </a>
        </Dialog.Panel>
      </Dialog>

      <div className="mt-7 md:mt-[38px]">
        <div
          className={clsx(
            "w-full space-y-4 overflow-hidden rounded-14xl bg-White-20 px-6 py-7",
            "md:px-7 md:py-8",
            "big:space-y-0"
          )}
          style={{
            boxShadow: "1px 1px 12px 0px rgba(80,52,228,0.12)",
          }}
        >
          <div
            className={clsx(
              "space-y-4",
              "big:flex big:flex-row big:gap-10 big:space-y-0"
            )}
          >
            <div
              className={clsx(
                "flex",
                "flex-col gap-4",
                "md:flex-row md:gap-10"
              )}
            >
              <Label name="Price" value={propertyDetail?.price} />
              <div className={clsx("flex gap-4", "md:gap-10")}>
                <Label name="Bedrooms" value="2+1" />
                <Label name="Bathrooms" value="2+1" />
              </div>
            </div>
            <div className={clsx("flex gap-4", "md:gap-10")}>
              <Label name="Interior" value="198 Sq Ft" />
              <Label name="Exterior" value="201 Sq Ft" />
            </div>
          </div>
          <div
            className={clsx(
              "flex gap-4",
              "md:justify-center md:gap-8 md:pt-2",
              "big:pt-[68px]"
            )}
          >
            <Button primary={true} onClick={() => setModalContact(true)}>
              Call Agent
            </Button>
            <Link href="#vr-tour" scroll={false}>
              <Button>Lets Tour</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
