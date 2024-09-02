import { goaArtistsData } from "@/components/Data";
import PageTitle from "@/components/sheared/PageTitle";
import MagiciansCard from "@/components/sheared/MagiciansCard";
import type { Metadata } from "next";
import PageBenefitOptions from "@/components/sheared/PageBenefitOptions";
import Title from "@/components/sheared/Title";
import SubNavBar from "@/components/sheared/SubNavBar";
import {
  makeup_artist_in_goa,
  goa_bridal_makeup_artist,
  FaqSectionData,
} from "@/lib/pageData/wedding_magicians_goa_makeup_artists";
import FaqSection from "@/components/sheared/FaqSection";

export const metadata: Metadata = {
  title: "20 Best Wedding Makeup Artists in Goa | Bridal Makeup for You",
  description: `Unveil your bridal glow with Goa's top-rated makeup artists! Dremable connects you with experts for flawless, long-lasting looks.`,
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
        <div className="flex flex-col w-[90%] md:w-[75%] items-center">
          <PageTitle title="Wedding Artists in Goa" />
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 md:gap-6">
            {goaArtistsData.map((provider) => (
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
            Top Bridal Makeup Artists in Goa: Radiate Your Inner Glow
          </Title>
          Goa, a paradise of sun, sand, and serenity, is the perfect backdrop
          for your dream wedding. To enhance your natural beauty on this special
          day, selecting the right bridal makeup artist is crucial. With the
          right expert, you can radiate confidence and elegance as you walk down
          the aisle.
          <Title>Why Hire a Professional Bridal Makeup Artist in Goa?</Title>
          <PageBenefitOptions benefits={makeup_artist_in_goa} />
          <Title>Finding Your Perfect Bridal Makeup Artist with Dremable</Title>
          Choosing the perfect makeup artist can be overwhelming, but Dremable
          simplifies the process. Our platform connects you with a curated
          selection of talented Goa-based makeup artists who specialize in
          bridal makeup. With Dremable, you can easily compare portfolios, read
          reviews, and book your dream makeup artist with just a few clicks.
          <Title>What to Look for in a Goa Bridal Makeup Artist</Title>
          <PageBenefitOptions benefits={goa_bridal_makeup_artist} />
          <Title>FAQs About Bridal Makeup in Goa</Title>
          <FaqSection list={FaqSectionData} />
          Finding the perfect bridal makeup artist in Goa is essential for
          creating a stunning look that complements your wedding day. With
          Dremable, you can easily find the ideal artist to enhance your natural
          beauty and make you feel confident on your special day.
        </div>
      </div>
    </>
  );
};

export default makeupArtists;
