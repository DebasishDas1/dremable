"use server";

import { connectToDatabase } from "../database";
import Vendor from "@/lib/database/models/vendor.model";
import { handleError } from "@/lib/utils";

type CreateVendorParams = {
    vendor: {
    _id?: string;
    companyName: string;
    ownerName: string;
    yearsOfExperience?: string;
    companyAddress?: string;
    serviceLocation?: string;
    portfolioImagesUrl?: string;
    services: string;
    whatsApp?: string;
  };
};

const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

export const createVendor = async ({ vendor }: CreateVendorParams) => {
  try {
    await connectToDatabase();
    console.log(vendor);
    
    if (
      !vendor.companyName ||
      !vendor.companyAddress ||
      !vendor.services
    ) {
      throw new Error("Missing required vendor fields");
    }

    const newVendor = await Vendor.create(vendor);

    return JSON.parse(JSON.stringify(newVendor));
  } catch (error) {
    handleError(error);
    if (isError(error)) {
      throw new Error(`Error creating blog: ${error.message}`);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};