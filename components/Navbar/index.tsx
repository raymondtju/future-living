import React, { useState } from "react";
import { Burger } from "../Icons";
import Link from "next/link";
import clsx from "clsx";

function Navbar() {
  const [toogle, setToogle] = useState(false);
  return (
    <nav className="">
      <div className="my-4 flex items-center justify-between md:my-6 big:my-10">
        <div className="flex items-center text-lg font-bold uppercase text-Primary-100 md:text-4xl big:text-7xl">
          <Link href="/">future living</Link>
        </div>
        <div
          className={clsx(
            "md:static md:flex",
            toogle ? "absolute inset-0 top-10 z-20" : "hidden items-center"
          )}
        >
          <ul
            className={clsx(
              "flex gap-9 text-Primary-100",
              "md:flex-row md:rounded-none md:bg-none md:p-0 md:text-xl",
              "big:text-5xl",
              toogle
                ? "w-full flex-col rounded-b-15xl bg-white p-4"
                : "flex-row"
            )}
          >
            <Link
              href="#home"
              onClick={() => {
                setToogle(!toogle);
              }}
              scroll={false}
            >
              <li className="rounded-11xl px-3 py-2 transition-all duration-200 ease-in-out hover:bg-Primary-100 hover:text-white">
                Home
              </li>
            </Link>
            <Link
              href="#about"
              onClick={() => {
                setToogle(!toogle);
              }}
              scroll={false}
            >
              <li className="rounded-11xl px-3 py-2 transition-all duration-200 ease-in-out hover:bg-Primary-100 hover:text-white">
                About
              </li>
            </Link>
            <Link
              href="#contact"
              onClick={() => setToogle(!toogle)}
              scroll={false}
            >
              <li className="rounded-11xl px-3 py-2 transition-all duration-200 ease-in-out hover:bg-Primary-100 hover:text-white">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex md:hidden">
          <Burger
            className="h-6 w-6 stroke-Primary-100"
            onClick={() => setToogle(!toogle)}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
