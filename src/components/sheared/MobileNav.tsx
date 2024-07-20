import { useState } from "react";
import {
  nav_options,
  magicians_options,
  vendor_options,
  goa_options,
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

interface NavOption {
  name: string;
  linkUrl: string;
}

const MobileNav: React.FC = () => {
  const [showMagicians, setShowMagicians] = useState<boolean>(false);
  const [showVendors, setShowVendors] = useState<boolean>(false);
  const [showKolkata, setShowKolkata] = useState<boolean>(false);
  const [showGoa, setShowGoa] = useState<boolean>(false);
  const pathname: string[] = usePathname().split("/");

  const handleMagiciansButton = (): void => {
    setShowMagicians((prevState: boolean) => !prevState);
  };

  const handleVendorsButton = (): void => {
    setShowVendors((prevState: boolean) => !prevState);
  };

  const handleKolkataButton = (): void => {
    setShowKolkata((prevState: boolean) => !prevState);
  };

  const handleGoaButton = (): void => {
    setShowGoa((prevState: boolean) => !prevState);
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
          className="backdrop-blur-3xl bg-white/40 text-2xl"
          side="top"
        >
          {renderNavItem({
            name: "Home",
            linkUrl: "/",
          })}

          <div
            className={`flex regular-16 flexCenter cursor-pointer pb-5 items-center py-2 font-bold ${
              showMagicians ? "font-black" : "font-light"
            }`}
            onClick={handleMagiciansButton}
          >
            Wedding Magicians
            <ArrowDropDown />
          </div>
          <div className="bg-white/20 rounded-lg">
            {showMagicians && (
              <>
                <div
                  className={`flex regular-16 flexCenter cursor-pointer py-3 items-center font-bold rounded-xl pl-3 ${
                    showKolkata ? "font-black" : "font-light"
                  }`}
                  onClick={handleKolkataButton}
                >
                  Kolkata
                  <ArrowDropDown />
                </div>
                <div className="bg-white/30 rounded-lg pl-3 mx-4">
                  {showKolkata && (
                    <div>
                      {magicians_options.map((option) => renderNavItem(option))}
                    </div>
                  )}
                </div>

                <div
                  className={`flex regular-16 flexCenter cursor-pointer py-3 items-center font-bold rounded-xl pl-3  ${
                    showGoa ? "font-black" : "font-light"
                  }`}
                  onClick={handleGoaButton}
                >
                  Goa
                  <ArrowDropDown />
                </div>
                <div className="bg-white/30 rounded-lg pl-3 mx-4">
                  {showGoa && (
                    <div>
                      {goa_options.map((option) => renderNavItem(option))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          <div
            className={`flex regular-16 flexCenter cursor-pointer pb-5 items-center pt-2 font-bold ${
              showVendors ? "font-black" : "font-light"
            }`}
            onClick={handleVendorsButton}
          >
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
            .filter((option) => option.name !== "Wedding Venues")
            .map(renderNavItem)}

          {/* vendor registration */}
          {renderNavItem({
            name: "Vendor Registration",
            linkUrl: "/vendor_registration",
          })}
          <div className="pt-4">
            <ContactForm />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
