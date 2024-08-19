import MagiciansCard from "@/components/sheared/MagiciansCard";
import PageTitle from "@/components/sheared/PageTitle";
import type { Metadata } from "next";
import { banquet } from "@/components/Data";
import Title from "@/components/sheared/Title";
import PageBenefitOptions from "@/components/sheared/PageBenefitOptions";
import {
  collectionOfWeddingVenues,
  effortlessPlanning,
  dremableAdvantage,
  popular_searches_word_list,
  by_vane_type_list,
  locality_word_list,
  space_preference_word_list,
} from "@/lib/pageData/wedding_venues_kolkata_banquet_halls";
import SubNavBar from "@/components/sheared/SubNavBar";
import SeoKeyWords from "@/components/sheared/SeoKeyWords";

export const metadata: Metadata = {
  title:
    "Best Wedding Venues in Kolkata - Book Banquet Halls for marriage & reception",
  description: `Find your dream wedding Location in Kolkata! Explore top banquet halls & quality venues for an unforgettable reception. Get venue prices & more! `,
};

const BanquetHalls_SubNavBar = [
  {
    url: "/wedding_venues/kolkata/banquet_halls",
    title: "Kolkata",
  },
  {
    url: "/wedding_venues/goa/banquet_halls",
    title: "Goa",
  },
];

const BanquetHalls = () => {
  return (
    <>
      <SubNavBar SubNavBarItemList={BanquetHalls_SubNavBar} />
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col w-[90%] md:w-[75%] items-center">
          <PageTitle title="Best wedding venues & Banquet Halls in kolkata" />
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 md:gap-6">
            {banquet.map((provider) => (
              <MagiciansCard
                key={provider.name}
                name={provider.name}
                contact={provider.contact}
                address={provider.address}
                rating={Number(provider.rating)}
                rawImageUrl={provider.image}
              />
            ))}
          </div>
          <Title>
            Kolkata Wedding Venues and Banquet Halls: Where Fairytales Unfold on
            Dremable
          </Title>
          The City of Joy pulsates with vibrant energy, the perfect backdrop for
          a wedding that reflects the kaleidoscope of emotions on your special
          day. Dremable.com, your Kolkata wedding venue concierge, unlocks a
          treasure trove of exquisite banquet halls, hotels, and unique event
          spaces to make your dream wedding a reality.
          <br /> <br />
          Kolkata, steeped in rich history and pulsating with contemporary
          vibrancy, offers a unique canvas for your wedding celebration. Whether
          you envision a grand affair echoing the opulence of Mughal emperors or
          an intimate ceremony under the gentle embrace of nature, Dremable.com
          curates a diverse collection of wedding venues to capture the essence
          of your love story, no matter your style or budget.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Unveiling a Collection of Wedding Venues in Kolkata:
          </div>
          <PageBenefitOptions benefits={collectionOfWeddingVenues} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Effortless Planning for Your Dream Kolkata Wedding:
          </div>
          Dremable.com goes beyond showcasing stunning venues. We empower you to
          plan your dream wedding with ease and confidence:
          <PageBenefitOptions benefits={effortlessPlanning} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            The Dremable Advantage: Transforming Dreams into Reality
          </div>
          Dremable.com sets itself apart by offering a multitude of benefits
          that go beyond simply showcasing wedding venues:
          <PageBenefitOptions benefits={dremableAdvantage} />
          <div className="w-full md:flex justify-evenly">
            <SeoKeyWords
              title="Popular Searches"
              wordList={popular_searches_word_list}
            />
            <SeoKeyWords title="By Venue Type" wordList={by_vane_type_list} />
          </div>
          <div className="w-full md:flex justify-evenly">
            <SeoKeyWords
              title="By Space Preference"
              wordList={space_preference_word_list}
            />
            <SeoKeyWords title="By Locality" wordList={locality_word_list} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BanquetHalls;
