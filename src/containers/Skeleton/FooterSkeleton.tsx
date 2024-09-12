const FooterSkeleton = () => {
  return (
    <footer className="wrapper text-stone-600  md:w-[75%] font-thin">
      {/* Placeholder for Footer text */}
      <div className="animate-pulse pb-4 space-y-4">
        <div className="h-3 bg-slate-400 rounded w-[80%]"></div>
        <div className="h-3 bg-slate-400 rounded w-[90%]"></div>
        <div className="h-3 bg-slate-400 rounded w-[70%]"></div>
        <div className="h-3 bg-slate-400 rounded w-[60%]"></div>
      </div>

      {/* Placeholder for Contact Us text */}
      <span className="animate-pulse h-5 bg-slate-400 rounded w-[30%] mb-2"></span>

      {/* Placeholder for social media icons */}
      <div className="flex pt-1 mb-1">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="h-10 w-10 bg-slate-400 rounded-full mx-1 animate-pulse"
          ></div>
        ))}
      </div>

      {/* Placeholder for Copyright */}
      <div className="h-3 bg-slate-400 rounded w-[50%] animate-pulse mt-2"></div>
    </footer>
  );
};

export default FooterSkeleton;
