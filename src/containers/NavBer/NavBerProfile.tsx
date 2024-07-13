import { Button } from "@/components/ui/button";
import Link from "next/link";
import ContactForm from "@/containers/ContactForm";
import MobileNav from "@/components/sheared/MobileNav";

const NavBerProfile = () => {
  return (
    <>
      <div className="md:flex hidden">
        <Button className="md:ml-2 font-bold text-lg text-black" variant="link">
          <Link href={"/vendor_registration"}>Vendor Registration</Link>
        </Button>
        <ContactForm />
      </div>
      <MobileNav />
    </>
  );
};

export default NavBerProfile;
