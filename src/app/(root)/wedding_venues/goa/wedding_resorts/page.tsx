import MagiciansCard from "@/components/sheared/MagiciansCard";
import PageTitle from "@/components/sheared/PageTitle";
import type { Metadata } from "next";
import { goaWeddingResorts } from "@/components/Data";
import Title from "@/components/sheared/Title";
import PageBenefitOptions from "@/components/sheared/PageBenefitOptions";
import SubNavBar from "@/components/sheared/SubNavBar";
import {
  resort_for_your_wedding,
  perfect_wedding_resort,
  resort_wedding_wonders,
  FaqSectionData,
  goa_wedding_resort,
} from "@/lib/pageData/wedding_venues_goa_wedding_resorts";
import FaqSection from "@/components/sheared/FaqSection";

export const metadata: Metadata = {
  title:
    "Top 10 Wedding Resorts in Goa | Luxury Venues For Destination Wedding ",
  description:
    "Create unforgettable wedding memories at Goa's best resorts. Explore stunning locations, world-class amenities, and personalized wedding planning.",
};

const WeddingResorts_SubNavBar = [
  {
    url: "/wedding_venues/kolkata/wedding_resorts",
    title: "Kolkata",
  },
  {
    url: "/wedding_venues/goa/wedding_resorts",
    title: "Goa",
  },
];

const WeddingResorts = () => {
  return (
    <>
      <SubNavBar SubNavBarItemList={WeddingResorts_SubNavBar} />
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col w-[85%] md:w-[75%] items-center">
          <PageTitle title="Best Destination Wedding Resorts in Goa - Dream Luxury Wedding Venues  for You" />
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
            {goaWeddingResorts.map((provider) => (
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
            Destination Wedding Resorts in Goa: Your Dream Wedding Awaits
          </Title>
          Goa, a tropical paradise, is not only renowned for its sun-kissed
          beaches and vibrant nightlife but also for its luxurious resorts.
          These idyllic retreats offer the perfect blend of relaxation,
          elegance, and natural beauty, making them ideal venues for
          unforgettable weddings. Let&apos;s explore the allure of Goa&apos;s
          wedding resorts and how Dremable can assist you in finding your dream
          destination.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Why Choose a Goa Resort for Your Wedding?
          </div>
          <PageBenefitOptions benefits={resort_for_your_wedding} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            How Dremable Can Help You Find the Perfect Wedding Resort
          </div>
          Dremable simplifies your search for the ideal Goa wedding resort. Our
          platform offers a curated selection of resorts, ensuring you find the
          perfect match for your dream wedding.
          <PageBenefitOptions benefits={perfect_wedding_resort} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Goa&apos;s Resort Wedding Wonders
          </div>
          Goa offers a plethora of stunning resorts to host your dream wedding.
          Let&apos;s explore some options:
          <PageBenefitOptions benefits={resort_wedding_wonders} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Frequently Asked Questions (FAQs)
          </div>
          <FaqSection list={FaqSectionData} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            What Things Should You Keep in Mind and Definitely Do Before Booking
            a Goa Wedding Resort?
          </div>
          Let&apos;s explore some options:
          <PageBenefitOptions benefits={goa_wedding_resort} />
          By choosing a Goa resort for your wedding, you&apos;re setting the
          stage for a magical and unforgettable celebration. Let Dremable be
          your partner in finding the perfect venue to bring your dream wedding
          to life.
        </div>
      </div>
    </>
  );
};

export default WeddingResorts;
