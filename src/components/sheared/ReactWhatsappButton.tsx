import ReactWhatsapp from "react-whatsapp";
import { WhatsApp } from "@mui/icons-material";

const ReactWhatsappButton = ({
  number = "+918777790641",
  message = "Hi Dremable, I have submitted a registration request to join as a vendor. Please guide me for the next steps.",
}) => (
  <div className="flex items-center rounded-lg flex-2 mx-1 px-4 border border-gray-300">
    <ReactWhatsapp number={number} message={message} element="button">
      <WhatsApp sx={{ fontSize: 30 }} />
      <span className="pl-1 font-bold text-base">WhatsApp</span>
    </ReactWhatsapp>
  </div>
);

export default ReactWhatsappButton;
