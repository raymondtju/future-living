import React from "react";

import pic from "/public/assets/images/who-are-we.jpg";
import Image from "next/image";

function WhoWeAreSection() {
  return (
    <>
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <Image src={pic} alt="pic" />
        <div className="text-center">
          <h2 className="section-title font-semibold text-Secondary-100">
            Who we are
          </h2>
          <p className="mt-5 text-center text-xs text-Black-100 md:mt-8 md:text-justify md:text-5xl">
            Future Living is a real estate developer based in Jakarta and has
            been trusted for more than 10 years. Future Living presents an
            exclusive, elegant, and luxurious housing that is comfortable and
            affordable for your better future.
          </p>
        </div>
      </div>
    </>
  );
}

export default WhoWeAreSection;
