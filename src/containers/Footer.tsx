import { Facebook, Instagram } from '@mui/icons-material';
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="wrapper text-stone-500 md:w-[75%]">
            <div className="pb-4">
                Celebrate love with Dremable, your partner in crafting dream weddings. From fairytale weddings to the romance of Darjeeling and soirées in the Sundarbans, discover India's finest wedding vendors at your doorstep. Say "Khub bhalo!" to your dream wedding in your Bengali wonderland. Our curated selection of photographers, planners, and more ensures every detail is a reflection of your love story. Whether it's the vibrant Howrah or the tranquil Hooghly, Dremable covers your vendors by the Ganga. Contact us for a free consultation, and let's plan your dream event effortlessly. With Dremable, your journey to a joyous union begins here. Happy Wedding!
            </div>
            <span className='text-xl' >Contact us</span>
            <div className="flex flrx-col pt-2 mb-4">
                <Link href={'https://www.facebook.com/profile.php?id=61555124971996&mibextid=eHce3h'} className={`cursor-pointer py-2 pl-2`} target="_blank">
                    <Facebook />
                </Link>
                <Link href={'https://www.instagram.com/dremablewedding?igsh=MTloaG1iaDUzMHdlNg=='} className={`cursor-pointer py-2 pl-2`} target="_blank">
                    <Instagram />
                </Link>
            </div>
            <div>
                Copyright © 2023 Dremable Inc. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer