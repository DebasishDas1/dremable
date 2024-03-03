'use client'

import { usePathname } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"
import logo from '../../public/longLogo.png'
import { nav_options, nav_sub_options } from '@/components/constants'
import MobileNav from '@/components/sheared/MobileNav'
import NavItems from '@/components/sheared/NavItems'
import ContactForm from '@/containers/ContactForm'

const NavBer = () => {
    const pathname = usePathname().split('/')
    const showSubtitle = pathname.includes("magicians");

    return (
        <div className='sticky top-0 md:px-10 px-4 backdrop-blur-3xl bg-white/30 text-xl z-50'>
            <div className='flex items-center justify-between'>
                <Link href='/' className='flex-shrink-0'>
                    <Image
                        src={logo}
                        alt="logo"
                        width={150}
                        height={60}
                    />
                </Link>
                <ul className="hidden gap-12 md:flex">
                    {nav_options.map(option => (
                        <NavItems
                            key={option.linkUrl}
                            url={option.linkUrl}
                            title={option.name}
                            icon={option.icon}
                        />
                    ))}
                </ul>
                <div className="md:flex hidden">
                    <ContactForm />
                </div>
                <MobileNav />
            </div>
            {
                showSubtitle &&
                <div className='items-center justify-center gap-20 hidden md:flex'>
                    {nav_sub_options.map(option => (
                        <NavItems
                            key={option.linkUrl}
                            url={option.linkUrl}
                            title={option.name}
                            icon={option.icon}
                        />
                    ))}
                </div>
            }
        </div>
    );
};


export default NavBer