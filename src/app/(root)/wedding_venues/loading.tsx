import PageTitle from "@/components/sheared/PageTitle";
import WeddingCardSkeleton from "@/components/sheared/WeddingCardSkeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:w-[65%] w-[90%] items-center">
        <PageTitle title="Wedding Venues" />
        <ul className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 md:gap-6">
          <WeddingCardSkeleton />
          <WeddingCardSkeleton />
          <WeddingCardSkeleton />
          <WeddingCardSkeleton />
          <WeddingCardSkeleton />
        </ul>
      </div>
    </div>
  );
}
