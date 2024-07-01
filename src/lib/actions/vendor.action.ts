"use server";

import { connectToDatabase } from "../database";
import Vendor from "@/lib/database/models/vendor.model";
import { handleError } from "@/lib/utils";

type CreateVendorParams = {
  vendor: {
    _id?: string;
    vName: string;
    vEmail: string;
    vWhatsApp: string;
    vExperience: string;
    vCompanyName: string;
    vCompanyAddress: string;
    vService: string;
    vServiceLocationList: string[];
    vImagesUrlList?: string[];
    vDetailsPdf?: string;
  };
};

const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

export const createVendor = async ({ vendor }: CreateVendorParams) => {
  try {
    await connectToDatabase();

    if (!vendor.vCompanyName || !vendor.vCompanyAddress || !vendor.vService) {
      throw new Error("Missing required vendor fields");
    }

    const newVendor = await Vendor.create(vendor);

    return JSON.parse(JSON.stringify(newVendor));
  } catch (error) {
    handleError(error);
    if (isError(error)) {
      throw new Error(`Error creating vendor: ${error.message}`);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};
