'use server'

import { connectToDatabase } from "../database"

type CreateBlogParams = {

}

export const createBlog = async ({ blog, path }: CreateBlogParams) => {
    try {
        await connectToDatabase();


    } catch (error) {
        console.log(error);
    }
}