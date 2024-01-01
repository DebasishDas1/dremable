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

    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button type="submit" className="font-bold">Contact Us</Button>
                </SheetTrigger>
                <SheetContent className="bg-white">
                    <SheetHeader>
                        <SheetTitle>Let's have a talk</SheetTitle>
                        <SheetDescription>
                            We're here to assist you in creating the perfect event. Reach out to us with any inquiries, collaborations, or just to say hello!
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
                    <div className="flex flrx-col p-4">
                        <div className="pr-2 pl-2" ><Facebook /></div>
                        <div className="pr-2 pl-2" ><Instagram /></div>
                        <div className="pr-2 pl-2" ><LinkedIn /></div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Send Message</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default ContactForm