import Link from "next/link";
import { WhatsApp } from "@mui/icons-material";

const WhatsAppFloat = () => {
  return (
    <div className="fixed right-5 bottom-6 z-50 bg-green-400 md:w-36 w-18 rounded-3xl p-3">
      <Link
        href={"https://wa.me/918777790641"}
        className="cursor-pointer py-1 pl-1 flex items-center"
        target="_blank"
        aria-label="WhatsApp"
      >
        <WhatsApp sx={{ fontSize: 40 }} />
        <div className="hidden md:flex pl-2">Talk to Experts</div>
      </Link>
    </div>
  );
};

export default WhatsAppFloat;
