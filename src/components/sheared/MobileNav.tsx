'use client'

import { useState } from 'react';
import { nav_options, nav_sub_options } from '@/components/constants'
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetFooter } from "@/components/ui/sheet"
import { Home, ArrowDropDown, Menu, AutoFixHigh } from '@mui/icons-material';
import NavItems from './NavItems'
import ContactForm from '@/containers/ContactForm'

const MobileNav = () => {
    const [showSubOptions, setShowSubOptions] = useState(false)

    const handleMagiciansButton = () => {
        setShowSubOptions(okdState => !okdState)
    }

    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Menu className="inline-block cursor-pointer lg:hidden" />
                </SheetTrigger>
                <SheetContent className="backdrop-blur-md bg-white/30 text-2xl">
                    <NavItems url='/' title='Home' icon={<Home />} />
                    <div
                        className={`flex regular-16 flexCenter cursor-pointer pb-5 items-center pt-2 font-bold  ${(showSubOptions) ? 'text-black' : 'text-stone-500 '}`}
                        onClick={handleMagiciansButton}
                    >
                        <div className='mr-2'><AutoFixHigh /> </div>
                        Magicians
                        <ArrowDropDown />
                    </div>
                    {
                        showSubOptions &&
                        <div >
                            {nav_sub_options.map((option) => (
                                <SheetClose asChild>
                                    <NavItems
                                        key={option.linkUrl}
                                        url={option.linkUrl}
                                        title={option.name}
                                        icon={option.icon}
                                        type="submit"
                                    />
                                </SheetClose>

                            ))}
                        </div>

                    }
                    {nav_options
                        .filter(option => option.name !== 'Magicians')
                        .map(option => (
                            <SheetClose asChild>
                                <NavItems
                                    key={option.linkUrl}
                                    url={option.linkUrl}
                                    title={option.name}
                                    icon={option.icon}
                                    type="submit"
                                />
                            </SheetClose>

                        ))}
                    <ContactForm />
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav
