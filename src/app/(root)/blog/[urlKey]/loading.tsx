export default function Loading() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center h-full p-16">
        <div className="animate-pulse flex space-x-4 w-[90vw]">
          <div className="flex-1 space-y-4">
            <div className="h-10 bg-slate-400 rounded"></div>
            <div className="h-10 bg-slate-400 rounded"></div>
            <div className="h-10 bg-slate-400 rounded"></div>
            <div className="h-96 bg-slate-400 rounded"></div>
            <div className="h-3 bg-slate-400 rounded"></div>
            <div className="h-3 bg-slate-400 rounded"></div>
            <div className="h-3 bg-slate-400 rounded w-[50%]"></div>
            <div className="h-3 bg-slate-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
