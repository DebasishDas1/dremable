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
    <div className="backdrop-blur-3xl items-center justify-center pt-4 md:flex hidden ">
      {SubNavBarItemList.map(({ url, title }, index) => (
        <Link
          key={index}
          href={url}
          className={`mx-3 text-center items-center px-8 rounded-lg hover:shadow-2xl shadow-lg md: flex
          ${pathname.includes(title.toLowerCase()) ? "bg-white" : "bg-white/30"}
          `}
        >
          <div className="h-[60px] w-[60] relative p-2">
            <Image
              src={title === "Kolkata" ? Kolkata : Goa}
              alt={title}
              width={80}
              height={60}
              className="overflow-hidden h-full w-full object-cover"
            />
          </div>
          <div className="ml-2 font-light">{title}</div>
        </Link>
      ))}
    </div>
  );
};

export default SubNavBar;
