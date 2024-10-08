"use client";

import Image from "next/image";
import { formatDateTime } from "@/lib/utils";
import Link from "next/link";

type BlogPostProps = {
  title: string;
  description: string | undefined;
  id: string;
  date: Date;
  image: string;
  hasOrderLink?: boolean;
  urlKey?: string;
};

const BlogPost = ({
  title,
  description,
  id,
  date,
  image,
  urlKey,
}: BlogPostProps) => {
  // Function to limit description to 100 words
  const limitDescription = (desc: string | undefined): string | undefined => {
    if (!desc) return undefined;
    const words = desc.split(" ");
    if (words.length > 60) {
      return words.slice(0, 60).join(" ") + "...";
    }
    return desc;
  };

  const limitedDescription = limitDescription(description);

  return (
    <div className="group relative flex flex-col md:min-h-[200px] max-w-[600px] overflow-hidden rounded-2xl bg-white shadow-xl">
      <Link
        href={`/blog/${urlKey}`}
        className="flex-center flex-grow bg-cover bg-center md:hidden h-[120px] relative "
        style={{ backgroundImage: `url(${image})` }}
        aria-label={title}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        {/* Content inside the Link */}
      </Link>

      <div className="p-4">
        <Link href={`/blog/${urlKey}`}>
          <h2 className="text-2xl font-semibold mb-2 ">{title}</h2>
        </Link>
        <div className="flex flex-row ">
          {limitedDescription && (
            <div className="text-sm my-2 mr-2 md:basis-3/4">
              <div dangerouslySetInnerHTML={{ __html: limitedDescription }} />
            </div>
          )}
          {image && (
            <div className="basis-1/4 md:flex items-center blur-sm hidden relative overflow-hidden ">
              <Image
                src={image}
                alt="image"
                fill
                className="object-cover"
                sizes="140px"
              />
            </div>
          )}
        </div>
        <h6 className="text-sm my-1 text-stone-500">
          {formatDateTime(date).dateOnly}
        </h6>
      </div>
    </div>
  );
};

export default BlogPost;
