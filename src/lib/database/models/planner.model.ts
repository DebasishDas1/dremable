import { Document, Schema, model, models } from "mongoose";

export interface IPlanner extends Document {
    _id: string;
    title: string;
    description?: string;
    location?: string;
    createdAt: Date;
    imageUrl: string;
    phone: string;
    url?: string;
    category: { _id: string, name: string }
}

const PlannerSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String },
    phone: { type: String },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
})

const Planner = models.Event || model('Event', PlannerSchema);

export default Planner;