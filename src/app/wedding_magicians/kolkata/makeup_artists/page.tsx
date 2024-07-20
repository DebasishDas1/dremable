import { artistsData } from "@/components/Data";
import PageTitle from "@/components/sheared/PageTitle";
import MagiciansCard from "@/components/sheared/MagiciansCard";
import type { Metadata } from "next";
import PageBenefitOptions from "@/components/sheared/PageBenefitOptions";
import Title from "@/components/sheared/Title";
import {
  choseDremable,
  makeupArtist,
  artistEasier,
  iDoArtist,
  collaboration,
} from "./makeupArtistsData";
import SubNavBar from "@/components/sheared/SubNavBar";

export const metadata: Metadata = {
  title: "Bridal Makeup Artist in Kolkata |Best Makeup near me-Dremable",
  description: `Dream of picture-perfect Wedding glow? Dremable connects you with Kolkata's best bridal makeup artists  Discover best makeup artists with top Ratings`,
};

const makeupArtists_SubNavBar = [
  {
    url: "/wedding_magicians/kolkata/makeup_artists",
    title: "Kolkata",
  },
  {
    url: "/wedding_magicians/goa/makeup_artists",
    title: "Goa",
  },
];

const makeupArtists = () => {
  return (
    <>
      <SubNavBar SubNavBarItemList={makeupArtists_SubNavBar} />
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col w-[85%] items-center">
          <PageTitle title="Bridal makeup artists in kolkata" />
          <h1 className="hidden">Bridal makeup artists in kolkata</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
            {artistsData.map((provider) => (
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
            Dremable: Radiate Confidence on Your Wedding Day with Your Perfect
            Bridal Makeup Artist in Kolkata
          </Title>
          Wedding is a moment you&apos;ll cherish forever, and flawless makeup
          that enhances your natural beauty plays a crucial role in capturing
          that feeling. At Dremable, we connect you with Kolkata&apos;s best
          bridal makeup artists, ensuring you radiate confidence and glow on
          your special day. From traditional Bengali wedding styles to modern
          glamour, find your perfect match and experience artistry that reflects
          your unique vision.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Why Choose Dremable
          </div>
          <PageBenefitOptions benefits={choseDremable} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Finding Your Perfect Kolkata Bridal Makeup Artist
          </div>
          <PageBenefitOptions benefits={makeupArtist} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Dremable Makes Finding Your Dream Makeup Artist Easier
          </div>
          <PageBenefitOptions benefits={artistEasier} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Before You Say &quot;I Do&quot; to a Makeup Artist
          </div>
          <PageBenefitOptions benefits={iDoArtist} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Tips for a Successful Collaboration
          </div>
          <PageBenefitOptions benefits={collaboration} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Start Your Dream Today
          </div>
          Browse our directory of Kolkata&apos;s most talented bridal makeup
          artists and find your perfect match! With Dremable by your side, you
          can step into your wedding day feeling confident, radiant, and
          undeniably beautiful. Remember, your makeup should tell your story –
          let Dremable help you write it on your canvas of beauty
        </div>
      </div>
    </>
  );
};

export default makeupArtists;
