import PageTitle from "@/components/sheared/PageTitle";
import BlogSkeleton from "./BlogSkeleton"

export default function Loading() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:w-[65%] w-[90%] items-center">
        <PageTitle title="Wedding Blog" />
        <ul className="grid w-full grid-cols-1 gap-5">
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        </ul>
      </div>
    </div>
  );
}
