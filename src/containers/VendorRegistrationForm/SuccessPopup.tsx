"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import anime from "animejs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ReactWhatsapp from "react-whatsapp";
import { WhatsApp } from "@mui/icons-material";
import SuccessPopupImage from "../../../public/assets/Ethnic_friendship_cuate.png";
import { Home } from "@mui/icons-material";

type SuccessPopupProp = {
  name: string;
  isOpen: boolean;
  onClose: (open: boolean) => void;
};

const SuccessPopup = ({ name, isOpen, onClose }: SuccessPopupProp) => {
  const router = useRouter();
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && popupRef.current) {
      anime({
        targets: popupRef.current,
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 500,
        easing: "easeOutExpo",
      });
    }
  }, [isOpen]);

  const closePopup = () => {
    if (popupRef.current) {
      anime({
        targets: popupRef.current,
        opacity: [1, 0],
        translateY: [0, -50],
        duration: 500,
        easing: "easeInExpo",
        complete: () => onClose(false),
      });
    }
    router.push("/");
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div
          ref={popupRef}
          className="bg-white p-6 rounded-lg shadow-lg w-[360px] flex flex-col text-center"
        >
          <h2 className="text-2xl font-bold text-green-600">
            Wellcome
            <div className="text-black">{name}</div>
            to the <br />
            Dremable Family
          </h2>
          <Image
            src={SuccessPopupImage}
            width={300}
            height={300}
            alt={"vendor"}
          />
          <div>
            We will look over your message and get back to you In the meantime,
            you can check our other service.
          </div>
          <div className="mt-6 w-full flex">
            <Button className="rounded-xl flex-1 mx-1" onClick={closePopup}>
              <Home />
              Home
            </Button>
            <ReactWhatsappButton />
          </div>
        </div>
      </div>
    )
  );
};

const ReactWhatsappButton = ({
  number = "+918777790641",
  message = "Hi Dremable, I have submitted a registration request to join as a vendor. Please guide me for next steps.",
}) => (
  <div className="bg-green-200 flex items-center rounded-xl flex-2 mx-1 px-3">
    <ReactWhatsapp number={number} message={message} element="button">
      <WhatsApp className="text-green-600" sx={{ fontSize: 30 }} />
      <span className="pl-1 font-bold">Whatsapp</span>
    </ReactWhatsapp>
  </div>
);

export default SuccessPopup;
