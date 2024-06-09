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
import { Facebook, Instagram, X } from "@mui/icons-material";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
      email: "",
      subject: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success(
      `Thanks ${values.name}, we appreciate you getting in touch with us.`
    );
  }

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button type="submit" className="font-bold">
            Contact Us
          </Button>
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
                    <FormControl>
                      <>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Debasish Das"
                          {...field}
                        />
                      </>
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
                    <FormControl>
                      <>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          placeholder="abc@gmail.com"
                          {...field}
                        />
                      </>
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
                    <FormControl>
                      <>
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="Subject" {...field} />
                      </>
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
                    <FormControl>
                      <>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="abc@gmail.com"
                          {...field}
                        />
                      </>
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
            >
              <Facebook />
            </Link>
            <Link
              href={
                "https://www.instagram.com/dremablewedding?igsh=MTloaG1iaDUzMHdlNg=="
              }
              className={`cursor-pointer py-2 pl-2`}
              target="_blank"
            >
              <Instagram />
            </Link>
            <Link
              href={"https://twitter.com/dremablewedding"}
              className={`cursor-pointer py-2 pl-2`}
              target="_blank"
            >
              <X />
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ContactForm;
