"use client";

import { Star } from "@mui/icons-material";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import logo from "../../../public/shortLogo.png";
import { Close, Phone } from "@mui/icons-material";
import copy from "copy-to-clipboard";
import ReactWhatsappButton from "@/components/sheared/ReactWhatsappButton";
import { AlertDialogAction } from "@/components/ui/alert-dialog";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  name: string;
  contact: string;
  address: string;
  rating: number;
  url?: string;
  rawImageUrl?: string;
  loggedIn: boolean;
};

const MagiciansCard = ({
  name,
  contact,
  address,
  rating,
  url,
  rawImageUrl,
  loggedIn,
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
        <div className="text-3xl font-black pb-4">{name}</div>
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
            <div className="flex justify-end">
              <AlertDialogCancel className="border-0">
                <Close />
              </AlertDialogCancel>
            </div>
            <AlertDialogDescription className="flex flex-col items-center text-black">
              <div className="h-[120px] w-[150px] relative overflow-hidden">
                <Image
                  src={logo}
                  alt="logo"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 780px) 70vw, 100vw"
                />
              </div>
              {!loggedIn && (
                <div className="text-lg text-center pt-10">
                  Verify Your mobile to Contact with
                  <div className="pb-6 pt-6 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600">
                    {name}
                  </div>
                  <SignedOut>
                    <Button>
                      <Link href={"/sign-in"}>Verify</Link>
                    </Button>
                  </SignedOut>
                </div>
              )}
              {loggedIn && (
                <div className="text-2xl font-bold text-center">
                  <div className="pb-2 pt-6 text-center">{name}</div>
                  <div className="pb-6">
                    <Phone />
                    <span className="pl-1"> {contact}</span>
                  </div>
                  <div className="pt-4 pb-2 text-center">
                    Want to get a special offer ?
                  </div>
                  <div className="flex p-3 rounded-lg text-center bg-gradient-to-r from-purple-100 to-pink-100 text-sm font-light">
                    When you call the vender must say you got this contact from
                    Dremable Platform
                  </div>
                  <div className="flex justify-evenly pt-6">
                    <ReactWhatsappButton
                      message={`Hi team Dremable i am trying to get information about "${name}"`}
                    />
                    <AlertDialogAction
                      onClick={() => copy(contact)}
                      className="hidden md:flex"
                    >
                      Copy contact
                    </AlertDialogAction>
                  </div>
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default MagiciansCard;
