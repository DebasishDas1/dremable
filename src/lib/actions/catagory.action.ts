'use server'

import { connectToDatabase } from "../database"
import Category from "../database/models/category.model"
import { handleError } from '@/lib/utils'

type createCatagoryProps = {
    catagoryName: string
}

export const createCatagory = async ({ catagoryName }: createCatagoryProps) => {
    try {
        await connectToDatabase();

        const newCatagory = await Category.create({ name: catagoryName })

        return JSON.parse(JSON.stringify(newCatagory))
    } catch (error) {
        handleError(error)
    }
}

export const getAllCatagory = async () => {
    try {
        await connectToDatabase();

        const Catagories = await Category.find()

        return JSON.parse(JSON.stringify(Catagories))
    } catch (error) {
        handleError(error)
    }
}

export const getCatagoryById = async (CatagoryID: string) => {
    try {
        await connectToDatabase();

        const CategoryName = await Category.findById(CatagoryID);

        if (!CategoryName) throw new Error("event not found")

        return JSON.parse(JSON.stringify(CategoryName))
    } catch (error) {
        handleError(error)
    }
}
