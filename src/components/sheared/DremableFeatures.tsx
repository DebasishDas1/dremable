import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FeatureProps {
  text: string;
  url: string;
  sideLink: string;
  side: string;
}

const FeatureItem: FC<FeatureProps> = ({ text, url, sideLink, side }) => {
  return (
    <div className="h-[400px] relative md:my-4 rounded-lg overflow-hidden my-8">
      <Image
        src={url}
        alt="landing page"
        width={1500}
        height={1500}
        className="object-cover md:blur-3xl my-auto"
      />
      <div className="absolute inset-0 flex text-center">
        <Image
          src={url}
          alt="landing page"
          width={500}
          height={500}
          className="object-cover rounded-lg hidden md:flex"
        />
        <div className="bg-white/40 h-full flex items-center justify-center flex-col w-full">
          <div className="font-bold text-4xl md:text-5xl">{text}</div>
          <div className="mt-4">
            <Button size="lg" asChild className="button w-full sm:w-auto">
              <Link href={sideLink}>Explore now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DremableFeatures: FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-evenly text-4xl">
      <FeatureItem
        text="Wedding Planners"
        url="https://images.pexels.com/photos/3975586/pexels-photo-3975586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        sideLink="/wedding_magicians/kolkata/wedding_planners"
        side="left"
      />
      <FeatureItem
        text="Photographers"
        url="https://images.pexels.com/photos/17057198/pexels-photo-17057198/free-photo-of-close-up-of-a-viewfinder-of-a-camera-photographing-bride-and-groom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        sideLink="/wedding_magicians/kolkata/photographers"
        side="right"
      />
      <FeatureItem
        text="Makeup Artists"
        url="https://images.pexels.com/photos/5733000/pexels-photo-5733000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        sideLink="/wedding_magicians/kolkata/makeup_artists"
        side="left"
      />
    </div>
  );
};

export default DremableFeatures;
