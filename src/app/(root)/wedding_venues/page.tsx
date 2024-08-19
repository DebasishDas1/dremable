import PageTitle from "@/components/sheared/PageTitle";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import MagiciansCard from "@/components/sheared/MagiciansCard";
import { luxuryWeddingVenues, goaLuxuryWeddingVenues } from "@/components/Data";
import { Button } from "@/components/ui/button";

const magicians_options_data = [
  {
    name: "Banquet Halls",
    linkUrl: "/wedding_venues/kolkata/banquet_halls",
    image:
      "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Luxury wedding venues",
    linkUrl: "/wedding_venues/kolkata/luxury_wedding_venues",
    image:
      "https://images.pexels.com/photos/22735411/pexels-photo-22735411/free-photo-of-newlywed-couple-among-chairs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Wedding resorts",
    linkUrl: "/wedding_venues/kolkata/wedding_resorts",
    image:
      "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const metadata: Metadata = {
  title: "Wedding Venues - Dremable",
  description: `Find the best wedding venue near you`,
};

const WeddingVenues = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-col md:w-[65%] w-[85%] items-center">
        <PageTitle title="Find your wedding venue" />
        <span>
          Search through a vast selection of venues to find the place that
          perfectly matches your wedding vision.
        </span>
        <div className="text-2xl py-10">Venues by type</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10">
          {magicians_options_data.map((data) => (
            <VenueOptionsNav
              key={data.name}
              name={data.name}
              url={data.linkUrl}
              imageUrl={data.image}
            />
          ))}
        </div>
        <div className="text-2xl py-10">Venues in Kolkata</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6 mb-6">
          {luxuryWeddingVenues.slice(0, 3).map((provider) => (
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
        <Button size="lg" asChild className="button w-full sm:w-auto">
          <Link href={"/wedding_venues/kolkata/luxury_wedding_venues"}>
            Discover more venues in kolkata
          </Link>
        </Button>
        <div className="text-2xl py-10">Venues in Goa</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6 mb-6">
          {goaLuxuryWeddingVenues.slice(0, 3).map((provider) => (
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
        <Button size="lg" asChild className="button w-full sm:w-auto">
          <Link href={"/wedding_venues/goa/luxury_wedding_venues"}>
            Discover more venues in Goa
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default WeddingVenues;

type VenueOptionsNavProp = {
  name: string;
  url: string;
  imageUrl: string;
};

const VenueOptionsNav = ({ name, url, imageUrl }: VenueOptionsNavProp) => {
  return (
    <Link className="py-2 text-3xl font-bold" href={url}>
      <div className="h-[280px] w-[100] relative mb-4 rounded-3xl overflow-hidden ">
        <Image
          src={imageUrl}
          fill
          alt={name}
          className="object-cover"
          sizes="(min-width: 1040px) calc(21.63vw - 26px), (min-width: 780px) 65vw, 85vw"
        />
      </div>
      {name}
    </Link>
  );
};
