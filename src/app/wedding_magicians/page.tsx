import PageTitle from "@/components/sheared/PageTitle";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { goaPlannerData, plannerData } from "@/components/Data";
import MagiciansCard from "@/components/sheared/MagiciansCard";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";

const magicians_options_data = [
  {
    name: "Wedding Planners",
    linkUrl: "/wedding_magicians/kolkata/wedding_planners",
    image:
      "https://images.pexels.com/photos/7034449/pexels-photo-7034449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Photographers",
    linkUrl: "/wedding_magicians/kolkata/photographers",
    image:
      "https://images.pexels.com/photos/17057198/pexels-photo-17057198/free-photo-of-close-up-of-a-viewfinder-of-a-camera-photographing-bride-and-groom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Makeup Artists",
    linkUrl: "/wedding_magicians/kolkata/makeup_artists",
    image:
      "https://images.pexels.com/photos/5733000/pexels-photo-5733000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const metadata: Metadata = {
  title: "Wedding Venues - Dremable",
  description: `Find the best wedding venue near you`,
};

const WeddingMagicians = () => {
  const { userId } = auth();

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-col md:w-[65%] w-[85%] items-center">
        <PageTitle title="Wedding Magicians" />
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10">
          {magicians_options_data.map((data) => (
            <OptionsNav
              key={data.name}
              name={data.name}
              url={data.linkUrl}
              imageUrl={data.image}
            />
          ))}
        </div>
        <div className="text-2xl py-10">Magicians in Kolkata</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6 mb-6">
          {plannerData.slice(0, 3).map((provider) => (
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
        <Button size="lg" asChild className="button w-full sm:w-auto">
          <Link href={"/wedding_magicians/kolkata/wedding_planners"}>
            Discover more magicians in Kolkata
          </Link>
        </Button>
        <div className="text-2xl py-10">Magicians in Goa</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6 mb-6">
          {goaPlannerData.slice(0, 3).map((provider) => (
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
        <Button size="lg" asChild className="button w-full sm:w-auto">
          <Link href={"/wedding_magicians/goa/wedding_planners"}>
            Discover more magicians in Goa
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default WeddingMagicians;

type VenueOptionsNavProp = {
  name: string;
  url: string;
  imageUrl: string;
};

const OptionsNav = ({ name, url, imageUrl }: VenueOptionsNavProp) => {
  return (
    <Link className="py-2 text-3xl font-bold" href={url}>
      <div className="h-[280px] w-[100] relative mb-4 rounded-xl overflow-hidden ">
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
