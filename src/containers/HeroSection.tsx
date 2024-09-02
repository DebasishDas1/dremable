import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import home_page_pc from "../../public/assets/home_page_pc_1.jpg";
import home_page_mobile from "../../public/assets/home_page_mobile_2.jpeg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-center text-white">
      <div className="relative flex md:hidden">
        <div className="h-[650px] w-screen relative overflow-hidden">
          <Image
            src={home_page_mobile}
            alt="Dremable - India’s One-Stop Wedding Planning Platform"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 650px"
          />
        </div>
        <div className="absolute bottom-0 text-5xl flex flex-col items-center bg-gradient-to-b from-transparent via-transparent to-zinc-200">
          <div className="w-[90%] font-bold">
            India&apos;s one Stop Wedding Platform
          </div>
          <div className="w-[90%] text-sm">
            Your dream wedding starts from here. Expression of Dreams
            specializes in turning your love story into a breathtaking
            celebration, blending elegance, imagination, and heartfelt
            dedication
          </div>
          <Button size="lg" asChild className="button w-fit mt-4">
            <Link href={"/wedding_magicians/kolkata/wedding_planners"}>
              Explore now
            </Link>
          </Button>
        </div>
      </div>
      <div className="hidden md:flex">
        <div className="h-[1200px] w-screen relative overflow-hidden">
          <Image
            src={home_page_pc}
            alt="Dremable - India’s One-Stop Wedding Planning Platform"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 769px) 100vw, 1200px"
          />
        </div>
        <div className="absolute top-[420px] text-8xl flex flex-col w-full items-center">
          <div className="font-bold">India&apos;s One Stop </div>
          <div className="font-bold pb-2">Wedding Platform </div>
          <div className="w-[60%] text-lg pb-5 text-center">
            Your dream wedding starts from here. Expression of Dreams
            specializes in turning your love story into a breathtaking
            celebration, blending elegance, imagination, and heartfelt
            dedication
          </div>
          <Button size="lg" asChild className="button w-full sm:w-fit">
            <Link href={"/wedding_magicians/kolkata/wedding_planners"}>
              Explore now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
