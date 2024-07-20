"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ReactWhatsapp from "react-whatsapp";
import { WhatsApp, Home } from "@mui/icons-material";
import SuccessPopupImage from "../../../public/assets/Ethnic_friendship_cuate.png";

type SuccessPopupProp = {
  name: string;
  isOpen: boolean;
  onClose: (open: boolean) => void;
};

const popupVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const SuccessPopup = ({ name, isOpen, onClose }: SuccessPopupProp) => {
  const router = useRouter();

  const closePopup = () => {
    onClose(false);
    router.push("/");
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
            className="bg-white p-6 rounded-lg shadow-lg w-[360px] flex flex-col text-center"
          >
            <h2 className="text-2xl font-bold text-green-600">
              Welcome
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
              We will look over your message and get back to you. In the
              meantime, you can check our other services.
            </div>
            <div className="mt-6 w-full flex">
              <Button className="rounded-xl flex-1 mx-1" onClick={closePopup}>
                <Home />
                Home
              </Button>
              <ReactWhatsappButton />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ReactWhatsappButton = ({
  number = "+918777790641",
  message = "Hi Dremable, I have submitted a registration request to join as a vendor. Please guide me for the next steps.",
}) => (
  <div className="bg-green-200 flex items-center rounded-xl flex-2 mx-1 px-3">
    <ReactWhatsapp number={number} message={message} element="button">
      <WhatsApp className="text-green-600" sx={{ fontSize: 30 }} />
      <span className="pl-1 font-bold">Whatsapp</span>
    </ReactWhatsapp>
  </div>
);

export default SuccessPopup;
