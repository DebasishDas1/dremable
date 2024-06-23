"use client";
import { Button } from "@/components/ui/button";
import { Star, StarOutline } from "@mui/icons-material";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import logo from "../../../public/shortLogo.png";
import { Phone } from "@mui/icons-material";
import copy from "copy-to-clipboard";

type Props = {
  name: string;
  contact: string;
  address: string;
  rating: number;
  url?: string;
  rawImageUrl?: string;
};

type stateProp = {
  value: string;
  copied: boolean;
};

const MagiciansCard = ({
  name,
  contact,
  address,
  rating,
  url,
  rawImageUrl,
}: Props) => {
  let plannerReating = [];
  let imageUrl;
  if (rawImageUrl) {
    const googleDriveImageData = rawImageUrl.split("/");
    imageUrl = `https://drive.google.com/uc?export=view&id=${googleDriveImageData[5]}`;
  }

  if (rating) {
    for (let i = 0; i < rating; i++) {
      plannerReating.push("L");
    }
    for (; rating < 5; rating++) {
      plannerReating.push("DL");
    }
  }

  return (
    <div className="group relative flex flex-col justify-between md:min-h-[200px] max-w-[600px] bg-white hover:shadow-2xl shadow-lg rounded-xl">
      <div className="h-[280px] w-[100] relative">
        <Image
          src={imageUrl ? imageUrl : logo}
          width={500}
          height={500}
          alt={name}
          className="rounded-lg overflow-hidden h-full w-full object-cover"
        />
        {/* <div className="absolute inset-0 top-3/4 bg-gradient-to-b from-transparent to-white"></div> */}
      </div>

      <div className="m-4 mb-6">
        <div className="lex-auto text-3xl font-black pb-4">{name}</div>
        <div className="w-full text-sm text-slate-700">{address}</div>
        <div className="mb-2 mt-4 ">
          {plannerReating.map((rate, i) =>
            rate == "L" ? <Star key={i} /> : <StarOutline key={i} />
          )}
        </div>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button>Contact</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogDescription className="flex flex-col items-center text-black">
              <Image src={logo} alt="logo" width={150} height={60} />
              <span className="text-2xl font-bold pb-2 pt-6 text-center">
                {name}
              </span>
              <div className="text-2xl font-bold pb-6">
                <Phone />
                <span className="pl-1"> {contact}</span>
              </div>
              <div className="text-2xl font-bold pt-4 pb-2 text-center">
                Want to get a special offer ?
              </div>
              <div className="flex p-3 rounded-lg text-center bg-gradient-to-r from-purple-100 to-pink-100">
                Wnen you call the vender must say you got this contact from
                Dremable Platform
              </div>
              <div className="w-[250px] flex justify-between pt-6">
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => copy(contact)}>
                  Copy contact
                </AlertDialogAction>
              </div>
            </AlertDialogDescription>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default MagiciansCard;
