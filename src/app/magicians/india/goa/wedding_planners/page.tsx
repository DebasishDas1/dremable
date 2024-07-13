import { goaPlannerData } from "@/components/Data";
import PageTitle from "@/components/sheared/PageTitle";
import MagiciansCard from "@/components/sheared/MagiciansCard";
import PageBenefitOptions from "@/components/sheared/PageBenefitOptions";
import Title from "@/components/sheared/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Planners in Goa |Get Best Wedding Planner-Dremable",
  description:
    "Searching for the Best Wedding Planner in Goa ? Dremable connects you with top Marriage planners in Goa, making your dream wedding a reality.",
};

const weddingPlanners = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-col md:w-[65%] w-[85%] items-center">
        <PageTitle title="Wedding Planners in Goa" />
        <h1 className="hidden">Wedding Planners in Goa</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
          {goaPlannerData.map((provider) => (
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
      </div>
    </div>
  );
};

export default weddingPlanners;
