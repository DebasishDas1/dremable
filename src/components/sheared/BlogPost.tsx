'use client'
import { useState } from 'react';
import Image from "next/image"
import { ThumbUp, Comment } from '@mui/icons-material';
import { formatDateTime } from '@/lib/utils'
import Link from 'next/link'

type BlogPostProps = {
    title: string,
    description: string | undefined,
    id: string,
    date: Date;
    image: string;
}

const BlogPost = ({ title, description, id, date, image }: BlogPostProps) => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);

    return (
        <div className="rounded-xl bg-white md:w-[60%] w-[100%] mx-auto mb-6 p-4 shadow-lg">
            <Link href={`/blog/${id}`} >
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            </Link>
            <div className='flex flex-row '>
                <h6 className="text-sm my-2 basis-3/4">
                    {description}
                </h6>
                {
                    image &&
                    <div className='basis-1/4 flex items-center blur-sm' >
                        <Image
                            src={image}
                            alt="image"
                            width={250}
                            height={250}
                            className="w-full object-cover object-center"
                        />
                    </div>
                }
            </div>
            <h6 className="text-sm my-1 text-stone-500">{formatDateTime(date).dateOnly}</h6>
        </div>
    )
}

export default BlogPost