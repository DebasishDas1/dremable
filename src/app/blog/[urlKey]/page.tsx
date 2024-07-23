import PageTitle from "@/components/sheared/PageTitle";
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

interface BlogDetailsPageProps {
  params: { urlKey: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const blogDetails = await getBlogByUrlKey(params.urlKey);
  return {
    title: blogDetails.title,
    description: blogDetails.description.substring(0, 150) + "...",
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
      <div className="flex flex-col md:w-[70%] w-full items-center">
        <PageTitle title={blogDetails.header} />
        <div className="h-[300px] md:h-[600px] w-full relative mb-4 md:rounded-xl overflow-hidden ">
          <Image
            src={blogDetails.imageUrl}
            alt={blogDetails.title}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 780px) 70vw, 100vw"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-5">
          <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700 flex items-center">
            <Celebration className="mr-3" />
            {categoryDetails.name}
          </p>
          <p className="p-medium-16 rounded-full bg-blue-500/10 px-4 py-2.5 text-violate-500 lex items-center">
            <Place className="mr-3" />
            {blogDetails.location}
          </p>
          <p className="p-medium-16 rounded-full bg-yellow-500/10 px-4 py-2.5 lex items-center">
            <CalendarMonth className="mr-3" />
            {formatDateTime(blogDetails.date).dateOnly}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-5">
          {blogDetails.url && (
            <Link
              href={blogDetails.url}
              className="p-medium-16 rounded-full bg-orange-500/10 px-4 py-2.5 lex items-center text-orange-700"
            >
              <InsertLink /> Check it out
            </Link>
          )}
          {blogDetails.phone && (
            <p className="p-medium-16 rounded-full bg-purple-500/10 text-purple-700 px-4 py-2.5 lex items-center">
              <PhoneIphone className="mr-3" />
              {blogDetails.phone}
            </p>
          )}
        </div>
        <div className="m-4">
          <div dangerouslySetInnerHTML={{ __html: blogDetails.content }} />
        </div>
      </div>
      <div className="md:text-4xl text-2xl font-bold py-10 text-center">
        Related Blogs
      </div>
      <div className="w-[90%] items-center">
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
