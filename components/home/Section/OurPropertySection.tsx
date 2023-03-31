import PropertyCard from "@/components/PropertyCard";
import SectionBody from "@/components/SectionBody";
import SectionTitle from "@/components/SectionTitle";
import usePropertyDataStore from "@/hooks/usePropertyData";

export function OurPropertySection() {
  const propertyData = usePropertyDataStore((state) => state.propertyData);
  return (
    <>
      <SectionTitle>Our Property</SectionTitle>
      <SectionBody>
        <PropertyCard propertyData={propertyData} />
      </SectionBody>
    </>
  );
}
