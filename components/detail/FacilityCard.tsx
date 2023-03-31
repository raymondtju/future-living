import React from "react";
import clsx from "clsx";

interface IFacilityCard {
  icon?: any;
  label: string;
  desc: string;
}
export const FacilityCard = ({ icon, label, desc }: IFacilityCard) => {
  return (
    <div
      className={clsx(
        "flex w-full flex-col items-center rounded-14xl bg-White-20",
        "py-7"
      )}
      style={{
        boxShadow: "1px 1px 12px 0px rgba(80,52,228,0.12)",
      }}
    >
      <span className="w-7 text-Primary-100 md:w-10 big:w-20">{icon}</span>
      <p
        className={clsx(
          "pt-1 font-medium text-Primary-100",
          "text-xs",
          "md:text-4xl",
          "big:text-7xl"
        )}
      >
        {label}
      </p>
      <span
        className={clsx(
          "pt-2 text-Secondary-80",
          "text-[12px]",
          "md:text-xl",
          "big:text-5xl"
        )}
      >
        {desc}
      </span>
    </div>
  );
};
