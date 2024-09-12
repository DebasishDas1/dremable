import type { Metadata } from "next";
import Image from "next/image";
import happyStudent from "../../../../public/assets/Happy_student.png";

export const metadata: Metadata = {
  title: "Your Dream Wedding starts from here",
  description:
    "Dream of a perfect wedding? Dremable makes it real! From wedding planners & photographers to makeup artists & vendors, find everything as you dream.",
};

const page = () => {
  return (
    <div className="bg-white h-screen w-full">
      <div>
        <div className="h-96 w-96 relative">
          <Image
            src={happyStudent}
            alt={"happyStudent"}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 780px) 70vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
