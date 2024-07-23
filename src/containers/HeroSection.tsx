import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import home_page_pc from "../../public/assets/home_page_pc.jpg";
import home_page_mobile from "../../public/assets/home_page_mobile.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="relative flex md:hidden">
        <div className="h-[650px] w-screen relative overflow-hidden">
          <Image
            src={home_page_mobile}
            alt="landing page"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 650px"
          />
        </div>
        <div className="absolute bottom-0 text-4xl flex flex-col items-center bg-gradient-to-b from-transparent via-transparent to-zinc-200">
          <div className="w-[90%] font-bold">
            Crafting Timeless Celebrations
          </div>
          <div className="w-[90%] text-sm">
            Your dream wedding begins here. Expression of Dreams specializes in
            turning your love story into a breathtaking celebration, blending
            elegance, imagination, and heartfelt dedication
          </div>
          <Button size="lg" asChild className="button w-fit mt-4">
            <Link href={"/wedding_magicians/kolkata/wedding_planners"}>
              Explore now
            </Link>
          </Button>
        </div>
      </div>
      <div className="hidden md:flex ">
        <div className="h-[1200px] w-screen relative overflow-hidden">
          <Image
            src={home_page_pc}
            alt="landing page"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 769px) 100vw, 1200px"
          />
        </div>
        <div className="absolute top-[600px] text-9xl flex flex-col w-full items-center">
          <div className="font-bold">Crafting </div>
          <div className="font-bold pb-2">Timeless Celebrations</div>
          <div className="w-[60%] text-lg pb-5 text-center">
            Your dream wedding begins here. Expression of Dreams specializes in
            turning your love story into a breathtaking celebration, blending
            elegance, imagination, and heartfelt dedication
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
