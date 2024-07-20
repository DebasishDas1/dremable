import { photographersData } from "@/components/Data";
import PageTitle from "@/components/sheared/PageTitle";
import MagiciansCard from "@/components/sheared/MagiciansCard";
import type { Metadata } from "next";
import PageBenefitOptions from "@/components/sheared/PageBenefitOptions";
import Title from "@/components/sheared/Title";
import {
  toDoPhotographer,
  findPhotographer,
  dreamPhotographer,
} from "./photographersData";
import SubNavBar from "@/components/sheared/SubNavBar";

export const metadata: Metadata = {
  title: "Best Wedding Photographers in Kolkata near me - Dremable",
  description: `Looking for Best Wedding Photographers in Kolkata? Dremable connects you with Kolkata's top Photographers expert in pre wedding & candid photography`,
};

const Photographers_SubNavBar = [
  {
    url: "/wedding_magicians/kolkata/photographers",
    title: "Kolkata",
  },
  {
    url: "/wedding_magicians/goa/photographers",
    title: "Goa",
  },
];

const Photographers = () => {
  return (
    <>
      <SubNavBar SubNavBarItemList={Photographers_SubNavBar} />
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col w-[85%] items-center">
          <PageTitle title="Wedding Photographers in Kolkata" />
          <h1 className="hidden">Wedding Photographers in Kolkata</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
            {photographersData.map((provider) => (
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
          Looking for best wedding photographers near you to capture the magic
          of your Dream wedding? Your search ends here! Dremable connects you
          with Kolkata&apos;s best wedding photographers, specializing in
          various styles, including Bengali wedding photography.
          <br />
          <br />
          Find your ideal match, discover breathtaking portfolios, and book with
          ease – from stunning portraits to candid moments, we ensure your story
          unfolds beautifully.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            How to Find Your Perfect Wedding Photographer
          </div>
          <PageBenefitOptions benefits={findPhotographer} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Dremable Makes Finding Your Dream Photographer Easier
          </div>
          <PageBenefitOptions benefits={dreamPhotographer} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Before You Say &quot;I Do&quot; to a Photographer
          </div>
          <PageBenefitOptions benefits={toDoPhotographer} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Start Your Dream Today
          </div>
          Browse our directory of Kolkata&apos;s most talented wedding
          photographers and find your perfect match! With Dremable by your side,
          you can focus on cherishing every moment while they capture timeless
          memories that will last a lifetime
        </div>
      </div>
    </>
  );
};

export default Photographers;
