import { Document, Schema, model, models } from "mongoose";

export interface IBlog extends Document {
  _id: string;
  title: string;
  description?: string;
  header?: string;
  content?: string;
  urlKey: string;
  location?: string;
  date: Date;
  imageUrl: string;
  phone: string;
  url?: string;
  category: { _id: string; name: string };
}

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    header: { type: String, required: true },
    content: { type: String },
    urlKey: { type: String, required: true },
    location: { type: String },
    date: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true },
    phone: { type: String },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const Blog = models.Blog || model<IBlog>("Blog", BlogSchema);

export default Blog;
