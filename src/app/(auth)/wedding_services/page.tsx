import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dremable - Your Dream Wedding starts from here",
  description:
    "Dream of a perfect wedding? Dremable makes it real! From wedding planners & photographers to makeup artists & vendors, find everything as you dream.",
};

const page = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image
          src={
            "https://images.pexels.com/photos/5568756/pexels-photo-5568756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="image"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 780px) 70vw, 100vw"
        />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="backdrop-blur-3xl bg-white/50 text-2xl p-6 rounded-xl h-full w-full">
          Debasish DasDebasish Das Debasish Das Debasish Das
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="backdrop-blur-3xl bg-white/10 text-2xl p-6 rounded-xl h-[95%] w-[90%]">
          Debasish DasDebasish Das Debasish Das Debasish Das
        </div>
      </div>
    </div>
  );
};

export default page;
