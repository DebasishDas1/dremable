import { Document, Schema, model, models } from "mongoose";

export interface IVendor extends Document {
  _id: string;
  vName: string;
  vEmail: string;
  vWhatsApp: string;
  vExperience: string;
  vCompanyName: string;
  vCompanyAddress: string;
  vService: string;
  vServiceLocationList: string[];
  vImagesUrlList?: string[]; // Array of strings
  vDetailsPdf?: string;
}

const VendorSchema = new Schema({
  vName: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    unique: true,
  },
  vEmail: { type: String, required: [true, "Email is required"], unique: true },
  vWhatsApp: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  vExperience: { type: String, required: true },
  vCompanyName: { type: String, required: true },
  vCompanyAddress: { type: String, required: true },
  vService: { type: String, required: true },
  vServiceLocationList: { type: [String], required: true },
  vImagesUrlList: { type: [String] }, // Array of strings
  vDetailsPdf: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const Vendor = models.Vendor || model("Vendor", VendorSchema);
