"use client";

import Link from "next/link";
import Image from "next/image";
import Kolkata from "../../../public/assets/kolkata.png";
import Goa from "../../../public/assets/goa.png";
import { usePathname } from "next/navigation";

type SubNavBarItem = {
  url: string;
  title: string;
};

type SubNavBarProps = {
  SubNavBarItemList: SubNavBarItem[];
};

const SubNavBar = ({ SubNavBarItemList }: SubNavBarProps) => {
  const pathname = usePathname().split("/");
  return (
    <div className="backdrop-blur-3xl items-center justify-center pt-4 flex">
      {SubNavBarItemList.map(({ url, title }, index) => (
        <Link
          key={index}
          href={url}
          className={`mx-3 text-center items-center px-8 rounded-lg hover:shadow-2xl shadow-lg md: flex
          ${pathname.includes(title.toLowerCase()) ? "bg-white" : "bg-white/30"}
          `}
        >
          <div className="h-[40px] md:h-[70px] w-[30px] md:w-[70px] relative p-2 overflow-hidden ">
            <Image
              src={title === "Kolkata" ? Kolkata : Goa}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div className="ml-2 font-light">{title}</div>
        </Link>
      ))}
    </div>
  );
};

export default SubNavBar;
