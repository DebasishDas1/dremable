import { getBlogByUrlKey } from "@/actions/blog.action";
import PageTitle from "@/components/sheared/PageTitle";
import BlogForm from "@/components/sheared/BlogForm";
import "../../blog.css";

type UpdateBlogProps = {
  params: { urlKey: string };
};

const UpdateBlog = async ({ params }: UpdateBlogProps) => {
  const blogDetails = await getBlogByUrlKey(params.urlKey);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-[90%] items-center">
        <PageTitle title="Update Blog" />
        <BlogForm type="Update" oldBlog={blogDetails} />
      </div>
    </div>
  );
};

export default UpdateBlog;
