"use client";
import { Button } from "@/components/ui/button";
import { Star, StarOutline } from "@mui/icons-material";
import { useState } from "react";

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
import copy from 'copy-to-clipboard';

type Props = {
  name: string;
  contact: string;
  address: string;
  rating: number;
  url: string;
};

type stateProp = {
  value : string;
  copied: boolean;
}

const MagiciansCard = ({ name, contact, address, rating, url }: Props) => {
  let plannerReating = [];
  const [state, setState] = useState({
    value: "",
  });

  if (rating) {
    for (let i = 0; i < rating; i++) {
      plannerReating.push("L");
    }
    for (; rating < 5; rating++) {
      plannerReating.push("DL");
    }
  }

  return (
    <div className="flex flex-col justify-between font-sans bg-white rounded-lg p-4 mb-4 md:m-2 md:w-60 md:h-[260px] w-full hover:shadow-2xl shadow-lg">
      <div className="mb-2">
        <div className="lex-auto text-lg font-bold">{name}</div>
        <div className="w-full text-sm text-slate-700">{address}</div>
      </div>
      <div>
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
              <div className="text-2xl font-bold pt-4 pb-2">
                Want to get a special offer ?
              </div>
              <div className="flex p-3 rounded-lg text-center bg-gradient-to-r from-purple-200 to-pink-200">
                Wnen you call the vender must say you got this contact from
                Dremable Platform
              </div>
              <div className="w-[250px] flex justify-between pt-6">
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => copy(contact)}>Copy contact</AlertDialogAction>
              </div>
            </AlertDialogDescription>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default MagiciansCard;
