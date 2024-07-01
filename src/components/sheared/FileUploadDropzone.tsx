"use client";

import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { useState } from "react";
import Image from "next/image";

type FileUploadDropzoneProps = {
  onFieldChange: (imageUrl: string[]) => void;
  fileList: string[];
}

export const FileUploadDropzone = ({onFieldChange, fileList}: FileUploadDropzoneProps) => {
  const [selectedImageList, setSelectedImageList] = useState<string[]>([]);

  return (
    <>
      <UploadDropzone<OurFileRouter, "imageUploader">
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          setSelectedImageList([]);
          const uploadedFiles = res.map((file) => file.url)
          onFieldChange([...fileList, ...uploadedFiles] );
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
        onUploadBegin={(name) => {
          console.log("Uploading: ", name);
        }}
        onDrop={(acceptedFiles) => {
          console.log("Accepted files: ", acceptedFiles);
          const droppedFiles = acceptedFiles.map((file) => file.name);
          setSelectedImageList(droppedFiles);
        }}
      />
      {selectedImageList.length > 0 && (
        <div className="flex flex-wrap">
          {selectedImageList.map((image, index) => (
            <div key={index} className="bg-black text-white p-2 m-2 rounded-lg px-4">
              {image}
            </div>
          ))}
        </div>
      )}
      {fileList.length > 0 && (
        <div className="flex flex-wrap">
          {fileList.map((image, index) => (
            <div key={index} className="p-2 m-2 rounded-lg h-[100px]">
              <Image
                src={image}
                alt={`Uploaded image ${index}`}
                width={500}
                height={500}
                unoptimized
                className="rounded-lg overflow-hidden h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
