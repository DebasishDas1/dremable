import MagiciansCard from "@/components/sheared/MagiciansCard";
import PageTitle from "@/components/sheared/PageTitle";
import type { Metadata } from "next";
import { goaLuxuryWeddingVenues } from "@/components/Data";
import Title from "@/components/sheared/Title";
import PageBenefitOptions from "@/components/sheared/PageBenefitOptions";
import SubNavBar from "@/components/sheared/SubNavBar";
import {
  hotel_for_your_goa_wedding,
  five_Star_Wedding_Venue,
  five_star_wedding_wonders,
  FaqSectionData,
} from "@/lib/pageData/wedding_venues_goa_luxury_wedding_venues";
import FaqSection from "@/components/sheared/FaqSection";
import { auth } from "@clerk/nextjs/server";

export const metadata: Metadata = {
  title:
    "5 Stars Hotels in Goa | Best Luxury Destination Wedding Venues For You",
  description: `Experience the ultimate luxury with a 5-star wedding in Goa. Choose from our stunning beachfront and opulent hotels. Personalized wedding planning and world-class amenities await.`,
};

const LuxuryWeddingVenues_SubNavBar = [
  {
    url: "/wedding_venues/kolkata/luxury_wedding_venues",
    title: "Kolkata",
  },
  {
    url: "/wedding_venues/goa/luxury_wedding_venues",
    title: "Goa",
  },
];

const LuxuryWeddingVenues = () => {
  const { userId } = auth();

  return (
    <>
      <SubNavBar SubNavBarItemList={LuxuryWeddingVenues_SubNavBar} />
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col w-[85%] md:w-[75%] items-center">
          <PageTitle title="Luxury 5 Star Hotels & Destination Wedding Venues In Goa" />
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
            {goaLuxuryWeddingVenues.map((provider) => (
              <MagiciansCard
                key={provider.name}
                name={provider.name}
                contact={provider.contact}
                address={provider.address}
                rating={Number(provider.rating)}
                rawImageUrl={provider.image}
                loggedIn={userId ? true : false}
              />
            ))}
          </div>
          <Title>
            Goa&apos;s Luxury Embrace: Unforgettable Destination Weddings in
            5-Star Hotels
          </Title>
          Goa, a tropical paradise, is not only renowned for its sun-kissed
          beaches and vibrant nightlife but also for its world-class luxury
          hotels. These opulent havens offer the perfect setting for couples
          seeking an extraordinary wedding experience. Let&apos;s delve into the
          allure of Goa&apos;s 5-star hotels for your special day and how
          Dremable can assist you in finding your dream wedding venue.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Why Choose a 5-Star Hotel for Your Goa Wedding?
          </div>
          <PageBenefitOptions benefits={hotel_for_your_goa_wedding} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            How Dremable Can Help You Find the Perfect 5-Star Wedding Venue
          </div>
          Dremable is your ultimate companion in finding the ideal 5-star hotel
          for your Goa wedding. Our platform offers a curated collection of
          luxury hotels, ensuring you have a plethora of options to choose from.
          <PageBenefitOptions benefits={five_Star_Wedding_Venue} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Unveil Goa&apos;s 5-Star Wedding Wonders
          </div>
          Goa boasts a collection of extraordinary 5-star hotels, each offering
          a unique experience.
          <PageBenefitOptions benefits={five_star_wedding_wonders} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Frequently Asked Questions (FAQs)
          </div>
          <FaqSection list={FaqSectionData} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            What Things Should You Keep in Mind and Definitely Do Before Booking
            a 5-Star Hotel in Goa?
          </div>
          <PageBenefitOptions benefits={five_star_wedding_wonders} />
          By selecting a 5-star hotel in Goa for your wedding, you&apos;re
          setting the stage for an unforgettable celebration. Let Dremable be
          your guide in finding the perfect venue to make your dream wedding a
          reality.
        </div>
      </div>
    </>
  );
};

export default LuxuryWeddingVenues;
