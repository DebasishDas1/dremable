'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactElement } from "react";

type Props = {
    url: string
    title: string
    icon?: ReactElement
}

const NavItems = ({ url, title, icon }: Props) => {
    const pathname = usePathname().split('/')
    const showSubtitle = pathname.map(item => item.toLowerCase().replace(/\s+/g, '')).includes(title.toLowerCase().replace(/\s+/g, ''))

    const updatedTitle = title.replaceAll("_", " ")

    return (
        <Link href={url} className={`flex regular-16 cursor-pointer pb-5 items-center pt-2 ${showSubtitle ? 'font-black' : 'font-light'}`} >
            <button type="submit">
                <span className='mr-2'>
                    {icon}
                </span>
                {updatedTitle}
            </button>
        </Link>
    )
}

export default NavItems;
