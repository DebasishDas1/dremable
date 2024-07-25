"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useLayoutEffect } from "react";
import { Facebook, Instagram, X, WhatsApp } from "@mui/icons-material";
import Link from "next/link";
import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { toast } from "sonner";
import { asdContactUsEntry } from "@/actions/contactUs.action";

const ContactForm = () => {
  const [side, setSide] = useState<"bottom" | "right">("right");

  useLayoutEffect(() => {
    const updateSide = () => {
      setSide(window.innerWidth <= 768 ? "bottom" : "right");
    };
    window.addEventListener("resize", updateSide);
    updateSide();
    return () => {
      window.removeEventListener("resize", updateSide);
    };
  }, []);

  const formSchema = z.object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters.")
      .max(50, "Name must be at most 50 characters."),
    message: z
      .string()
      .min(10, "Message must be at least 10 characters.")
      .max(1000, "Message must be at most 1000 characters."),
    email: z.string().email("Invalid email address."),
    subject: z.string().min(3, "Subject must be at least 3 characters."),
  });

  // Infer the form data type from the schema
  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
      email: "",
      subject: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (values) => {
    toast.info(`Thanks ${values.name}, for filling out the form.`);

    try {
      const newEntry = await asdContactUsEntry({ entry: values });
      if (newEntry) {
        toast.success(
          `${values.name} form submitted, we appreciate you getting in touch with us.`
        );
      }
    } catch (error) {
      console.error(error);
      toast.error(`Error while submitting form`);
    }
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          {/* <Button type="submit">Contact Us</Button> */}
          <button className="hover:font-bold">Contact Us</button>
        </SheetTrigger>
        <SheetContent
          className="backdrop-blur-3xl bg-white/60 text-2xl"
          side={side}
        >
          <SheetHeader>
            <SheetTitle>Let`&apos;s have a talk</SheetTitle>
            <SheetDescription className="pb-5">
              We`&apos;re here to assist you in creating the perfect event.
              Reach out to us with any inquiries, collaborations, or just to say
              hello!
            </SheetDescription>
          </SheetHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Name</FormLabel>
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
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="input-field"
                        placeholder="dremablewedding@gmail.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        className="input-field"
                        placeholder="Subject"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="textarea"
                        placeholder="Please feel free to share your opinions."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Send Message</Button>
                </SheetClose>
              </SheetFooter>
            </form>
          </Form>
          <div className="flex flrx-col pt-2 mb-4 justify-end">
            <Link
              href={
                "https://www.facebook.com/profile.php?id=61555124971996&mibextid=eHce3h"
              }
              className={`cursor-pointer py-2 pl-2`}
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook />
            </Link>
            <Link
              href={
                "https://www.instagram.com/dremablewedding?igsh=MTloaG1iaDUzMHdlNg=="
              }
              className={`cursor-pointer py-2 pl-2`}
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram />
            </Link>
            <Link
              href={"https://twitter.com/dremablewedding"}
              className={`cursor-pointer py-2 pl-2`}
              target="_blank"
              aria-label="x"
            >
              <X />
            </Link>
            <Link
              href={"https://wa.me/918777790641"}
              className={`cursor-pointer py-2 pl-2`}
              target="_blank"
              aria-label="WhatsApp"
            >
              <WhatsApp />
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ContactForm;
