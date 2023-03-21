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
      <h2 className="text-center text-14xl font-semibold text-Secondary-100">
        Our Property
      </h2>
      <div className="mt-[60px]">
        <div className="grid grid-cols-3 gap-4">
          {PropertyData.map((data, index) => (
            <div
              className="rounded-14xl bg-White-20"
              key={index}
              style={{
                boxShadow: "1px 1px 12px 0px rgba(80,52,228,0.12)",
              }}
            >
              <div className="w-[389px] overflow-hidden rounded-t-14xl">
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-[255px] w-full object-cover"
                />
              </div>
              <div className="flex flex-col p-5">
                <span className="text-black-100 text-7xl font-medium">
                  {data.title}
                </span>
                <span className="pt-2 text-2xl text-Black-60">{data.type}</span>
                <span className="pt-4 text-5xl font-semibold text-Primary-100">
                  {data.price}
                </span>
                <div className="mt-6 flex items-center border-t-[1px] border-Black-20 pt-5">
                  <span className="flex gap-1 pr-5 text-Secondary-80">
                    <Room className="w-5" />
                    {data.room}
                  </span>

                  <span className="border-Black-[1px]0 flex gap-1 border-l-[1px] border-Black-20 px-5 text-Secondary-80">
                    <Floor className="w-5" />
                    {data.floor}
                  </span>
                  <span className="flex gap-1 border-l-[1px] border-Black-20 px-5 text-Secondary-80">
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
