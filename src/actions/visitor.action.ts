"use server";

import { connectToDatabase } from "@/lib/databaseConnect";
import { handleError } from "@/lib/utils";
import { Visitor } from "@/models";

type visitorParams = {
  visitor: {
    _id?: string;
    name: string;
    phone: string;
  };
};

const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

export const visitor = async ({ visitor }: visitorParams) => {
  try {
    await connectToDatabase();

    const newEntry = await Visitor.create(visitor);

    return JSON.parse(JSON.stringify(newEntry));
  } catch (error) {
    handleError(error);
    if (isError(error)) {
      throw new Error(`Error on adding you: ${error.message}`);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};
