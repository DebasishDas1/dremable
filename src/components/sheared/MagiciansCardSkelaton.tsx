const MagiciansCardSkelton = () => {
  return (
    <div className="border bg-white shadow rounded-xl p-4 w-full mx-auto md:min-h-[500px] max-w-[354px]">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 p-2">
          <div className="h-60 bg-slate-400 rounded"></div>
          <div className="h-6 bg-slate-400 rounded"></div>
          <div className="h-6 bg-slate-400 rounded"></div>
          <div className="flex-1 py-1 space-y-2 ">
            <div className="h-2 bg-slate-400 rounded"></div>
            <div className="h-2 bg-slate-400 rounded"></div>
            <div className="h-2 bg-slate-400 rounded"></div>
            <div className="h-2 bg-slate-400 rounded"></div>
          </div>
          <div className="flex justify-center">
            <div className="h-6 bg-slate-400 rounded w-[30%] pt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagiciansCardSkelton;
