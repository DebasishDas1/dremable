"use client";

import { useState, useCallback } from "react";
import VenueOptions from "./VenueOptions";
import MagiciansOptions from "./MagiciansOptions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactForm from "@/containers/ContactForm";
import Image from "next/image";
import logo from "../../../public/longLogo.png";
import MobileNav from "@/components/sheared/MobileNav";

const NavBer = () => {
  const [activeOption, setActiveOption] = useState("");

  const handleMouseEnter = useCallback((opt: string) => {
    setActiveOption(opt);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveOption("");
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        activeOption ? "bg-white" : "backdrop-blur-3xl bg-white/50"
      } z-50`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center md:justify-center justify-between">
        <Link href="/" className="flex-shrink-0 mx-6">
          <div className="h-11 w-32 relative overflow-hidden">
            <Image
              src={logo}
              alt="logo"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 769px) 100vw, 1200px"
            />
          </div>
        </Link>
        <ul className="md:flex hidden">
          {navItems.map(({ text, url }) => (
            <NavItem
              key={text}
              text={text}
              url={url}
              activeOption={activeOption}
              handleMouseEnter={handleMouseEnter}
            />
          ))}
        </ul>
        <div className="md:flex hidden ml-6">
          <ContactForm />
        </div>
        <MobileNav />
      </div>
      {activeOption === "Wedding_Venues" && (
        <VenueOptions setShowOption={setActiveOption} />
      )}
      {activeOption === "Wedding_Magicians" && (
        <MagiciansOptions setShowOption={setActiveOption} />
      )}
    </div>
  );
};

const navItems = [
  {
    text: "Wedding_Venues",
    url: "/wedding_venues",
  },
  { text: "Wedding_Magicians", url: "/wedding_magicians" },
  { text: "Blog", url: "/blog" },
  { text: "About", url: "/about" },
  { text: "Vendor_Registration", url: "/vendor_registration" },
];

interface NavItemProps {
  text: string;
  url: string;
  activeOption: string | null;
  handleMouseEnter: (opt: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({
  text,
  url,
  activeOption,
  handleMouseEnter,
}) => {
  const pathname = usePathname().split("/");
  const updatedTitle = text.replaceAll("_", " ");

  const showSubtitle = pathname
    .map((item) => item.toLowerCase())
    .includes(text.toLowerCase());

  return (
    <li
      className={`mx-6 hover:font-bold ${
        showSubtitle || activeOption === text ? "font-black" : "font-light"
      }`}
      onMouseEnter={() => handleMouseEnter(text)}
    >
      <Link href={url}>{updatedTitle}</Link>
    </li>
  );
};

export default NavBer;
