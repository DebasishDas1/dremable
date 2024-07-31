import { Document, Schema, model, models } from "mongoose";

export interface visitorInterface extends Document {
  _id?: string;
  name: string;
  phone: string;
}

const visitorSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

export const Visitor =
  models.Visitor || model<visitorInterface>("Visitor", visitorSchema);
