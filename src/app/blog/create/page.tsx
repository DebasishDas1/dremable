import PageTitle from "@/components/sheared/PageTitle";
import BlogForm from "@/components/sheared/BlogForm";

const CreateBlog = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:w-[80%] w-[90%] items-center">
        <PageTitle title="Create Wedding Blog" />
        <h1 className="hidden">Create Wedding Blog</h1>
        <BlogForm type="Create" />
      </div>
    </div>
  );
};

export default CreateBlog;
