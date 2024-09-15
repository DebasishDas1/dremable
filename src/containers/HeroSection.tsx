import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import home_page_pc from "../../public/assets/home_page_pc_1.jpg";
import home_page_mobile from "../../public/assets/home_page_mobile_2.jpeg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-center text-white">
      {/* Mobile View */}
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
        <div className="absolute bottom-0 text-5xl flex flex-col items-center bg-gradient-to-b from-transparent via-transparent to-zinc-100">
          <div className="w-[90%] font-black bg-white/70 text-transparent bg-clip-text pb-4">
            India&apos;s one Stop Wedding Platform
          </div>
          <div className="w-[90%] text-sm">
            Your Dream Wedding starts from here. Get All Top wedding planners,
            photographers, vendors & Venues in a single click. Let’s Turn your
            Love story into a Timeless Celebration
          </div>
          <Button size="lg" asChild className="button w-fit mt-4">
            <Link href={"/wedding_magicians/kolkata/wedding_planners"}>
              Explore now
            </Link>
          </Button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="relative hidden md:flex">
        <div className="h-[600px] w-screen relative overflow-hidden">
          <Image
            src={home_page_pc}
            alt="Dremable - India’s One-Stop Wedding Planning Platform"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 769px) 100vw, 1200px"
          />
        </div>

        {/* White Gradient at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-zinc-100 to-transparent"></div>

        <div className="absolute top-0 text-8xl flex flex-col items-center w-screen pb-6 pt-14">
          <h2 className="w-[70%] bg-white/60 text-transparent bg-clip-text font-bold p-6">
            India&apos;s one Stop Wedding Platform
          </h2>
          <div className="w-[60%] text-lg pb-5 text-center text-white">
            Your Dream Wedding starts from here. Get All Top wedding planners,
            photographers, vendors & Venues in a single click. Let’s Turn your
            Love story into a Timeless Celebration
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
