import { photographersData } from "@/components/Data";
import PageTitle from "@/components/sheared/PageTitle";
import MagiciansCard from "@/components/sheared/MagiciansCard";
import type { Metadata } from "next";
import PageBenefitOptions from "@/components/sheared/PageBenefitOptions";
import Title from "@/components/sheared/Title";
import {
  toDoPhotographer,
  findPhotographer,
  dreamPhotographer,
  FaqSectionData,
  Budget_Friendly,
  popular_searches_word_list,
  location_word_list,
  type_word_list,
} from "@/lib/pageData/wedding_magicians_kolkata_photographers";
import SubNavBar from "@/components/sheared/SubNavBar";
import FaqSection from "@/components/sheared/FaqSection";
import SeoKeyWords from "@/components/sheared/SeoKeyWords";

export const metadata: Metadata = {
  title: "25 Best Wedding Photographers in Kolkata near You",
  description: `Looking for Best Wedding Photographers in Kolkata? Dremable connects you with Kolkata's top Photographers expert in pre wedding & candid photography`,
};

const Photographers_SubNavBar = [
  {
    url: "/wedding_magicians/kolkata/photographers",
    title: "Kolkata",
  },
  {
    url: "/wedding_magicians/goa/photographers",
    title: "Goa",
  },
];

const Photographers = () => {
  return (
    <>
      <SubNavBar SubNavBarItemList={Photographers_SubNavBar} />
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col w-[90%] md:w-[75%] items-center">
          <PageTitle title="Best Wedding Photographers in Kolkata" />
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 md:gap-6">
            {photographersData.map((provider) => (
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
            Dremable: Find the Best Wedding Photographers Near You in Kolkata
          </Title>
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-4">
            Capture Timeless Memories with Your Perfect Wedding Photographer
          </div>
          Your wedding day is a once-in-a-lifetime event brimming with
          unforgettable moments. To preserve these precious memories, hiring the
          right wedding photographer is essential. With countless options
          available, finding the ideal photographer can be overwhelming. This
          comprehensive guide will assist you in discovering the best wedding
          photographers near you, specifically in Kolkata, to capture your
          special day flawlessly.
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Key Factors for Choosing the Perfect Kolkata Wedding Photographer
          </div>
          Before embarking on your search, consider these crucial factors to
          ensure you find a photographer aligned with your vision:
          <PageBenefitOptions benefits={findPhotographer} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Discover Top Wedding Photographers in Kolkata
          </div>
          Leverage these platforms to find exceptional wedding photographers in
          Kolkata:
          <PageBenefitOptions benefits={dreamPhotographer} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Tips for Select the Ideal Kolkata Wedding Photographer
          </div>
          <PageBenefitOptions benefits={toDoPhotographer} />
          <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">
            Kolkata Wedding Photographers: Budget-Friendly to Luxury Options
          </div>
          Kolkata offers a diverse range of wedding photographers to cater to
          different preferences and budgets:
          <PageBenefitOptions benefits={Budget_Friendly} />
          By following these guidelines and carefully considering your
          preferences, you&apos;ll find a wedding photographer in Kolkata who
          captures the essence of your special day. A skilled photographer not
          only documents your wedding but also creates timeless memories to
          cherish for a lifetime. <br />
          Start your search for the perfect Kolkata wedding photographer today
          and let your love story unfold through stunning images.
          <Title>
            Frequently Asked Questions (FAQs) about Kolkata&apos;s Wedding
            Photography
          </Title>
          <FaqSection list={FaqSectionData} />
          <h2 className="font-bold text-xl my-4">
            Latest Trends in Kolkata Bengali Wedding Photography: Capturing
            Moments in Style
          </h2>
          Kolkata&apos;s wedding scene is a vibrant tapestry of traditions and
          trends. Let&apos;s explore some of the latest photographic styles that
          are making waves in the city of joy.
          <h2 className="font-bold text-xl my-4">
            Pre-Wedding Shoots: A Romantic Prelude
          </h2>
          Modern Bengali couples are embracing pre-wedding shoots as a way to
          capture their love story before the big day. These photo sessions
          offer a chance to experiment with different themes, locations, and
          styles, creating a unique visual narrative. Whether it&apos;s a
          fairytale-themed shoot or a casual outing, pre-wedding photography has
          become an essential part of wedding planning.
          <h2 className="font-bold text-xl my-4">
            Drone Photography: A New Perspective
          </h2>
          With the rise of drone technology, Kolkata&apos;s wedding
          photographers are offering a fresh perspective on capturing the
          grandeur of Bengali weddings. Aerial shots provide stunning visuals of
          the venue, guests, and the couple, adding a dramatic element to the
          wedding album.
          <h2 className="font-bold text-xl my-4">
            Monochrome Magic: Timeless Elegance
          </h2>
          Black and white photography continues to be a popular choice for
          Bengali weddings. The classic charm of monochrome images adds a touch
          of sophistication and elegance to the wedding album. It highlights the
          emotions and details, creating a timeless and artistic look.
          <h2 className="font-bold text-xl my-4">
            Mobile Photography: Capturing Candid Moments
          </h2>
          Smartphones have revolutionized the way we capture memories. With
          advanced camera features, mobile photography has become a viable
          option for capturing candid moments and behind-the-scenes glimpses at
          the wedding festivities. It offers a more relaxed and intimate
          perspective compared to traditional DSLR photography.
          <div className="w-full md:flex">
            <SeoKeyWords
              title="Popular Searches"
              wordList={popular_searches_word_list}
            />
            <SeoKeyWords title="By Type " wordList={type_word_list} />
            <SeoKeyWords title="By Locality" wordList={location_word_list} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Photographers;
