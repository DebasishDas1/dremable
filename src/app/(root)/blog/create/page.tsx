import type { Metadata } from "next";
import PageTitle from "@/components/sheared/PageTitle";
import BlogForm from "@/components/sheared/BlogForm";
import "../blog.css";

export const metadata: Metadata = {
  title: "Create blog",
  description: "Create blog - Dremable",
  robots: {
    index: false,
    follow: true,
  },
};

const CreateBlog = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-[90%] items-center">
        <PageTitle title="Create Wedding Blog" />
        <BlogForm type="Create" />
      </div>
    </div>
  );
};

export default CreateBlog;
