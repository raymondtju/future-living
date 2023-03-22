import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="my-10 flex items-center justify-between">
        <div className="flex items-center text-7xl font-bold uppercase text-Primary-100">
          future living
        </div>
        <div className="flex items-center">
          <ul className="flex gap-9 text-5xl text-Primary-100">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
