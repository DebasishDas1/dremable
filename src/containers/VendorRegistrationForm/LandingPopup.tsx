"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../../public/assets/business_deal_create.png";

const popupVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const LandingPopup: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={popupVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white p-6 rounded-lg shadow-lg w-[340px] flex flex-col text-center"
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Are you a Wedding Vendor ?
            </h2>
            <Image
              src={logo}
              width={500}
              height={500}
              alt={"vendor"}
              priority
            />
            <div className="flex justify-around mt-4 text-lg">
              <Button
                className="rounded-xl w-[40%]"
                onClick={() => router.push("/")}
                variant="outline"
              >
                No
              </Button>
              <Button className="rounded-xl w-[40%]" onClick={closePopup}>
                Yes
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LandingPopup;
