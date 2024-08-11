import PageTitle from "@/components/sheared/PageTitle";
import BlogPostContainers from "@/components/sheared/BlogPostContainers";
import type { Metadata } from "next";
import { getAllBlog } from "@/actions/blog.action";
import Search from "@/components/sheared/Search";
import CategoryFilter from "@/components/sheared/CategoryFilter";

export const metadata: Metadata = {
  title: "Blogs - Dremable",
  description: "Blogs - Dremable",
};

export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const Blog = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const blogs = await getAllBlog({
    query: searchText,
    category,
    page: 1,
    limit: 50,
  });

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:w-[65%] w-[90%] items-center">
        <PageTitle title="Wedding Blog" />

        <div className="md:flex w-full">
          <Search />
          <CategoryFilter />
        </div>

        <BlogPostContainers
          data={blogs?.data}
          emptyTitle="No Blog Found"
          emptyStateSubtext="try searching for a different blog"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={blogs?.totalPages}
        />
      </div>
    </div>
  );
};

export default Blog;
