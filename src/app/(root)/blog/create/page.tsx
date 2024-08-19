import PageTitle from "@/components/sheared/PageTitle";
import BlogForm from "@/components/sheared/BlogForm";
import "../blog.css";

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
