"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FileUploder from "./FileUploder";
import { useState } from "react";
import { toast } from "sonner";
import { useUploadThing } from "@/lib/uploadthing";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createVendor } from "@/lib/actions/vendor.action";

const formSchema = z.object({
  companyName: z.string().min(2, "Company Name must be at least 3 characters."),
  ownerName: z.string().min(2, "Owner's Name must be at least 3 characters."),
  yearsOfExperience: z
    .string()
    .min(2, "Owner's Name must be at least 3 characters."),
  companyAddress: z
    .string()
    .min(2, "Company Address must be at least 3 characters."),
  serviceLocation: z
    .string()
    .min(2, "Service Location must be at least 3 characters."),
  portfolioImagesUrl: z.string(),
  services: z.string({
    required_error: "Please select an services.",
  }),
  vendorDetailsPdf: z.string(),
  whatsApp: z.string(),
});

const RegisterForm = () => {
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("imageUploader");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      ownerName: "",
      yearsOfExperience: "",
      companyAddress: "",
      serviceLocation: "",
      portfolioImagesUrl: "",
      services: "",
      vendorDetailsPdf: "",
      whatsApp: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success(`Thanks ${values.ownerName} for filling the form`);

    let uplodedImageUrl = values.portfolioImagesUrl;

    if (files.length > 0) {
      const uplodedImage = await startUpload(files);
      if (!uplodedImage) return;
      uplodedImageUrl = uplodedImage[0].url;
    }

    try {
      const newVendor = await createVendor({
        vendor: { ...values, portfolioImagesUrl: uplodedImageUrl },
      });
      if (newVendor) {
        form.reset();
        toast.success(`Thanks ${newVendor.ownerName} entry added successfully`);
      }
    } catch (error) {
      console.log(error);
      toast.error(`Error on creating Rntry error: ${error}`);
    }
  }

  return (
    <div className="pt-10 w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="pl-2">Company Name</FormLabel>
                <FormControl>
                  <Input
                    className="input-field"
                    placeholder="Dremable"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ownerName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="pl-2">Owner Name</FormLabel>
                <FormControl>
                  <Input
                    className="input-field"
                    placeholder="Debasish Das"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whatsApp"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="pl-2">whatsApp</FormLabel>
                <FormControl>
                  <Input
                    className="input-field"
                    placeholder="8777790641"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="yearsOfExperience"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="pl-2">Year's of Experience</FormLabel>
                <FormControl>
                  <Input className="input-field" placeholder="2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="services"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Services</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="select-field">
                      <SelectValue placeholder="Please select an services" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Wedding Planning">
                      Wedding Planning
                    </SelectItem>
                    <SelectItem value="Photography">Photography</SelectItem>
                    <SelectItem value="Makeup Artists">
                      Makeup Artists
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyAddress"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="pl-2">Company Address</FormLabel>
                <FormControl>
                  <Input
                    className="input-field"
                    placeholder="Company Address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serviceLocation"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="pl-2">Service Location</FormLabel>
                <FormControl>
                  <Input
                    className="input-field"
                    placeholder="Kolkata"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="portfolioImagesUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <FileUploder
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="vendorDetailsPdf"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="pl-2">
                  Your price & package Excel or PDF
                </FormLabel>
                <FormControl>
                  <Input className="input-field" id="file" type="file" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
