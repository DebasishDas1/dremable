// pages/404.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import errorPage from "../../public/assets/404_error_page.png";

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Image
        src={errorPage}
        alt="Error"
        style={{ height: "400px", width: "400px" }}
      />
      <p className="text-lg text-gray-600 mb-8 text-center">
        It seems like you&apos;ve stumbled upon a page that doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-lg text-white bg-black p-3 rounded-lg shadow-lg"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default Custom404;
