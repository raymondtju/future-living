import React from "react";
import { Burger } from "../Icons";

function Navbar() {
  return (
    <nav>
      <div className="flex items-center justify-between my-4 md:my-10">
        <div className="flex items-center text-lg font-bold uppercase text-Primary-100 md:text-7xl">
          future living
        </div>
        <div className="items-center hidden md:flex">
          <ul className="flex text-5xl gap-9 text-Primary-100">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex md:hidden">
          <Burger className="w-8 text-Primary-100" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
