import { Document, Schema, model, models } from "mongoose";
import { number } from "zod";

export interface IVendor extends Document {
    _id: string;
    companyName: string;
    ownerName: string;
    yearsOfExperience?: string;
    companyAddress?: string;
    serviceLocation?: string;
    portfolioImagesUrl?: string;
    services: string;
    whatsApp: string;
}

const VendorSchema = new Schema({
    companyName: { type: String, required: true },
    ownerName: { type: String, required: true },
    yearsOfExperience: { type: String },
    companyAddress: { type: String },
    serviceLocation: { type: String },
    portfolioImagesUrl: { type: String },
    services: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    whatsApp: { type: String },
});

const Vendor = models.Vendor || model('Vendor', VendorSchema);

export default Vendor;