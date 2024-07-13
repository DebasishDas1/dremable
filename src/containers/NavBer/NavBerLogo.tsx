"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/longLogo.png";

const NavBerLogo = () => {
  return (
    <Link href="/" className="flex-shrink-0">
      <Image src={logo} alt="logo" width={140} height={60} />
    </Link>
  );
};

export default NavBerLogo;
