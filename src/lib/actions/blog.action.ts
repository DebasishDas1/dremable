'use server';

import { connectToDatabase } from "../database";
import Blog from '@/lib/database/models/blog.model';
import { handleError } from '@/lib/utils'
import Category from '@/lib/database/models/category.model'

type CreateBlogParams = {
    blog: {
        _id?: string;
        title: string;
        description?: string;
        location?: string;
        date: Date;
        imageUrl: string;
        url?: string;
        categoryID: String
    };
    path: string;
};

const populateBlog = (query: any) => {
    return query
        .populate({ path: 'category', model: Category, select: '_id name' })
}

export const createBlog = async ({ blog, path }: CreateBlogParams) => {
    try {
        await connectToDatabase();

        const newBlog = await Blog.create({ ...blog, category: blog.categoryID });

        return JSON.parse(JSON.stringify(newBlog))
    } catch (error) {
        handleError(error)
    }
};


export const getBlogById = async (blogID: string) => {
    try {
        await connectToDatabase();

        const blog = await Blog.findById(blogID);

        if (!blog) throw new Error("event not found")

        return JSON.parse(JSON.stringify(blog))
    } catch (error) {
        handleError(error)
    }
}

type GetAllBlogssParams = {
    query: string
    category: string
    limit: number
    page: number
}

export const getAllBlog = async () => {
    try {
        await connectToDatabase();

        const blogs = await Blog.find()
        alert(JSON.parse(JSON.stringify(blogs)));

        return JSON.parse(JSON.stringify(blogs))
    } catch (error) {
        handleError(error)
    }
}