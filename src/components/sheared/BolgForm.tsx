"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import DropDown from "./DropDown"
import FileUploder from "./FileUploder"
import BolgFormDescription from './BolgFormDescription'
import { useState } from "react"
import { LocationOn, CalendarMonth, Link } from '@mui/icons-material';
import DatePicker from "react-datepicker";
import { useUploadThing } from '@/lib/uploadthing'
import { createBlog } from '@/lib/actions/blog.action'
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation"

type BolgFormProps = {
    type: 'create' | 'update'
}

const formSchema = z.object({
    title: z.string().min(2, "Title must be at least 3 characters."),
    description: z.string().min(2, "Description must be at least 2 characters.")
        .max(10000, "Description must be at most 1000 characters."),
    location: z.string().min(2, "Location must be at least 3 characters.")
        .max(400, "Location must be at most 400 characters."),
    date: z.date(),
    imageUrl: z.string(),
    url: z.string().min(2, "Username must be at least 2 characters."),
    categoryID: z.string(),
})

const BolgForm = ({ type }: BolgFormProps) => {
    const [files, setFiles] = useState<File[]>([])
    const { startUpload } = useUploadThing('imageUploader')
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            description: '',
            location: '',
            date: new Date(),
            imageUrl: '',
            url: '',
            categoryID: '',
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        let uplodedImageUrl = values.imageUrl

        if (files.length > 0) {
            const uplodedImage = await startUpload(files)

            if (!uplodedImage) return

            uplodedImageUrl = uplodedImage[0].url
        }
        if (type === 'create') {
            try {
                const newBlog = await createBlog({
                    blog: { ...values, imageUrl: uplodedImageUrl },
                    path: '/profie'
                })
                if (newBlog) {
                    form.reset()
                    router.push(`/blog/${newBlog._id}`)
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className='bg-white w-full p-3 border-r-8 rounded-xl shadow-lg'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-5 md:flex-row">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input className="input-field" placeholder="Blog title" {...field} />
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
                                            onChabgeHandler={field.onChange}
                                            value={field.value}
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
                                    <FormControl className="h-72">
                                        <BolgFormDescription
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
                    </div>
                    <div className="flex flex-col gap-5 md:flex-row">
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <div className="flex-center h-[55px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                                            <LocationOn />
                                            <Input className="input-field" placeholder="Event loaction" {...field} />
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
                                        <div className="flex-center h-[55px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
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
                                        <div className="flex-center h-[55px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                                            <Link />
                                            <Input className="input-field" placeholder="Event url" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default BolgForm
