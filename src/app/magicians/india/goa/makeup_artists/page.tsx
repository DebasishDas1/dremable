import { goaArtistsData } from "@/components/Data";
import PageTitle from "@/components/sheared/PageTitle";
import MagiciansCard from "@/components/sheared/MagiciansCard";
import type { Metadata } from "next";
import PageBenefitOptions from "@/components/sheared/PageBenefitOptions";
import Title from "@/components/sheared/Title";

export const metadata: Metadata = {
  title: "Bridal Makeup Artist in Goa |Best Makeup near me-Dremable",
  description: `Dream of picture-perfect Wedding glow? Dremable connects you with Goa's best bridal makeup artists  Discover best makeup artists with top Ratings`,
};

const makeupArtists = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-col md:w-[65%] w-[85%] items-center">
        <PageTitle title="Bridal makeup artists in Goa" />
        <h1 className="hidden">Bridal makeup artists in Goa</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
          {goaArtistsData.map((provider) => (
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
          Dremable: Radiate Confidence on Your Wedding Day with Your Perfect
          Bridal Makeup Artist in Goa
        </Title>
      </div>
    </div>
  );
};

export default makeupArtists;
