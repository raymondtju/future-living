import { Email, Map, Phone } from "@/components/Icons";
import React, { useState } from "react";

import maps from "/public/assets/images/Maps.png";
import Image from "next/image";
import clsx from "clsx";
import SectionTitle from "@/components/SectionTitle";
import { Dialog } from "@headlessui/react";
import Button from "@/components/Button";

function ContactSection() {
  const [modalEmail, setModalEmail] = useState(false);
  const [modalContact, setModalContact] = useState(false);
  return (
    <>
      <Dialog
        open={modalEmail}
        onClose={() => setModalEmail(false)}
        className="fixed bottom-0 z-10 w-full p-4 "
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <Dialog.Panel
          className={`relative mx-auto w-full rounded-11xl bg-white px-10 py-6 font-poppins md:w-8/12`}
        >
          <Dialog.Title>
            To: <span>service@gmail.com</span>
          </Dialog.Title>
          <Dialog.Description>Subject:</Dialog.Description>
          <textarea
            className="h-[257px] w-full border-[1px] border-black p-2"
            placeholder="Subject"
          ></textarea>

          <Button onClick={() => setModalEmail(false)} primary>
            Send
          </Button>
        </Dialog.Panel>
      </Dialog>

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
            onClick={() => setModalEmail(false)}
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

      <SectionTitle>Contact Us</SectionTitle>
      <div className="mt-[60px] flex flex-row flex-wrap gap-4 ">
        <div className="flex flex-grow flex-col gap-5 md:gap-10">
          <div className="rounded-11xl border-[1px] border-Primary-80 px-5 py-5 text-Primary-80 transition-all duration-300 ease-in-out hover:bg-Primary-80 hover:text-White-20 md:px-8 md:py-6">
            <div className="flex flex-row ">
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
          <div
            className="rounded-11xl border-[1px] border-Primary-80 px-5 py-5 text-Primary-80 transition-all duration-300 ease-in-out hover:bg-Primary-80 hover:text-White-20 md:px-8 md:py-6"
            onClick={() => setModalEmail(true)}
          >
            <div className="flex flex-row">
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
          <div
            className="rounded-11xl border-[1px] border-Primary-80 px-5 py-5 text-Primary-80 hover:bg-Primary-80 hover:text-white md:px-8 md:py-6"
            onClick={() => setModalContact(true)}
          >
            <div className="flex flex-row">
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
