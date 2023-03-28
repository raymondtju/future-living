import React from "react";
import { Burger } from "../Icons";
import Link from "next/link";
import clsx from "clsx";

function Navbar() {
  return (
    <nav>
      <div className="my-4 flex items-center justify-between md:my-6 big:my-10">
        <div className="flex items-center text-lg font-bold uppercase text-Primary-100 md:text-4xl big:text-7xl">
          <Link href="/">future living</Link>
        </div>
        <div className="hidden items-center md:flex">
          <ul
            className={clsx(
              "flex gap-9 text-Primary-100",
              "md:text-xl",
              "big:text-5xl"
            )}
          >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex md:hidden">
          <Burger className="h-6 w-6 stroke-Primary-100" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
