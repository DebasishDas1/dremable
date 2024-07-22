import MagiciansCard from "@/components/sheared/MagiciansCard";
import PageTitle from "@/components/sheared/PageTitle";
import type { Metadata } from "next";
import { wedding_resorts_data } from "@/components/Data";
import Title from "@/components/sheared/Title";
import PageBenefitOptions from "@/components/sheared/PageBenefitOptions";
import {
  elegance,
  beyondTheVenue,
  whyChooseDremable,
} from "@/lib/pageData/wedding_venues_kolkata_wedding_resorts";
import SubNavBar from "@/components/sheared/SubNavBar";

export const metadata: Metadata = {
  title:
    "Find the Best Wedding Resorts in Kolkata: Top Destination Wedding Venues Open Air Near You",
  description: `Are you looking for a dream wedding resort in Kolkata for a destination wedding? Dremable offers unique resorts, gardens & venues. Get Exclusive deals with expert advice & curated selections. Find your perfect venue today!
  `,
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
        <div className="flex flex-col w-[85%] items-center">
          <PageTitle title="Top Destination Wedding Venues Open air Near You" />
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
            {wedding_resorts_data.map((provider) => (
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
            Dremable: Unveil Your Kolkata Dream Wedding Under the Open Sky
          </Title>
          Imagine exchanging vows amidst the gentle breeze or celebrating under
          a canopy of stars. Dremable.com unlocks the magic of Kolkata&lsquo;s
          wedding resorts and open-air destinations, creating a wedding
          experience that&lsquo;s both breathtaking and unforgettable.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Embrace Nature&lsquo;s Elegance:
          </div>
          <PageBenefitOptions benefits={elegance} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Beyond the Venue: A Complete Wedding Experience
          </div>
          While the open-air setting takes center stage, Dremable ensures every
          detail is flawlessly executed. Our partnered resorts and open-air
          destinations offer:
          <PageBenefitOptions benefits={beyondTheVenue} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Why Choose Dremable for Your Kolkata Open-Air Wedding?
          </div>
          Dremable simplifies your wedding planning by offering:
          <PageBenefitOptions benefits={whyChooseDremable} />
          Start planning your dream Kolkata open-air wedding today! Browse
          through our exquisite collection of resorts and open-air destinations
          on Dremable.com. Contact us to schedule a venue visit or connect with
          our wedding planning experts.
          <br /> <br />
          Let Dremable weave a Kolkata wedding experience that celebrates
          nature&lsquo;s beauty and creates memories that will forever be
          cherished.
        </div>
      </div>
    </>
  );
};

export default WeddingResorts;
