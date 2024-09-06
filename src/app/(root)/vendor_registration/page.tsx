import type { Metadata } from "next";
import VendorRegistrationForm from "@/containers/VendorRegistrationForm";

export const metadata: Metadata = {
  title: `Grow Your Wedding Business faster : Register as a Vendor`,
  description: `Join Dremable's thriving Platform & connect with potential couples! Easy vendor Registration, Showcase your work & Get booked for Dream Weddings.`,
  robots: {
    index: false,
    follow: true,
  },
};

const VendorRegistration = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:w-[65%] w-[90%] items-center mt-16">
        <div className="md:text-6xl text-3xl font-bold mb-4 text-center">
          Dremable Wedding Partners Registration
        </div>
        <div className="text-lg text-center">
          The fastest-growing wedding marketplace to help you get in touch with
          couples
        </div>
        <VendorRegistrationForm />
      </div>
    </div>
  );
};

export default VendorRegistration;
