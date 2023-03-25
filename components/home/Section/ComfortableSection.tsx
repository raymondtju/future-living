import Image from "next/image";

const ComfortableData = [
  {
    title: "Convenience Store",
    subtitle: "Convenience store make it easy for you to buy your daily needs",
    image: "/assets/images/image 27.png",
  },
  {
    title: "Strategic Location",
    subtitle:
      "Our location is highly strategic, close to highways and downtown",
    image: "/assets/images/image 26.png",
  },
  {
    title: "Hospital",
    subtitle:
      "Hospital with high technology that provides international services",
    image: "/assets/images/image 22.png",
  },
];

export function ComfortableSection() {
  return (
    <>
      <h2 className="text-center text-14xl font-semibold text-Secondary-100">
        Comfortable with simplicity
      </h2>
      <div className="mt-[60px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ComfortableData.map((data, index) => (
            <div className="flex flex-col text-center" key={index}>
              <Image
                src={data.image}
                alt={data.title}
                className="rounded-14xl"
                width="389"
                height="266"
              />
              <span className="text-black-100 pt-5 text-7xl font-medium">
                {data.title}
              </span>
              <span className="pt-2 text-2xl text-Black-60">
                {data.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
