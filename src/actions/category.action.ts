"use server";

import { connectToDatabase } from "@/lib/databaseConnect";
import { Category } from "@/models";
import { handleError } from "@/lib/utils";

type createCategoryProps = {
  categoryName: string;
};

export const createCategory = async ({ categoryName }: createCategoryProps) => {
  try {
    await connectToDatabase();

    const newCategory = await Category.create({ name: categoryName });

    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    handleError(error);
  }
};

export const getAllCategory = async () => {
  try {
    await connectToDatabase();

    const Catagories = await Category.find();

    return JSON.parse(JSON.stringify(Catagories));
  } catch (error) {
    handleError(error);
  }
};

export const getCategoryById = async (CategoryID: string) => {
  try {
    await connectToDatabase();

    const CategoryName = await Category.findById(CategoryID);

    if (!CategoryName) throw new Error("event not found");

    return JSON.parse(JSON.stringify(CategoryName));
  } catch (error) {
    handleError(error);
  }
};
