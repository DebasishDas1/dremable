import { plannerData } from "@/components/Data";
import PageTitle from "@/components/sheared/PageTitle";
import MagiciansCard from "@/components/sheared/MagiciansCard";
import PageBenefitOptions from "@/components/sheared/PageBenefitOptions";
import Title from "@/components/sheared/Title";
import type { Metadata } from "next";
import {
  youAvoid,
  chooseDremable,
  rightPlanner,
  FaqSectionData,
  Top_tier_luxury,
  CraftingDreamWeddings,
  Mistakes_to_Avoid,
} from "@/lib/pageData/wedding_magicians_kolkata_wedding_planners";
import SubNavBar from "@/components/sheared/SubNavBar";
import FaqSection from "@/components/sheared/FaqSection";

export const metadata: Metadata = {
  title: "25 Best Wedding Planners in Kolkata for You - Dremable",
  description:
    "Searching for the Best Wedding Planner in Kolkata ? Dremable connects you with top Marriage planners in Kolkata, making your dream wedding a reality.",
};

const weddingPlanners_SubNavBar = [
  {
    url: "/wedding_magicians/kolkata/wedding_planners",
    title: "Kolkata",
  },
  {
    url: "/wedding_magicians/goa/wedding_planners",
    title: "Goa",
  },
];

const weddingPlanners = () => {
  return (
    <>
      <SubNavBar SubNavBarItemList={weddingPlanners_SubNavBar} />
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col w-[85%] md:w-[75%] items-center">
          <PageTitle title="Best Wedding Planners in Kolkata" />
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
            Dremable: Find Best Wedding Planners in Kolkata-Your Dream Wedding
            Awaits
          </Title>
          Kolkata, a city renowned for its vibrant culture and warm hospitality,
          is also a hub for extravagant weddings. Amidst the hustle and bustle
          of city life, planning a wedding can be a daunting task. This is where
          expert wedding planners in Kolkata step in to transform your dream
          wedding into a reality.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Why Choose a Professional Wedding Planner in Kolkata?
          </div>
          Wedding planning is a complex endeavour, requiring meticulous
          attention to detail, exceptional organizational skills, and a creative
          flair. By hiring a professional wedding planner in Kolkata, you can
          alleviate the stress and enjoy a seamless planning process.
          <br />
          Great Wedding planners are like magicians who design your dream
          weddings and manage the complete A to Z for you. From ideation to
          execution, from budgeting to managing -they organise everything for
          you.
          <br />
          Moreover. Good Wedding Planner helps you to enjoy and celebrate a
          stress-free wedding event and make it memorable.
          <br />
          <br />
          Let’s Choose the perfect Bengali Marriage planner now from Dremable.
          <br />
          <br />
          Great Wedding planners are like magicians who design your dream
          weddings and manage the complete A to Z for you. From ideation to
          execution, from budgeting to managing -they organise everything for
          you. A Wedding Planner helps you to enjoy and celebrate a stress-free
          wedding event and make it memorable.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Key Advantages of Hiring a Kolkata Wedding Planner:
          </div>
          <PageBenefitOptions benefits={chooseDremable} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Why Choose Planners from Dremable?
          </div>
          Plan Your Dream Wedding with Kolkata’s Top Wedding Planners <br />
          Dremable is the fastest-growing Dream Wedding Platform which guides
          you to find and select the Best Wedding planner for you in Kolkata.
          From Wedding Planners to all top vendors, you will get everything at
          Dremable. <br />
          Let’s Choose the perfect Bengali Marriage planner now from Dremable.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Types of Wedding Planning Services in Kolkata
          </div>
          To cater to diverse client needs, Kolkata&apos;s wedding planners
          offer a range of services:
          <PageBenefitOptions benefits={rightPlanner} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Selecting the Perfect Kolkata Wedding Planner: A Comprehensive Guide
          </div>
          Choosing the right wedding planner is crucial for a stress-free and
          unforgettable wedding experience. Consider these factors:
          <PageBenefitOptions benefits={youAvoid} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Essential Qualities of a Top-Tier Luxury Kolkata Wedding Planner
          </div>
          <PageBenefitOptions benefits={Top_tier_luxury} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Crafting Dream Weddings in Kolkata with Top Luxury Wedding Planners
          </div>
          For couples seeking an opulent and unforgettable celebration, Kolkata
          offers a plethora of options for luxury weddings. A skilled luxury
          wedding planner can curate a bespoke experience, incorporating lavish
          elements such as:
          <PageBenefitOptions benefits={CraftingDreamWeddings} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Finding Your Dream Wedding Planner in Kolkata
          </div>
          To find the perfect wedding planner, consider using online platforms
          like Dremable which offers a wide range of options with detailed
          profiles, reviews, and contact information.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Common Wedding Planner Mistakes to Avoid
          </div>
          <PageBenefitOptions benefits={Mistakes_to_Avoid} />
          By following these guidelines and carefully selecting a wedding
          planner, you&apos;ll create an unforgettable wedding celebration in
          Kolkata.
          <Title>
            Frequently Asked Questions about Kolkata Wedding Planning
          </Title>
          <FaqSection list={FaqSectionData} />
        </div>
      </div>
    </>
  );
};

export default weddingPlanners;
