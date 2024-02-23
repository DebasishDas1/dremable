import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="wrapper text-stone-500 md:w-[75%]">
            <div className="pb-4">
                Celebrate love with Dremable, your partner in crafting dream weddings. From fairytale weddings to the romance of Darjeeling and soirées in the Sundarbans, discover India`&apos;s finest wedding vendors at your doorstep. Say `&apos;Khub bhalo!`&apos; to your dream wedding in your Bengali wonderland. Our curated selection of photographers, planners, and more ensures every detail is a reflection of your love story. Whether it`&apos;s the vibrant Howrah or the tranquil Hooghly, Dremable covers your vendors by the Ganga. Contact us for a free consultation, and let`&apos;s plan your dream event effortlessly. With Dremable, your journey to a joyous union begins here. Happy Wedding!
            </div>
            <span className='text-xl' >Contact us</span>
            <div className="flex flrx-col pt-1 mb-1">
                <Link href={'https://www.facebook.com/profile.php?id=61555124971996&mibextid=eHce3h'} className={`cursor-pointer py-1 pl-1`} target="_blank">
                    <Facebook />
                </Link>
                <Link href={'https://www.instagram.com/dremablewedding?igsh=MTloaG1iaDUzMHdlNg=='} className={`cursor-pointer py-1 pl-1`} target="_blank">
                    <Instagram />
                </Link>
                <Link href={'https://twitter.com/dremablewedding'} className={`cursor-pointer py-1 pl-1`} target="_blank">
                    <Twitter />
                </Link>
            </div>
            <div>
                Copyright © 2024 Dremable Inc. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer