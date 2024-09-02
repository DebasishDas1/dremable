import {
  getBlogByUrlKey,
  getRelatedBlogByCategory,
} from "@/actions/blog.action";
import { getCategoryById } from "@/actions/category.action";
import Image from "next/image";
import {
  Place,
  Celebration,
  CalendarMonth,
  PhoneIphone,
  InsertLink,
} from "@mui/icons-material";
import { formatDateTime } from "@/lib/utils";
import Link from "next/link";
import type { Metadata } from "next";
import BlogPostContainers from "@/components/sheared/BlogPostContainers";
import Markdown from "react-markdown";
import "../blog.css";

interface BlogDetailsPageProps {
  params: { urlKey: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const blogDetails = await getBlogByUrlKey(params.urlKey);
  const publishedAt = new Date(blogDetails.date).toISOString();

  return {
    title: blogDetails.title,
    description: blogDetails.description.substring(0, 150) + "...",
    openGraph: {
      title: blogDetails.title,
      description: blogDetails.description.substring(0, 50) + "...",
      url: `https://www.dremable.com/${blogDetails.url}`,
      siteName: "Dremable",
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      images: blogDetails.imageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: blogDetails.title,
      description: blogDetails.description.substring(0, 50) + "...",
      images: blogDetails.imageUrl,
    },
  };
}

const BlogDetailsPage = async ({
  params: { urlKey },
}: BlogDetailsPageProps) => {
  const blogDetails = await getBlogByUrlKey(urlKey);
  const categoryDetails = await getCategoryById(blogDetails.category);

  const relatedBlogs = await getRelatedBlogByCategory({
    categoryID: blogDetails.category,
    blogID: blogDetails._id,
    limit: 3,
    page: 1,
  });

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:w-[80%] w-full items-center">
        <div className="md:text-6xl md:p-10 text-3xl font-bold p-4 text-center md:w-[85%]">
          {blogDetails.header}
        </div>
        <div className="h-[333px] md:h-[600px] w-[95%] relative mb-4 rounded-3xl overflow-hidden ">
          <Image
            src={blogDetails.imageUrl}
            alt={blogDetails.title}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 780px) 70vw, 100vw"
          />
        </div>

        <div className="flex gap-3 p-2 text-xs">
          <p className="rounded-full bg-green-500/10 px-4 py-2 text-green-700 flex items-center">
            <Celebration className="mr-3" />
            {categoryDetails.name}
          </p>
          <p className="rounded-full bg-blue-500/10 px-4 py-2 text-violate-500 flex items-center">
            <Place className="mr-3" />
            {blogDetails.location}
          </p>
        </div>

        <div className="flex gap-3 p-2 text-sm">
          <p className="rounded-full bg-yellow-500/10 px-4 py-2 flex items-center">
            <CalendarMonth className="mr-3" />
            {formatDateTime(blogDetails.date).dateOnly}
          </p>
          {blogDetails.url && (
            <Link
              href={blogDetails.url}
              className="rounded-full bg-orange-500/10 px-4 py-2 flex items-center text-orange-700"
            >
              <InsertLink className="mr-3" /> Check it out
            </Link>
          )}
          {blogDetails.phone && (
            <p className="rounded-full bg-purple-500/10 text-purple-700 px-4 py-2 flex items-center">
              <PhoneIphone className="mr-3" />
              {blogDetails.phone}
            </p>
          )}
        </div>
      </div>

      <div className="blogContent">
        <div className="w-[93%] flex items-center flex-col text-center text-clip">
          {/* <div dangerouslySetInnerHTML={{ __html: blogDetails.content }} /> */}
          <Markdown>{blogDetails.content}</Markdown>
        </div>
      </div>

      <div className="md:text-4xl text-2xl font-bold py-10 text-center">
        Related Blogs
      </div>
      <div className="md:w-[75%] w-[90%]">
        <BlogPostContainers
          data={relatedBlogs?.data}
          emptyTitle="No Blogs Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={2}
          page={1}
          totalPages={relatedBlogs?.totalPages}
        />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
