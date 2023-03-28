import React from "react";
import clsx from "clsx";
import Label from "../Label";
import Button from "../Button";

export function DetailCardInfo({ propertyDetail }: any) {
  return (
    <div className="mt-7 md:mt-[38px]">
      <div
        className={clsx(
          "w-full space-y-4 overflow-hidden rounded-14xl bg-White-20 px-6 py-7",
          "md:px-7 md:py-8",
          "big:space-y-0"
        )}
        style={{
          boxShadow: "1px 1px 12px 0px rgba(80,52,228,0.12)",
        }}
      >
        <div
          className={clsx(
            "space-y-4",
            "big:flex big:flex-row big:gap-10 big:space-y-0"
          )}
        >
          <div
            className={clsx("flex", "flex-col gap-4", "md:flex-row md:gap-10")}
          >
            <Label name="Price" value={propertyDetail?.price} />
            <div className={clsx("flex gap-4", "md:gap-10")}>
              <Label name="Bedrooms" value="2+1" />
              <Label name="Bathrooms" value="2+1" />
            </div>
          </div>
          <div className={clsx("flex gap-4", "md:gap-10")}>
            <Label name="Interior" value="198 Sq Ft" />
            <Label name="Exterior" value="201 Sq Ft" />
          </div>
        </div>
        <div
          className={clsx(
            "flex gap-4",
            "md:justify-center md:gap-8 md:pt-2",
            "big:pt-[68px]"
          )}
        >
          <Button primary={true}>Call Agent</Button>
          <Button>Lets Tour</Button>
        </div>
      </div>
    </div>
  );
}
