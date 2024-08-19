import { goaPlannerData } from "@/components/Data";
import PageTitle from "@/components/sheared/PageTitle";
import MagiciansCard from "@/components/sheared/MagiciansCard";
import PageBenefitOptions from "@/components/sheared/PageBenefitOptions";
import Title from "@/components/sheared/Title";
import type { Metadata } from "next";
import SubNavBar from "@/components/sheared/SubNavBar";
import {
  hire_wedding_planner,
  destination_wedding,
  FaqSectionData,
  popular_searches_word_list,
  location_word_list,
  type_word_list,
} from "@/lib/pageData/wedding_magicians_goa_wedding_planners";
import FaqSection from "@/components/sheared/FaqSection";
import SeoKeyWords from "@/components/sheared/SeoKeyWords";

export const metadata: Metadata = {
  title: "Get 20 Best Destination Wedding Planners In Goa for You - Dremable",
  description:
    "Plan your dream Destination wedding in Goa with Dremable! Find top wedding planners in Goa. Stress-free One Stop planning for an unforgettable wedding awaits.",
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
        <div className="flex flex-col w-[90%] md:w-[75%] items-center">
          <PageTitle title="Wedding Planners in Goa" />
          <h1 className="hidden">Wedding Planners in Goa</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 md:gap-6">
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
          <Title>Best Wedding Planners in Goa: Your Dream Wedding Awaits</Title>
          Goa, with its pristine beaches, vibrant culture, and luxurious
          resorts, is a dream destination for couples seeking a magical wedding.
          However, planning a destination wedding can be overwhelming. This is
          where a professional wedding planner comes in. Let&apos;s explore why
          you need one and how to find the perfect planner for your Goa wedding.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Why Do You Need to Hire a Wedding Planner?
          </div>
          <PageBenefitOptions benefits={hire_wedding_planner} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            How Much Does a Wedding Planner Cost for a Goa Destination Wedding?
          </div>
          The cost of a wedding planner in Goa varies depending on the services
          included, the scale of the wedding, and the planner&apos;s experience.
          Generally, you can expect to pay anywhere from 10% to 20% of your
          total wedding budget. However, it&apos;s essential to discuss pricing
          and packages with different planners to find the best fit for your
          needs.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            What to Keep in Mind Before Hiring a Wedding Planner for a Goa
            Destination Wedding?
          </div>
          <PageBenefitOptions benefits={destination_wedding} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            FAQs Related to Goa Destination Wedding Planning
          </div>
          <FaqSection list={FaqSectionData} />
          <div className="w-full md:flex">
            <SeoKeyWords
              title="Popular Searches"
              wordList={popular_searches_word_list}
            />
            <SeoKeyWords title="By Type " wordList={type_word_list} />
            <SeoKeyWords title="By Locality" wordList={location_word_list} />
          </div>
        </div>
      </div>
    </>
  );
};

export default weddingPlanners;
