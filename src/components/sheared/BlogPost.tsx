'use client'

import Image from "next/image"
import { formatDateTime } from '@/lib/utils'
import Link from 'next/link'

type BlogPostProps = {
    title: string,
    description: string | undefined,
    id: string,
    date: Date;
    image: string;
    hasOrderLink?: boolean,
}

const BlogPost = ({ title, description, id, date, image }: BlogPostProps) => {
    // Function to limit description to 100 words
    const limitDescription = (desc: string | undefined): string | undefined => {
        if (!desc) return undefined;
        const words = desc.split(" ");
        if (words.length > 60) {
            return words.slice(0, 60).join(" ") + "...";
        }
        return desc;
    };

    const limitedDescription = limitDescription(description);

    return (
        <div className="group relative flex flex-col md:min-h-[250px] max-w-[600px] overflow-hidden rounded-xl bg-white">
            <Link
                href={`/blog/${id}`}
                className="flex-center flex-grow bg-cover bg-center md:hidden h-[120px] relative"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                {/* Content inside the Link */}
            </Link>

            <div className="p-4">
                <Link href={`/blog/${id}`} >
                    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                </Link>
                <div className='flex flex-row '>
                    {limitedDescription && (
                        <div className="text-sm my-2 mr-2 md:basis-3/4">
                            <div dangerouslySetInnerHTML={{ __html: limitedDescription }} />
                        </div>
                    )}
                    {image && (
                        <div className='basis-1/4 md:flex items-center blur-sm hidden' >
                            <Image
                                src={image}
                                alt="image"
                                width={250}
                                height={250}
                                className="w-full object-cover object-center"
                            />
                        </div>
                    )}
                </div>
                <h6 className="text-sm my-1 text-stone-500">{formatDateTime(date).dateOnly}</h6>
            </div>
        </div>
    )
}

export default BlogPost
