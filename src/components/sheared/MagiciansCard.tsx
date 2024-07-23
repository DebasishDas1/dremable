"use client";

import { Star } from "@mui/icons-material";
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
import { Phone, Verified } from "@mui/icons-material";
import copy from "copy-to-clipboard";

type Props = {
  name: string;
  contact: string;
  address: string;
  rating: number;
  url?: string;
  rawImageUrl?: string;
};

const MagiciansCard = ({
  name,
  contact,
  address,
  rating,
  url,
  rawImageUrl,
}: Props) => {
  let imageUrl;
  if (rawImageUrl) {
    const googleDriveImageData = rawImageUrl.split("/");
    imageUrl = `https://drive.google.com/uc?export=view&id=${googleDriveImageData[5]}`;
  }

  return (
    <div className="group flex flex-col relative md:min-h-[200px] max-w-[600px] bg-white hover:shadow-2xl shadow-lg rounded-xl">
      <div className="h-[280px] w-[100] relative rounded-lg overflow-hidden">
        <Image
          src={imageUrl ? imageUrl : logo}
          fill
          alt={name}
          className="object-cover"
          sizes="(min-width: 2300px) 600px, (min-width: 1040px) 25.89vw, (min-width: 760px) 600px, calc(78.41vw + 20px)"
        />
      </div>

      <div className="m-4 flex flex-col flex-1 justify-between p-1">
        <div className="text-3xl font-black pb-4">
          {name}
          {/* <br />
          <span className="text-xs bg-green-300 py-1 px-3 rounded-full ml-3">
            <Verified fontSize="small" />
            Verified
          </span> */}
        </div>
        <div className="w-full text-sm text-slate-700">{address}</div>
        <div className="m-4 font-bold text-2xl flex items-center justify-center">
          {rating}/5
          <Star />
        </div>
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="bg-black text-white font-bold p-2 px-6 rounded-xl">
              Contact
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogDescription className="flex flex-col items-center text-black">
              <div className="h-[120px] w-[150px] relative overflow-hidden">
                <Image
                  src={logo}
                  alt="logo"
                  fill
                  className="object-cover"
                  sizes="(min-width: 780px) 70vw, 100vw"
                />
              </div>
              <span className="text-2xl font-bold pb-2 pt-6 text-center">
                {name}
              </span>
              <span className="text-2xl font-bold pb-6">
                <Phone />
                <span className="pl-1"> {contact}</span>
              </span>
              <span className="text-2xl font-bold pt-4 pb-2 text-center">
                Want to get a special offer ?
              </span>
              <span className="flex p-3 rounded-lg text-center bg-gradient-to-r from-purple-100 to-pink-100">
                When you call the vender must say you got this contact from
                Dremable Platform
              </span>
              <span className="w-[250px] flex justify-between pt-6">
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => copy(contact)}>
                  Copy contact
                </AlertDialogAction>
              </span>
            </AlertDialogDescription>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default MagiciansCard;
