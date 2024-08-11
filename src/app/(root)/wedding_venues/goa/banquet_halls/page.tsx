import MagiciansCard from "@/components/sheared/MagiciansCard";
import PageTitle from "@/components/sheared/PageTitle";
import type { Metadata } from "next";
import { goaBanquet } from "@/components/Data";
import Title from "@/components/sheared/Title";
import PageBenefitOptions from "@/components/sheared/PageBenefitOptions";
import SubNavBar from "@/components/sheared/SubNavBar";
import {
  host_a_wedding_in_goa,
  banquet_hall_in_goa,
  goa_banquet_pricing,
  goa_have_the_best_banquets,
  popular_banquets_in_goa,
  budget_banquet_halls_in_goa,
  FaqSectionData,
  booking_the_banquet_hall_in_goa,
} from "@/lib/pageData/wedding_venues_goa_banquet_halls";
import FaqSection from "@/components/sheared/FaqSection";

export const metadata: Metadata = {
  title:
    "Top 10 Banquet Halls in Goa | Best Affordable Wedding Venues -Reviews",
  description: `Planning a Goa wedding? Find the best banquet halls for your special day. We offer a wide range of options to suit every style and budget. Book now!`,
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
        <div className="flex flex-col w-[85%] md:w-[75%] items-center">
          <PageTitle title="Best wedding venues & Banquet Halls in Goa" />
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
            {goaBanquet.map((provider) => (
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
          <Title>Goa: Your Dream Wedding Destination</Title>
          Goa, with its pristine beaches, vibrant culture, and warm hospitality,
          has become a sought-after destination for weddings. The state&apos;s
          enchanting charm and diverse venues offer the perfect backdrop for
          creating unforgettable memories. Let&apos;s explore why Goa should be
          your top choice for your special day and how Dremable can help you
          find the perfect banquet hall to host your celebrations.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Why Should You Host a Wedding in Goa?
          </div>
          <PageBenefitOptions benefits={host_a_wedding_in_goa} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            How Can Dremable Help in Finding the Best Banquet Hall in Goa?
          </div>
          Dremable is your one-stop solution for planning your dream wedding in
          Goa. With a vast collection of banquet halls, we make it easy to find
          the perfect venue that matches your vision.
          <PageBenefitOptions benefits={banquet_hall_in_goa} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Can I Get the Best Deals on Goa Banquet Pricing?
          </div>
          Finding the best deals on banquet halls in Goa is possible with a
          little planning. Here are some tips:
          <PageBenefitOptions benefits={goa_banquet_pricing} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Which Localities in Goa Have the Best Banquets?
          </div>
          Goa offers a variety of stunning locations for your wedding. Some
          popular areas include:
          <PageBenefitOptions benefits={goa_have_the_best_banquets} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Which Are the Popular Banquets in Goa?
          </div>
          Goa boasts a wide range of popular banquet halls to suit different
          preferences. Some of the most sought-after venues include:
          <PageBenefitOptions benefits={popular_banquets_in_goa} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Which Are the Budget Banquet Halls in Goa?
          </div>
          While Goa is known for its luxurious options, it also offers
          affordable banquet halls for budget-conscious couples. You can find
          beautiful venues without breaking the bank by exploring:
          <PageBenefitOptions benefits={budget_banquet_halls_in_goa} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Frequently Asked Questions (FAQs)
          </div>
          <FaqSection list={FaqSectionData} />
          By choosing Goa as your wedding destination and utilizing
          Dremable&apos;s platform, you&apos;re well on your way to planning a
          memorable and stress-free wedding.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            How do Banquet halls charge in Goa?
          </div>
          Usually, banquet halls in Goa charge on a per-plate basis, which
          includes food, decor, and basic services. Some venues offer
          rental-only options, allowing you to bring in your own caterers and
          decorators.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            How soon should we book banquets for a wedding?
          </div>
          Booking your banquet hall 6-8 months in advance is recommended,
          especially during peak wedding seasons. Popular venues tend to get
          booked early.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            What things should you keep in mind and definitely do before booking
            the banquet hall in Goa?
          </div>
          <PageBenefitOptions benefits={booking_the_banquet_hall_in_goa} />
          By choosing Goa as your wedding destination and utilizing
          Dremable&apos;s platform, you&apos;re well on your way to planning a
          memorable and stress-free wedding.
        </div>
      </div>
    </>
  );
};

export default BanquetHalls;
