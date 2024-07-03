"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import anime from "animejs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../../public/Business_deal_cuate.png";

const LandingPopup: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(true);
  }, []);

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
        complete: () => setIsOpen(false),
      });
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div
          ref={popupRef}
          className="bg-white p-6 rounded-lg shadow-lg w-[300px] flex flex-col text-center"
        >
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Are you a Wedding Vendor ?
          </h2>
          <Image src={logo} width={500} height={500} alt={"vendor"} />
          <div className="flex justify-around mt-4 text-lg">
            <Button
              className="rounded-xl p-4"
              onClick={() => router.push("/")}
              variant="outline"
            >
              No
            </Button>
            <Button className="rounded-xl p-4" onClick={closePopup}>
              Yes
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default LandingPopup;
