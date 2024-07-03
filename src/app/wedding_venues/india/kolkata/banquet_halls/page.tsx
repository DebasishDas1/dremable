import MagiciansCard from "@/components/sheared/MagiciansCard";
import PageTitle from "@/components/sheared/PageTitle";
import type { Metadata } from "next";
import { bamquet } from "@/components/Data";
import Title from "@/components/sheared/Title";
import PageBnifitOptions from "@/components/sheared/PageBnifitOptions";
import {
  collectionOfWeddingVenues,
  effortlessPlanning,
  dreamableAdvantage,
} from "./BanquetHallsData";

export const metadata: Metadata = {
  title:
    "Best Wedding Venues in Kolkata - Book Banquet Halls for marriage & reception",
  description: `Find your dream wedding Location in Kolkata! Explore top banquet halls & quality venues for an unforgettable reception. Get venue prices & more! `,
};

const BanquetHalls = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-col md:w-[65%] w-[85%] items-center">
        <PageTitle title="Best wedding vanues & Banquet Halls in kolkata" />
        <h1 className="hidden">Banquet Halls in kolkata</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
          {bamquet.map((provider) => (
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
          Kolkata Wedding Venues and Banquet Halls: Where Fairytales Unfold on
          Dremable
        </Title>
        The City of Joy pulsates with vibrant energy, the perfect backdrop for a
        wedding that reflects the kaleidoscope of emotions on your special day.
        Dremable.com, your Kolkata wedding venue concierge, unlocks a treasure
        trove of exquisite banquet halls, hotels, and unique event spaces to
        make your dream wedding a reality.
        <br /> <br />
        Kolkata, steeped in rich history and pulsating with contemporary
        vibrancy, offers a unique canvas for your wedding celebration. Whether
        you envision a grand affair echoing the opulence of Mughal emperors or
        an intimate ceremony under the gentle embrace of nature, Dremable.com
        curates a diverse collection of wedding venues to capture the essence of
        your love story, no matter your style or budget.
        <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
          Unveiling a Collection of Wedding Venues in Kolkata:
        </div>
        <PageBnifitOptions banifits={collectionOfWeddingVenues} />
        <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
          Effortless Planning for Your Dream Kolkata Wedding:
        </div>
        Dremable.com goes beyond showcasing stunning venues. We empower you to
        plan your dream wedding with ease and confidence:
        <PageBnifitOptions banifits={effortlessPlanning} />
        <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
          The Dremable Advantage: Transforming Dreams into Reality
        </div>
        Dremable.com sets itself apart by offering a multitude of benefits that go beyond simply showcasing wedding venues:
        <PageBnifitOptions banifits={dreamableAdvantage} />
      </div>
    </div>
  );
};

export default BanquetHalls;
