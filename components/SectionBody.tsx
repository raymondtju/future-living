import clsx from "clsx";
import React from "react";

const SectionBody = ({ children }: React.PropsWithChildren) => {
  return <div className={clsx("pt-10", "md:pt-12")}>{children}</div>;
};

export default SectionBody;
