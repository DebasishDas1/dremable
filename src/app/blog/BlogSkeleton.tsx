const BlogSkeleton = () => {
  return (
    <div className="border bg-white shadow rounded-xl p-4 w-full mx-auto md:min-h-[200px] max-w-[600px]">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 p-2">
          <div className="h-3 bg-slate-400 rounded"></div>
          <div className="h-3 bg-slate-400 rounded w-[50%]"></div>
          <div className="pt-4 w-[100%] flex">
            <div className="flex-1 py-1 space-y-2 ">
              <div className="h-2 bg-slate-400 rounded"></div>
              <div className="h-2 bg-slate-400 rounded"></div>
              <div className="h-2 bg-slate-400 rounded"></div>
              <div className="h-2 bg-slate-400 rounded"></div>
            </div>
            <div className=" bg-slate-400 h-20 w-32 rounded-xl ml-4"></div>
          </div>
          <div className="h-1 bg-slate-400 rounded w-[30%] pt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
