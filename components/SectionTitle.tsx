import React from "react";
import clsx from "clsx";

const SectionTitle = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <h2
        className={clsx(
          "text-center font-semibold text-Secondary-100",
          "text-6xl",
          "md:text-11xl",
          "big:text-14xl"
        )}
      >
        {children}
      </h2>
    </>
  );
};

export default SectionTitle;
