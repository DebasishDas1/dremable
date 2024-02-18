'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react'
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import Link from "next/link"
import { FormEvent } from 'react';

const ContactForm = () => {
    const [customerData, setCustomerData] = useState({
        name: '',
        email: '',
        message: ''
    })

    interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {
        target: HTMLInputElement;
    }

    const updateCustomerData = (e: InputChangeEvent) => {
        const { value, id } = e.target

        setCustomerData(oldData => {
            return {
                ...oldData,
                [id]: value
            }
        })
    }

    const handelSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(customerData);

        setCustomerData({
            name: '',
            email: '',
            message: ''
        });
    }

    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button type="submit" className="font-bold">Contact Us</Button>
                </SheetTrigger>
                <SheetContent className="bg-white">
                    <SheetHeader>
                        <SheetTitle>Let`&apos;s have a talk</SheetTitle>
                        <SheetDescription>
                            We`&apos;re here to assist you in creating the perfect event. Reach out to us with any inquiries, collaborations, or just to say hello!
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right"> Name </Label>
                            <Input
                                id="name"
                                className="col-span-3"
                                value={customerData.name}
                                onChange={updateCustomerData}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right"> Email </Label>
                            <Input
                                id="email"
                                className="col-span-3"
                                value={customerData.email}
                                onChange={updateCustomerData}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="message" className="text-right"> Message </Label>
                            <Input
                                id="message"
                                className="col-span-3"
                                value={customerData.message}
                                onChange={updateCustomerData}
                            />
                        </div>
                    </div>
                    <div className="flex flrx-col pt-2 mb-4 justify-end">
                        <Link href={'https://www.facebook.com/profile.php?id=61555124971996&mibextid=eHce3h'} className={`cursor-pointer py-2 pl-2`} target="_blank">
                            <Facebook />
                        </Link>
                        <Link href={'https://www.instagram.com/dremablewedding?igsh=MTloaG1iaDUzMHdlNg=='} className={`cursor-pointer py-2 pl-2`} target="_blank">
                            <Instagram />
                        </Link>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button onClick={handelSubmit} type="submit">Send Message</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default ContactForm