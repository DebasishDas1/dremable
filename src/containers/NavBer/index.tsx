"use client";

import NavBerLogo from "./NavBerLogo";
import NavBerOption from "./NavBerOption";
import NavBerProfile from "./NavBerProfile";

const NavBer = () => {
  return (
    <div className="sticky top-0 md:px-10 px-4 py-1 backdrop-blur-3xl bg-white/40 z-50 flex items-center justify-between">
      <NavBerLogo />
      <NavBerOption />
      <NavBerProfile />
    </div>
  );
};

export default NavBer;
