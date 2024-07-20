import PageTitle from "@/components/sheared/PageTitle";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const magicians_options_data = [
  {
    name: "Wedding Planners",
    linkUrl: "/wedding_magicians/india/kolkata/wedding_planners",
    image:
      "https://images.pexels.com/photos/7034449/pexels-photo-7034449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Photographers",
    linkUrl: "/wedding_magicians/india/kolkata/photographers",
    image:
      "https://images.pexels.com/photos/17057198/pexels-photo-17057198/free-photo-of-close-up-of-a-viewfinder-of-a-camera-photographing-bride-and-groom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Makeup Artists",
    linkUrl: "/wedding_magicians/india/kolkata/makeup_artists",
    image:
      "https://images.pexels.com/photos/5733000/pexels-photo-5733000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const metadata: Metadata = {
  title: "Wedding Venues - Dremable",
  description: `Find the best wedding venue near you`,
};

const WeddingMagicians = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-col md:w-[65%] w-[85%] items-center">
        <PageTitle title="Best Wedding Magicians" />
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
      <div className="h-[280px] w-[100] relative mb-4">
        <Image
          src={imageUrl}
          width={500}
          height={500}
          alt={name}
          className="rounded-xl overflow-hidden h-full w-full object-cover"
        />
      </div>
      {name}
    </Link>
  );
};
