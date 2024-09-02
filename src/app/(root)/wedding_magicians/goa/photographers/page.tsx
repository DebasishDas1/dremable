import { goaPhotographersData } from "@/components/Data";
import PageTitle from "@/components/sheared/PageTitle";
import MagiciansCard from "@/components/sheared/MagiciansCard";
import type { Metadata } from "next";
import PageBenefitOptions from "@/components/sheared/PageBenefitOptions";
import Title from "@/components/sheared/Title";
import SubNavBar from "@/components/sheared/SubNavBar";
import {
  goa_wedding_photographer,
  FaqSectionData,
  popular_searches_word_list,
  location_word_list,
  type_word_list,
} from "@/lib/pageData/wedding_magicians_goa_photographers";
import FaqSection from "@/components/sheared/FaqSection";
import SeoKeyWords from "@/components/sheared/SeoKeyWords";

export const metadata: Metadata = {
  title: "Top 20 Destination Wedding Photographers in Goa",
  description: `Capture memories that last a lifetime! Find Goa's top destination wedding photographers on Dremable. Stunning beach weddings, vibrant celebrations`,
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
        <div className="flex flex-col w-[90%] md:w-[75%] items-center">
          <PageTitle title="Wedding Photographers in Goa" />
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 md:gap-6">
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
            Goa&apos;s Golden Moments: Capture Your Love Story with the Best
            Photographers
          </Title>
          Goa, a tropical paradise renowned for its sun-kissed beaches, vibrant
          culture, and luxurious resorts, is the epitome of romance. As you
          embark on this magical journey to tie the knot, choosing the right
          photographer becomes paramount. Your wedding day is a
          once-in-a-lifetime event, and capturing its essence requires a skilled
          artist with an eye for detail.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Why a Goa-Based Photographer is Your Perfect Match
          </div>
          Goa&apos;s unique charm demands a photographer who intimately
          understands its landscape, light, and atmosphere. Local photographers
          possess an unparalleled knowledge of hidden gems, ideal shooting
          locations, and the best times of day to capture breathtaking shots.
          With their deep-rooted connection to Goa, they effortlessly blend your
          love story with the destination&apos;s allure, creating timeless
          images that reflect the spirit of your special day.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Finding Your Perfect Photographer with Dremable
          </div>
          Searching for the perfect wedding photographer can be overwhelming,
          but Dremable simplifies the process. Our platform connects you with a
          curated selection of talented Goa-based photographers who specialize
          in capturing the magic of destination weddings. With Dremable, you can
          easily compare portfolios, read reviews, and book your dream
          photographer with just a few clicks.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            What to Look for in a Goa Wedding Photographer
          </div>
          <PageBenefitOptions benefits={goa_wedding_photographer} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            FAQs About Goa Wedding Photography
          </div>
          <FaqSection list={FaqSectionData} />
          Your wedding day is a masterpiece waiting to be captured. By choosing
          a talented Goa-based photographer through Dremable, you&apos;ll create
          a stunning visual narrative that will be cherished for generations to
          come.
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

export default Photographers;
