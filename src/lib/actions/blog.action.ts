"use server";

import { connectToDatabase } from "../database";
import Blog from "@/lib/database/models/blog.model";
import { handleError } from "@/lib/utils";
import Category from "@/lib/database/models/category.model";
import { revalidatePath } from 'next/cache'

type BlogParams = {
  blog: {
    _id?: string;
    title: string;
    description?: string;
    location?: string;
    date: Date;
    imageUrl: string;
    url?: string;
    categoryID: string;
    header?: string;
    content?: string;
    urlKey: string;
  };
  path: string;
};

const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

const populateEvent = (query: any) => {
  return query
    .populate({ path: 'category', model: Category, select: '_id name' })
}

// create
export const createBlog = async ({ blog, path }: BlogParams) => {
  try {
    await connectToDatabase();

    if (
      !blog.title ||
      !blog.date ||
      !blog.imageUrl ||
      !blog.categoryID ||
      !blog.urlKey ||
      !blog.header
    ) {
      throw new Error("Missing required blog fields");
    }

    const category = await Category.findById(blog.categoryID);
    if (!category) {
      throw new Error("Category not found");
    }

    const newBlog = await Blog.create({ ...blog, category: blog.categoryID });
    revalidatePath(path)

    return JSON.parse(JSON.stringify(newBlog));
  } catch (error) {
    handleError(error);
    if (isError(error)) {
      throw new Error(`Error creating blog: ${error.message}`);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export const getBlogById = async (urlKey: string) => {
  try {
    await connectToDatabase();

    const blog = await Blog.findOne({ urlKey });

    if (!blog) throw new Error("event not found");

    return JSON.parse(JSON.stringify(blog));
  } catch (error) {
    handleError(error);
  }
};

// UPDATE
export async function updateBlog({ blog, path }: BlogParams) {
  try {
    await connectToDatabase()

    const updatedBlog = await Blog.findByIdAndUpdate(
      blog._id,
      { ...blog, category: blog.categoryID },
      { new: true }
    )
    revalidatePath(path)

    return JSON.parse(JSON.stringify(updatedBlog))
  } catch (error) {
    handleError(error)
  }
}

type GetAllBlogssParams = {
  query: string;
  category: string;
  limit: number;
  page: number;
};

const populateBlog = (query: any) => {
  return query.populate({
    path: "category",
    model: Category,
    select: "_id name",
  });
};

const getCategoryByName = async (name: string) => {
  return Category.findOne({ name: { $regex: name, $options: "i" } });
};

// GET ALL Blog
export const getAllBlog = async ({
  query,
  limit = 6,
  page,
  category,
}: GetAllBlogssParams) => {
  try {
    await connectToDatabase();

    const titleCondition = query
      ? { title: { $regex: query, $options: "i" } }
      : {};
    const categoryCondition = category
      ? await getCategoryByName(category)
      : null;
    const conditions = {
      $and: [
        titleCondition,
        categoryCondition ? { category: categoryCondition._id } : {},
      ],
    };

    const skipAmount = (Number(page) - 1) * limit;
    const blogQuery = Blog.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const events = await populateBlog(blogQuery);
    
    const blogCount = await Blog.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(events)),
      totalPages: Math.ceil(blogCount / limit),
    };
  } catch (error) {
    handleError(error);
  }                             
};

type getRelatedBlogByCategoryProps = {
  categoryID: string,
  blogID: string,
  limit: number,
  page: number,
}

// GET RELATED EVENTS: EVENTS WITH SAME CATEGORY
export async function getRelatedBlogByCategory({
  categoryID,
  blogID,
  limit = 3,
  page = 1,
}: getRelatedBlogByCategoryProps) {
  try {
    await connectToDatabase()

    const skipAmount = (Number(page) - 1) * limit
    const conditions = { $and: [{ category: categoryID }, { _id: { $ne: blogID } }] }

    const eventsQuery = Blog.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)

    const events = await populateEvent(eventsQuery)
    const eventsCount = await Blog.countDocuments(conditions)

    return { data: JSON.parse(JSON.stringify(events)), totalPages: Math.ceil(eventsCount / limit) }
  } catch (error) {
    handleError(error)
  }
}