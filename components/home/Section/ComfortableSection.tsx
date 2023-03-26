/* eslint-disable @next/next/no-img-element */
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
      <h2 className="font-semibold text-center section-title text-Secondary-100">
        Comfortable with simplicity
      </h2>
      <div className="mt-10 flex justify-center md:mt-[60px]">
        <div className="grid items-start grid-cols-1 gap-7 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {ComfortableData.map((data, index) => (
            <div
              className="flex w-full max-w-[389px] flex-col justify-center text-center"
              key={index}
            >
              <img
                src={data.image}
                alt={data.title}
                className="flex object-cover w-auto mx-auto rounded-14xl"
              />
              <p className="pt-3 text-lg font-medium text-black-100 md:pt-5 md:text-7xl">
                {data.title}
              </p>
              <p className="pt-2 text-[12px] text-Black-60 md:text-2xl">
                {data.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
