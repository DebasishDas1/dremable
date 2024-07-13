import { goaPhotographersData } from "@/components/Data";
import PageTitle from "@/components/sheared/PageTitle";
import MagiciansCard from "@/components/sheared/MagiciansCard";
import type { Metadata } from "next";
import PageBenefitOptions from "@/components/sheared/PageBenefitOptions";
import Title from "@/components/sheared/Title";

export const metadata: Metadata = {
  title: "Best Wedding Photographers in Goa near me - Dremable",
  description: `Looking for Best Wedding Photographers in Goa? Dremable connects you with Goa's top Photographers expert in pre wedding & candid photography`,
};

const Photographers = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-col md:w-[65%] w-[85%] items-center">
        <PageTitle title="Wedding Photographers in Goa" />
        <h1 className="hidden">Wedding Photographers in Goa</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
          {goaPhotographersData.map((provider) => (
            <MagiciansCard
              key={provider.name}
              name={provider.name}
              contact={provider.contact}
              address={provider.address}
              url={provider.url}
              rating={Number(provider.rating)}
              rawImageUrl={provider.image}
            />
          ))}
        </div>
        <Title>
          Dremable: Capture Timeless Memories with Your Perfect Wedding
          Photographer!
        </Title>
      </div>
    </div>
  );
};

export default Photographers;
