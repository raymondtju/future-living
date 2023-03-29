/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { Floor, Room } from "./Icons";
import Link from "next/link";
import usePropertyDataStore from "@/hooks/usePropertyData";
import { useRouter } from "next/router";
import clsx from "clsx";

interface IPropertyCard {
  propertyData: Record<string, any>[];
}

const PropertyCard = ({ propertyData }: IPropertyCard) => {
  const router = useRouter();
  const fetchPropertyData = usePropertyDataStore(
    (state) => state.fetchPropertyData
  );
  useEffect(() => {
    // console.log(router.pathname == "/");
    // console.log(router.query.id);
    const { id } = router.query;
    const singleId = Array.isArray(id) ? id.join("") : id;

    if (router.pathname == "/") fetchPropertyData();
    else fetchPropertyData(singleId);
  }, [fetchPropertyData, router.pathname, router.query]);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {propertyData.map((data, index) => (
          <Link key={index} href={`/detail/${data.id}`}>
            <div
              className="max-w-[389px] overflow-hidden rounded-14xl bg-White-20"
              style={{
                boxShadow: "1px 1px 12px 0px rgba(80,52,228,0.12)",
              }}
            >
              <div
                className={clsx(
                  "relative h-[193px] w-full overflow-hidden rounded-t-14xl md:h-[255px]"
                )}
              >
                <div className="absolute inset-0 z-10 h-full w-full transition-all duration-300 hover:flex hover:bg-black/70">
                  <span className="flex w-full items-center justify-center text-transparent hover:inset-0 hover:rounded-19xl hover:text-White-20 ">
                    See Details
                  </span>
                </div>
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col p-5">
                <p className="text-black-100 text-lg font-medium md:text-7xl">
                  {data.title}
                </p>
                <p className="pt-2 text-[12px] text-Black-60 md:text-2xl">
                  {data.type}
                </p>
                <p className="pt-3 text-xs font-semibold text-Primary-100 md:pt-4 md:text-5xl">
                  {data.price}
                </p>
                <div className="mt-6 flex items-center border-t-[1px] border-Black-20 pt-5">
                  <span className="flex gap-1 pr-4 text-[10px] text-Secondary-80 md:pr-5 md:text-base">
                    <Room className="w-4 md:w-5" />
                    {data.room}
                  </span>

                  <span className="border-Black-[1px] flex gap-1 border-l-[1px] border-Black-20 px-4 text-[10px] text-Secondary-80 md:px-5 md:text-base">
                    <Floor className="w-4 md:w-5" />
                    {data.floor}
                  </span>
                  <span className="flex gap-1 border-l-[1px] border-Black-20 pl-4 text-[10px] text-Secondary-80 md:pl-5 md:text-base">
                    <span>
                      LB: {data.lb} M<sup>2</sup>
                    </span>
                    <span>
                      LT: {data.lt} M<sup>2</sup>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PropertyCard;
