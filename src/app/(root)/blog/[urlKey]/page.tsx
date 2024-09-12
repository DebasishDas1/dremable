import {
  getBlogByUrlKey,
  getRelatedBlogByCategory,
  getAllBlog,
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
import { notFound } from "next/navigation";
import BlogContent from "@/components/sheared/BlogContent";

interface BlogDetailsPageProps {
  params: { urlKey: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const blogs = await getAllBlog({
    query: "",
    category: "",
    page: 1,
    limit: 1000,
  });

  return blogs?.data.map(({ urlKey }: { urlKey: string }) => ({ urlKey }));
}

// Generate metadata for SEO purposes
export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const blogDetails = await getBlogByUrlKey(params.urlKey);

  if (!blogDetails) {
    return {};
  }

  const publishedAt = new Date(blogDetails.date).toISOString();
  const description = blogDetails.description?.substring(0, 150) + "...";

  return {
    title: blogDetails.title,
    description,
    openGraph: {
      title: blogDetails.title,
      description: blogDetails.description?.substring(0, 50) + "...",
      url: `https://www.dremable.com/${blogDetails.url}`,
      siteName: "Dremable",
      locale: "en_US",
      type: "article",
      images: [blogDetails.imageUrl],
      publishedTime: publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: blogDetails.title,
      description: blogDetails.description?.substring(0, 50) + "...",
      images: [blogDetails.imageUrl],
    },
  };
}

// Main blog details page component
const BlogDetailsPage = async ({
  params: { urlKey },
}: BlogDetailsPageProps) => {
  const blogDetails = await getBlogByUrlKey(urlKey);

  if (!blogDetails) {
    notFound(); // Redirect to the 404 page if blog not found
  }

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
        <div className="md:text-6xl md:p-10 text-3xl font-bold p-4 text-center w-full">
          {blogDetails.header}
        </div>

        <div className="h-[333px] md:h-[600px] w-[95%] relative mb-4 rounded-3xl overflow-hidden">
          <Image
            src={blogDetails.imageUrl}
            alt={blogDetails.title}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 780px) 70vw, 100vw"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 p-4 text-xs md:grid-cols-4">
          {/* Category */}
          <div className="rounded-full bg-green-500/10 px-4 py-2 text-green-700 flex items-center w-full md:w-auto">
            <Celebration className="mr-3" />
            {categoryDetails.name}
          </div>

          {/* Location */}
          <div className="rounded-full bg-blue-500/10 px-4 py-2 text-violate-500 flex items-center w-full md:w-auto">
            <Place className="mr-3" />
            {blogDetails.location}
          </div>

          {/* Date */}
          <div className="rounded-full bg-yellow-500/10 px-4 py-2 flex items-center w-full md:w-auto">
            <CalendarMonth className="mr-3" />
            {formatDateTime(blogDetails.date).dateOnly}
          </div>

          {/* URL or Phone */}
          {blogDetails.url ? (
            <Link
              href={blogDetails.url}
              className="rounded-full bg-orange-500/10 px-4 py-2 flex items-center text-orange-700 w-full md:w-auto"
            >
              <InsertLink className="mr-3" /> Check it out
            </Link>
          ) : (
            blogDetails.phone && (
              <div className="rounded-full bg-purple-500/10 text-purple-700 px-4 py-2 flex items-center w-full md:w-auto">
                <PhoneIphone className="mr-3" />
                {blogDetails.phone}
              </div>
            )
          )}
        </div>
      </div>
      <BlogContent content={blogDetails.content} />
      <div className="md:text-4xl text-2xl font-bold py-10 text-center">
        Related Blogs
      </div>
      <div className="md:w-[75%] w-[90%]">
        <BlogPostContainers
          data={relatedBlogs?.data}
          emptyTitle="No Blogs Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Blogs"
          limit={2}
          page={1}
          totalPages={relatedBlogs?.totalPages}
        />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
