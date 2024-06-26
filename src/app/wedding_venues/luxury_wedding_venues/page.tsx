import MagiciansCard from "@/components/sheared/MagiciansCard";
import PageTitle from "@/components/sheared/PageTitle";
import type { Metadata } from "next";
import { luxuryWeddingVenues } from "@/components/Data";
import Title from "@/components/sheared/Title";
import PageBnifitOptions from "@/components/sheared/PageBnifitOptions";
import {
  immerseYourselves,
  magnified,
  chooseDreamable,
} from "./LuxuryWeddingVenuesData";

export const metadata: Metadata = {
  title:
    "Top Luxury Wedding Venues in Kolkata - 5-Star Destinations for Dream Celebration",
  description: `Celebrate your dream wedding in style! Explore Kolkata's top luxury, outdoor venues, 5-star hotels, & stunning VIP banquet halls. Find prices & plan your dream wedding.`,
};

const LuxuryWeddingVenues = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-col md:w-[65%] w-[85%] items-center">
        <PageTitle title="Luxury 5 star wedding venues in kolkata" />
        <h1 className="hidden">Luxury wedding venues in kolkata</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
          {luxuryWeddingVenues.map((provider) => (
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
          Dreamable: Where Luxury Meets Grandeur - Kolkata&lsquo;s Top Wedding Venues
          & Hotels
        </Title>
        Kolkata, the &lsquo;City of Joy,&lsquo; pulsates with a captivating charm, making it
        a dream location for a truly unforgettable wedding. Dreamable.com
        curates Kolkata&lsquo;s most luxurious wedding venues and 5-star hotels,
        transforming your vision into a reality that surpasses expectations.
        <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
          Immerse yourselves in opulence:
        </div>
        <PageBnifitOptions banifits={immerseYourselves} />
        <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
          5-Star Kolkata Hotels: Where Every Detail is Magnified
        </div>
        Kolkata&lsquo;s 5-star havens offer a complete wedding experience,
        encompassing luxurious accommodations, world-class cuisine, and
        unparalleled event management. Dreamable allows you to explore these
        havens and discover:
        <PageBnifitOptions banifits={magnified} />
        <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
          Why Choose Dreamable for Your Kolkata Wedding ?
        </div>
        Dreamable simplifies your wedding planning by offering:
        <PageBnifitOptions banifits={chooseDreamable} />
        <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
          Start planning your dream Kolkata wedding today!
        </div>
        Browse through our exquisite collection of venues and 5-star hotels on
        Dreamable.com. Contact us to schedule a venue visit or connect with our
        wedding planning experts.
        <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
          Let Dreamable weave a Kolkata wedding experience that embodies luxury
          and creates memories that last a lifetime.
        </div>
      </div>
    </div>
  );
};

export default LuxuryWeddingVenues;
