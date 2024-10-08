import { useState } from "react";
import {
  nav_options,
  magicians_options,
  vendor_options,
} from "@/components/constants";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ArrowDropDown, Menu } from "@mui/icons-material";
import ContactForm from "@/containers/ContactForm";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Divider from "@mui/material/Divider";

interface NavOption {
  name: string;
  linkUrl: string;
}

const MobileNav: React.FC = () => {
  const [showMagicians, setShowMagicians] = useState<boolean>(false);
  const [showVendors, setShowVendors] = useState<boolean>(false);
  const pathname: string[] = usePathname().split("/");

  const handleMagiciansButton = (): void => {
    setShowMagicians((prevState: boolean) => !prevState);
  };

  const handleVendorsButton = (): void => {
    setShowVendors((prevState: boolean) => !prevState);
  };

  const renderNavItem = (option: NavOption): JSX.Element => (
    <SheetClose asChild key={option.linkUrl}>
      <Link
        href={option.linkUrl}
        className={`flex regular-16  py-4 ${
          pathname
            .map((item) => item.toLowerCase().replaceAll("_", " "))
            .includes(option.name.toLowerCase().replaceAll("_", " "))
            ? "font-black"
            : "font-light"
        }`}
      >
        <button type="submit" className="outline-none flex items-center ">
          <span>{option.name.replaceAll("_", " ")}</span>
        </button>
      </Link>
    </SheetClose>
  );

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="inline-block cursor-pointer lg:hidden mr-6" />
        </SheetTrigger>
        <SheetContent
          className="backdrop-blur-3xl bg-white/30 text-2xl"
          side="top"
        >
          <SignedIn>
            <UserButton afterSwitchSessionUrl="/" />
          </SignedIn>

          <SignedOut>
            {renderNavItem({
              name: "Sign in / Sign up",
              linkUrl: "/sign-in",
            })}
          </SignedOut>

          <Divider />

          {renderNavItem({
            name: "Home",
            linkUrl: "/",
          })}

          <div
            className={`flex regular-16 flexCenter cursor-pointer py-4 items-center font-bold ${
              showMagicians ? "font-black" : "font-light"
            }`}
            onClick={handleMagiciansButton}
          >
            Wedding Magicians
            <ArrowDropDown />
          </div>
          <div className="bg-white/20 rounded-lg pl-3">
            {showMagicians && (
              <div>
                {magicians_options.map((option) => renderNavItem(option))}
              </div>
            )}
          </div>

          <div
            className={`flex regular-16 flexCenter cursor-pointer py-4 items-center font-bold ${
              showVendors ? "font-black" : "font-light"
            }`}
            onClick={handleVendorsButton}
          >
            Wedding Venues
            <ArrowDropDown />
          </div>
          <div className="bg-white/20 rounded-lg pl-3">
            {showVendors && (
              <div>{vendor_options.map((option) => renderNavItem(option))}</div>
            )}
          </div>

          {nav_options
            .filter((option) => option.name !== "Magicians")
            .filter((option) => option.name !== "Wedding Venues")
            .map(renderNavItem)}

          {/* vendor registration */}
          {renderNavItem({
            name: "Vendor Registration",
            linkUrl: "/vendor_registration",
          })}

          <div className="py-4">
            <ContactForm />
          </div>

          {/* {renderNavItem({
            name: "Talk to Experts",
            linkUrl: "https://wa.me/918777790641",
          })} */}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
