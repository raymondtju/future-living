import SectionBody from "@/components/SectionBody";
import SectionTitle from "@/components/SectionTitle";
import { cloudinary } from "@/libs/cloudinary";
import Image from "next/image";

const ComfortableData = [
  {
    title: "Convenience Store",
    subtitle: "Convenience store make it easy for you to buy your daily needs",
    image: "comfortable1",
  },
  {
    title: "Strategic Location",
    subtitle:
      "Our location is highly strategic, close to highways and downtown",
    image: "comfortable2",
  },
  {
    title: "Hospital",
    subtitle:
      "Hospital with high technology that provides international services",
    image: "comfortable3",
  },
];

export function ComfortableSection() {
  return (
    <>
      <SectionTitle>Comfortable with simplicity</SectionTitle>
      <SectionBody>
        <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {ComfortableData.map((data, index) => (
            <div
              className="flex w-full max-w-[389px] flex-col justify-center text-center"
              key={index}
            >
              <Image
                src={cloudinary(data.image)}
                alt={data.title}
                className="mx-auto flex w-auto rounded-14xl object-cover"
                width={1000}
                height={1000}
              />
              <p className="text-black-100 pt-3 text-lg font-medium md:pt-5 md:text-7xl">
                {data.title}
              </p>
              <p className="pt-2 text-[12px] text-Black-60 md:text-2xl">
                {data.subtitle}
              </p>
            </div>
          ))}
        </div>
      </SectionBody>
    </>
  );
}
