import React from "react";
import clsx from "clsx";
import { Share } from "../Icons";
import usePropertyDataStore from "@/hooks/usePropertyData";

export function DetailTitle() {
  const propertyDetail = usePropertyDataStore((state) => state.propertyDetail);
  return (
    <div className={clsx("mt-7 flex items-center justify-between gap-10")}>
      <h1
        className={clsx("text-3xl font-bold text-Primary-100", "md:text-8xl")}
      >
        {propertyDetail?.title}
      </h1>
      <div
        className={clsx(
          "flex flex-col items-center justify-center gap-1 text-Primary-80"
        )}
      >
        <Share className={clsx("h-6 w-6", "md:h-7 md:w-7")} />
        <span className="md:text-xl">Share</span>
      </div>
    </div>
  );
}
