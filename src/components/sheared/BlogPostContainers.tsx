import BlogPost from "./BlogPost";
import { IBlog } from "@/models/blog.model";
import Pagination from "./Pagination";
import Image from "next/image";
import notFound from "../../../public/assets/Imagination-amico.png";

type BlogPostContainersProps = {
  data?: IBlog[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType?: "Events_Organized" | "My_Tickets" | "All_Blogs";
};

const BlogPostContainers = ({
  data = [],
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: BlogPostContainersProps) => {
  const hasData = data.length > 0;

  return (
    <>
      {hasData ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-8">
            {data.map((blog) => {
              const hasOrderLink = collectionType === "Events_Organized";
              return (
                <li key={blog._id} className="flex justify-center">
                  <BlogPost
                    title={blog.title}
                    description={blog.description}
                    id={blog._id}
                    date={blog.date}
                    image={blog.imageUrl}
                    hasOrderLink={hasOrderLink}
                    urlKey={blog.urlKey}
                  />
                </li>
              );
            })}
          </ul>
          {totalPages > 1 && (
            <Pagination
              urlParamName={urlParamName}
              page={page}
              totalPages={totalPages}
            />
          )}
        </div>
      ) : (
        <div className="flex-center wrapper min-h-[400px] w-full flex-col gap-3 rounded-3xl bg-white py-50 text-center mb-10">
          <Image
            src={notFound}
            alt="Error"
            style={{ height: "380px", width: "400px" }}
          />
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
};

export default BlogPostContainers;
