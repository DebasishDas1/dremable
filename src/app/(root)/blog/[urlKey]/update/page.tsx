import { getBlogByUrlKey } from "@/actions/blog.action";
import PageTitle from "@/components/sheared/PageTitle";
import BlogForm from "@/components/sheared/BlogForm";

type UpdateBlogProps = {
  params: { urlKey: string };
};

const UpdateBlog = async ({ params }: UpdateBlogProps) => {
  const blogDetails = await getBlogByUrlKey(params.urlKey);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:w-[65%] w-[90%] items-center">
        <PageTitle title="Update Blog" />
        <h1 className="hidden">Update Blog</h1>
        <BlogForm type="Update" oldBlog={blogDetails} />
      </div>
    </div>
  );
};

export default UpdateBlog;
