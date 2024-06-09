import BlogPost from "./BlogPost";
import { IBlog } from "@/lib/database/models/blog.model";

type BlogPostContainersProps = {
  data?: IBlog[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType?: "Events_Organized" | "My_Tickets" | "All_Events";
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
          <ul className="grid w-full grid-cols-1 gap-5">
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
        </div>
      ) : (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
};

export default BlogPostContainers;
