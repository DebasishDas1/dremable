import WhatsAppIcon from "../../../public/assets/whatsApp_icon.png";
import Image from "next/image";
import Link from "next/link";
import { WhatsApp } from "@mui/icons-material";

const WhatsAppFloat = () => {
  return (
    <div className="fixed right-2 bottom-6 z-50 flex bg-green-400 md:w-36 w-18 md:rounded-lg rounded-full text-center items-center p-3">
      <Link
        href={"https://wa.me/918777790641"}
        className={`cursor-pointer py-1 pl-1`}
        target="_blank"
        aria-label="WhatsApp"
      >
        <WhatsApp sx={{ fontSize: 40 }} />
      </Link>
      <div className="hidden md:flex">Talk to Experts</div>
    </div>
  );
};

export default WhatsAppFloat;
