const BlogSkeleton = () => {
  return (
    <div className="border bg-white shadow rounded-xl p-4 w-full mx-auto md:min-h-[200px] max-w-[600px]">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 p-2">
          {/* Title Skeleton */}
          <div className="h-3 bg-slate-400 rounded"></div>
          <div className="h-3 bg-slate-400 rounded w-[50%]"></div>

          {/* Content Skeleton */}
          <div className="pt-4 w-full flex">
            <div className="flex-1 py-1 space-y-2">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="h-2 bg-slate-400 rounded"></div>
              ))}
            </div>
            <div className="bg-slate-400 h-20 w-32 rounded-xl ml-4"></div>
          </div>

          {/* Footer Skeleton */}
          <div className="h-1 bg-slate-400 rounded w-[30%] pt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
