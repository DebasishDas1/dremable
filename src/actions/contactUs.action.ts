"use server";

import { connectToDatabase } from "@/lib/databaseConnect";
import { ContactUs } from "@/models";
import { handleError } from "@/lib/utils";

type ContactUsParams = {
  entry: {
    _id?: string;
    name: string;
    message: string;
    email: string;
    subject: string;
  };
};

const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

export const asdContactUsEntry = async ({ entry }: ContactUsParams) => {
  try {
    await connectToDatabase();

    const newEntry = await ContactUs.create(entry);

    return JSON.parse(JSON.stringify(newEntry));
  } catch (error) {
    handleError(error);
    if (isError(error)) {
      throw new Error(`Error creating vendor: ${error.message}`);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};
