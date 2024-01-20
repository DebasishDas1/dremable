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

export const getAllBlog = async ({ query, limit = 20, page, category }: GetAllBlogssParams) => {
    try {
        await connectToDatabase();

        const blogs = await Blog.find();
        const conditions = {}
        // const blogsQuary = await Blog.find(conditions)
        //     .sort({ date: 'desc' })
        //     .skip(0)
        //     .limit(limit)

        // const blogs = await populateBlog(blogsQuary)
        const blogsCount = await Blog.countDocuments(conditions)

        return {
            data: JSON.parse(JSON.stringify(blogs)),
            totalPages: Math.ceil(blogsCount / limit),
        }
    } catch (error) {
        handleError(error)
    }
}