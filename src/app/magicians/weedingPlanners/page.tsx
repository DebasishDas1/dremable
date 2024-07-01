import { plannerData } from "@/components/Data";
import PageTitle from "@/components/sheared/PageTitle";
import MagiciansCard from "@/components/sheared/MagiciansCard";
import PageBnifitOptions from "@/components/sheared/PageBnifitOptions";
import Title from "@/components/sheared/Title";
import type { Metadata } from "next";
import { youAvoid, chooseDreamable, rightPlanner } from "./weedingPlannersData";

export const metadata: Metadata = {
  title: "Wedding Planners in Kolkata |Get Best Wedding Planner-Dremable",
  description:
    "Searching for the Best Wedding Planner in Kolkata ? Dremable connects you with top Marriage planners in Kolkata, making your dream wedding a reality.",
};

const weedingPlanners = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-col md:w-[65%] w-[85%] items-center">
        <PageTitle title="Wedding Planners in Kolkata" />
        <h1 className="hidden">Wedding Planners in Kolkata</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
          {plannerData.map((provider) => (
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
          Dremable : Dream Weddings Begin with Your Perfect Wedding Planners !
        </Title>
        Search for wedding planners in Kolkata or Bengali wedding planner in
        Kolkata and get overwhelmed? Dremable takes the stress out of finding
        the best wedding planner in Kolkata, turning your dream wedding into a
        reality.
        <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
          Why Choose Dremable ?
        </div>
        <PageBnifitOptions banifits={chooseDreamable} />
        <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
          Say &quot;I Do&quot; to the Right Planner
        </div>
        Wondering how to choose the best Marriage planner in Kolkata? We&apos;ve
        got you covered! Ask these crucial questions
        <PageBnifitOptions banifits={rightPlanner} />
        <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
          Mistakes a Marriage Planner Helps You Avoid
        </div>
        <PageBnifitOptions banifits={youAvoid} />
        <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
          Start Your Dream Today
        </div>
        Browse our directory of Kolkata&apos;s finest wedding planners and find
        your perfect match! With Dremable by your side, your Dream wedding
        unfolds flawlessly, allowing you to truly revel in the magic of your
        happily ever after.
      </div>
    </div>
  );
};

export default weedingPlanners;
