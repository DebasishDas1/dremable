"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import DropDown from "./DropDown";
import { FileUploader } from "./FileUploader";
import BlogFormContent from "./BlogFormContent";
import { LocationOn, CalendarMonth, Link } from "@mui/icons-material";
import DatePicker from "react-datepicker";
// import { useUploadThing } from "@/lib/uploadthing";
import { createBlog, updateBlog } from "@/actions/blog.action";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { IBlog } from "@/models";

type BlogFormProps = {
  type: "Create" | "Update";
  oldBlog?: IBlog;
};

const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 3 characters."),
  description: z
    .string()
    .min(2, "Description must be at least 2 characters.")
    .max(1000, "Description must be at most 1000 characters."),
  urlKey: z.string().min(2, "Title must be at least 3 characters."),
  header: z.string().min(2, "header must be at least 3 characters."),
  content: z
    .string()
    .min(2, "Content must be at least 2 characters.")
    .max(100000, "Content must be at most 1000 characters."),
  location: z
    .string()
    .min(2, "Location must be at least 3 characters.")
    .max(400, "Location must be at most 400 characters."),
  date: z.date(),
  imageUrl: z.string(),
  url: z.string().min(2, "Username must be at least 2 characters."),
  categoryID: z.string(),
});

const BlogForm = ({ type, oldBlog }: BlogFormProps) => {
  const blogId = oldBlog ? oldBlog._id : "";
  const router = useRouter();

  const blogDefaultValues = {
    title: "",
    description: "",
    urlKey: "",
    header: "",
    content: "",
    location: "",
    date: new Date(),
    imageUrl: "",
    url: "",
    categoryID: "",
  };

  const initialValues =
    oldBlog && type === "Update"
      ? {
          ...oldBlog,
          date: new Date(oldBlog.date),
        }
      : blogDefaultValues;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.info("Blog data submitted please wait");

    let uploadedImageUrl = values.imageUrl;

    if (type === "Update") {
      if (blogId === "") {
        router.back();
        return;
      }

      try {
        const updatedBlog = await updateBlog({
          blog: { ...values, imageUrl: uploadedImageUrl, _id: blogId },
          path: `/blog`,
        });
        if (updatedBlog) {
          form.reset();
          router.push(`/blog/${updatedBlog.urlKey}`);
          toast.success(`Blog updated with title : ${updatedBlog.title}`);
        }
      } catch (error) {
        console.log(error);
        toast.error(`Error on updating Blog error: ${error}`);
      }
    }

    if (type === "Create") {
      try {
        const newBlog = await createBlog({
          blog: { ...values, imageUrl: uploadedImageUrl },
          path: "/blog",
        });
        if (newBlog) {
          form.reset();
          router.push(`/blog/${newBlog.urlKey}`);
          toast.success(`Blog created with title : ${newBlog.title}`);
        }
      } catch (error) {
        console.log(error);
        toast.error(`Error on creating Blog error: ${error}`);
      }
    }
  }

  return (
    <div className="bg-white w-full p-3 border-r-8 rounded-xl shadow-lg">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="urlKey"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="input-field"
                      placeholder="Blog url key"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="input-field"
                      placeholder="Blog title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="input-field"
                      placeholder="Blog description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="header"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="input-field"
                      placeholder="Blog header"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryID"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <DropDown
                      onChangeHandler={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <BlogFormContent
                    onFieldChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <FileUploader
                    onFieldChange={field.onChange}
                    fileList={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[55px] w-full overflow-hidden rounded-lg bg-gray-50 px-4 py-2">
                      <LocationOn />
                      <Input
                        className="input-field"
                        placeholder="Blog location"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[55px] w-full overflow-hidden rounded-lg bg-gray-50 px-4 py-2">
                      <CalendarMonth />
                      <DatePicker
                        selected={field.value}
                        onChange={(date: Date) => field.onChange(date)}
                        showTimeSelect
                        timeInputLabel="Time:"
                        wrapperClassName="datePicker"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[55px] w-full overflow-hidden rounded-lg bg-gray-50 px-4 py-2">
                      <Link />
                      <Input
                        className="input-field"
                        placeholder="Blog url"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">{type} event</Button>
        </form>
      </Form>
    </div>
  );
};

export default BlogForm;
