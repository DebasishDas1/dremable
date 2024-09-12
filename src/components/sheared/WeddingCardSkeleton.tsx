const WeddingCardSkeleton = () => {
  return (
    <div className="bg-white rounded-3xl w-full p-1 md:min-h-[300px] max-w-[600px]">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 p-2">
          <div className=" bg-slate-400 h-52 w-full rounded-xl"></div>
          <div className="h-4 bg-slate-400 rounded"></div>
          <div className="h-4 bg-slate-400 rounded"></div>
          <div className="h-4 bg-slate-400 rounded"></div>
          <div className="h-4 bg-slate-400 rounded w-[60%] mx-auto"></div>
          <div className="h-6 bg-slate-400 rounded w-full pt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCardSkeleton;
