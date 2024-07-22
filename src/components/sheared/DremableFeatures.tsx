import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Title from "@/components/sheared/Title";
import { getAllBlog } from "@/actions/blog.action";
import BlogPostContainers from "@/components/sheared/BlogPostContainers";
import { Suspense } from "react";

interface FeatureProps {
  title: string;
  subtitle: string;
  link: string;
  imageUrl: string;
  gradientFrom: string;
  gradientTo: string;
  reverse: boolean;
}

const Feature = ({
  title,
  subtitle,
  link,
  imageUrl,
  gradientFrom,
  gradientTo,
  reverse,
}: FeatureProps) => (
  <div
    className={`relative text-center font-bold md:flex w-full flex-1 my-10 md:bg-transparent bg-white rounded-3xl shadow-2xl md:shadow-none ${
      reverse ? "flex-row-reverse" : ""
    }`}
  >
    <div className="flex-1 flex justify-center items-center flex-col p-4">
      <div
        className={`py-3 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-transparent bg-clip-text md:text-6xl text-4xl`}
      >
        {title}
      </div>
      <div>{subtitle}</div>
      <Button className="mt-3">
        <Link href={link}>Explore now</Link>
      </Button>
    </div>
    <Image
      src={imageUrl}
      width={1000}
      height={1000}
      alt={title}
      className="rounded-3xl overflow-hidden h-[500px] w-full object-cover flex-1"
    />
  </div>
);

const DremableFeatures = async () => {
  const vendor = [
    {
      title: "Wedding Planners",
      subtitle: "Organizing Made Simple",
      link: "/wedding_magicians/kolkata/wedding_planners",
      imageUrl:
        "https://images.pexels.com/photos/7034449/pexels-photo-7034449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gradientFrom: "from-emerald-500",
      gradientTo: "to-cyan-500",
    },
    {
      title: "Photographers",
      subtitle: "Creating memories with every click",
      link: "/wedding_magicians/kolkata/photographers",
      imageUrl:
        "https://images.pexels.com/photos/7322582/pexels-photo-7322582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gradientFrom: "from-red-300",
      gradientTo: "to-red-600",
    },
    {
      title: "Makeup Artists",
      subtitle: "Embrace the beauty within.",
      link: "/wedding_magicians/kolkata/makeup_artists",
      imageUrl:
        "https://images.pexels.com/photos/5733000/pexels-photo-5733000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      gradientFrom: "from-amber-500",
      gradientTo: "to-amber-900",
    },
  ];

  const venue = [
    {
      title: "Banquet Halls",
      subtitle: "Finding banquet halls has never been this easy.",
      link: "/wedding_venues/kolkata/banquet_halls",
      imageUrl:
        "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gradientFrom: "from-amber-600",
      gradientTo: "to-yellow-500",
    },
    {
      title: "Luxury wedding venues",
      subtitle: "Most popular Luxury venues.",
      link: "/wedding_venues/kolkata/luxury_wedding_venues",
      imageUrl:
        "https://images.pexels.com/photos/22735411/pexels-photo-22735411/free-photo-of-newlywed-couple-among-chairs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gradientFrom: "from-amber-500",
      gradientTo: "to-pink-500",
    },
    {
      title: "Wedding resorts",
      subtitle: "The collection of best resorts.",
      link: "/wedding_venues/kolkata/wedding_resorts",
      imageUrl:
        "https://images.pexels.com/photos/5993374/pexels-photo-5993374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gradientFrom: "from-teal-400",
      gradientTo: "to-yellow-800",
    },
  ];

  const blogs = await getAllBlog({
    query: "",
    category: "",
    page: 1,
    limit: 2,
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="text-center w-full">
        <Title>Popular vendor Searches</Title>
        {vendor.map((feature, index) => (
          <Feature key={index} {...feature} reverse={index % 2 !== 0} />
        ))}
        <Title>Popular Venue Searches</Title>
        {venue.map((feature, index) => (
          <Feature key={index} {...feature} reverse={index % 2 === 0} />
        ))}
        <Title>Latest Blogs</Title>
        <BlogPostContainers
          data={blogs?.data}
          emptyTitle="No Blog Found"
          emptyStateSubtext="try searching for a different blog"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={blogs?.totalPages}
        />
      </div>
    </Suspense>
  );
};

export default DremableFeatures;
