/* eslint-disable @next/next/no-img-element */
import { Floor, Room } from "@/components/Icons";

const PropertyData = [
  {
    title: "Home Living Residence",
    type: "Private Cluster - Lily",
    price: "Rp. 1,750 Million",
    image: "/assets/images/Foto.png",
    room: "2+1",
    floor: 2,
    lb: 198,
    lt: 201,
  },
  {
    title: "Home Living Residence",
    type: "Private Cluster - Sakura",
    price: "Rp. 2,850 Million",
    image: "/assets/images/unsplash_4ojhpgKpS68.png",
    room: "4+1",
    floor: 2,
    lb: 201,
    lt: 208,
  },
  {
    title: "Home Living Residence",
    type: "Private Cluster - Dandelions",
    price: "Rp. 3,950 Million",
    image: "/assets/images/Front-1.png",
    room: "3+1",
    floor: 2,
    lb: 208,
    lt: 220,
  },
];

export function OurPropertySection() {
  return (
    <>
      <h2 className="section-title text-center font-semibold text-Secondary-100">
        Our Property
      </h2>
      <div className="mt-10 flex justify-center md:mt-[60px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PropertyData.map((data, index) => (
            <div
              className="overflow-hidden rounded-14xl bg-White-20"
              key={index}
              style={{
                boxShadow: "1px 1px 12px 0px rgba(80,52,228,0.12)",
              }}
            >
              <div className="max-w-[389px] overflow-hidden rounded-t-14xl">
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-[193px] w-full object-cover md:h-[255px]"
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
          ))}
        </div>
      </div>
    </>
  );
}
