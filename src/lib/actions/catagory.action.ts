'use server'

import { connectToDatabase } from "../database"
import Category from "../database/models/category.model"

type createCatagoryProps = {
    catagoryName: string
}

export const createCatagory = async ({ catagoryName }: createCatagoryProps) => {
    try {
        await connectToDatabase();

        const newCatagory = await Category.create({ name: catagoryName })

        return JSON.parse(JSON.stringify(newCatagory))
    } catch (error) {
        console.log(error);

    }
}

export const getAllCatagory = async () => {
    try {
        await connectToDatabase();

        const Catagories = await Category.find()

        return JSON.parse(JSON.stringify(Catagories))
    } catch (error) {
        console.log(error);

    }
}
