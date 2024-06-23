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
import {
  Home,
  ArrowDropDown,
  Menu,
  AutoFixHigh,
  Place,
  Paragliding,
} from "@mui/icons-material";
import ContactForm from "@/containers/ContactForm";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavOption {
  name: string;
  linkUrl: string;
  icon: JSX.Element;
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
            .map((item) => item.toLowerCase().replace(/\s+/g, ""))
            .includes(option.name.toLowerCase().replace(/\s+/g, ""))
            ? "font-black"
            : "font-light"
        }`}
      >
        <button type="submit" className="outline-none flex items-center ">
          <span className="mr-2 mb-1">{option.icon}</span>
          <span>{option.name.replaceAll("_", " ")}</span>
        </button>
      </Link>
    </SheetClose>
  );

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="inline-block cursor-pointer lg:hidden" />
        </SheetTrigger>
        <SheetContent
          className="backdrop-blur-3xl bg-white/30 text-2xl"
          side="top"
        >
          {renderNavItem({
            name: "Home",
            linkUrl: "/",
            icon: <Home />,
          })}
          <div
            className={`flex regular-16 flexCenter cursor-pointer pb-5 items-center pt-2 font-bold ${
              showMagicians ? "font-black" : "font-light"
            }`}
            onClick={handleMagiciansButton}
          >
            <div className="mr-2">
              <AutoFixHigh />
            </div>
            Magicians
            <ArrowDropDown />
          </div>
          <div className="bg-white/40 rounded-lg">
            {showMagicians && (
              <div>
                {magicians_options.map((option) => renderNavItem(option))}
              </div>
            )}
          </div>

          <div
            className={`flex regular-16 flexCenter cursor-pointer pb-5 items-center pt-2 font-bold ${
              showVendors ? "font-black" : "font-light"
            }`}
            onClick={handleVendorsButton}
          >
            <div className="mr-2">
              <Place />
            </div>
            Wedding Venues
            <ArrowDropDown />
          </div>
          <div className="bg-white/40 rounded-lg">
            {showVendors && (
              <div>{vendor_options.map((option) => renderNavItem(option))}</div>
            )}
          </div>
          {nav_options
            .filter((option) => option.name !== "Magicians")
            .filter((option) => option.name !== "Wedding_Venues")
            .map(renderNavItem)}

          {/* vendor registration */}
          {renderNavItem({
            name: "Vendor Registration",
            linkUrl: "/vendor_registration",
            icon: <Paragliding />,
          })}

          <ContactForm />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
