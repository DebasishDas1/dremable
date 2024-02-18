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
    const showSubtitle = pathname.includes(title.toLowerCase());

    return (
        <Link href={url} className={`flex regular-16 cursor-pointer pb-5 items-center pt-2 font-bold ${showSubtitle ? 'text-black' : 'text-stone-500'}`} >
            <button type="submit">
                <span className='mr-2'>
                    {icon}
                </span>
                {title}
            </button>
        </Link>
    )
}

export default NavItems;
