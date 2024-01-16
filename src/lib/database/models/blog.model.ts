import { Document, Schema, model, models } from "mongoose";

export interface IBlog extends Document {
    _id: string;
    title: string;
    description?: string;
    location?: string;
    date: Date;
    imageUrl: string;
    phone: string;
    url?: string;
    category: { _id: string, name: string }
}

const BlogrSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    date: { type: Date, default: Date.now },
    imageUrl: { type: String },
    phone: { type: String },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
})

const blog = models.Blog || model('Blog', BlogrSchema);

export default blog;