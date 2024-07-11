import { Document, Schema, model, models } from "mongoose";

export interface IContactUs extends Document {
  _id: string;
  name: string;
  message: string;
  email: string;
  subject: string;
}

const ContactUsSchema = new Schema(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

export const ContactUs =
  models.ContactUs || model<IContactUs>("ContactUs", ContactUsSchema);
