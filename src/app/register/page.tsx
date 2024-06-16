import type { Metadata } from "next";
import RegisterForm from "@/components/sheared/RegisterForm"

export const metadata: Metadata = {
  title: `Grow Your Wedding Business faster : Register as a Vendor -Dremable`,
  description: `Join Dremble's thriving Platform & connect with potential couples! Easy vendor Registration, Showcase your work & Get booked for Dream Weddings.`,
};

const Register = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:w-[65%] w-[90%] items-center">
        <div className="flex bg-white w-[90vw] md:w-[60vw] items-center rounded-xl mt-8 flex-col p-4 shadow-lg">
          <div className="text-4xl font-bold mb-4 text-center">
            Personalize your experience
          </div>
          <div className="text-xl text-center">
            Start by telling us about you
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
