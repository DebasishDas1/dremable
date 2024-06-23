"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/longLogo.png";
import {
  nav_options,
  magicians_options,
  vendor_options,
} from "@/components/constants";
import MobileNav from "@/components/sheared/MobileNav";
import NavItems from "@/components/sheared/NavItems";
import ContactForm from "@/containers/ContactForm";
import { Button } from "@/components/ui/button";

const NavBer = () => {
  const pathname = usePathname().split("/");
  const showMagicians = pathname.includes("magicians");
  const showVendors = pathname.includes("wedding_venues");

  return (
    <div className="sticky top-0 md:px-10 px-4 backdrop-blur-3xl bg-white/40 text-xl z-50">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image src={logo} alt="logo" width={150} height={60} />
        </Link>
        <ul className="hidden gap-12 md:flex">
          {nav_options.map((option) => (
            <NavItems
              key={option.linkUrl}
              url={option.linkUrl}
              title={option.name}
              icon={option.icon}
            />
          ))}
        </ul>
        <div className="md:flex hidden">
          <Button className="md:ml-2 font-bold text-lg" variant="outline">
            <Link href={"/vendor_registration"}>Vendor Registration</Link>
          </Button>
          <ContactForm />
        </div>
        <MobileNav />
      </div>
      {showMagicians && (
        <div className="items-center justify-center gap-20 hidden md:flex">
          {magicians_options.map((option) => (
            <NavItems
              key={option.linkUrl}
              url={option.linkUrl}
              title={option.name}
              icon={option.icon}
            />
          ))}
        </div>
      )}
      {showVendors && (
        <div className="items-center justify-center gap-20 hidden md:flex">
          {vendor_options.map((option) => (
            <NavItems
              key={option.linkUrl}
              url={option.linkUrl}
              title={option.name}
              icon={option.icon}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBer;
