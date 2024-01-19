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
    const imageUrl = true

    return (
        <div className="rounded-xl bg-white md:w-[60%] w-[100%] mx-auto mb-6 p-4 shadow-lg">
            <Link href={`/blog/${id}`} >
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            </Link>
            <div className='flex flex-row'>
                <h6 className="text-sm my-2 basis-3/4">
                    {description}
                </h6>
                <div className='basis-1/4 flex items-center blur-sm' >
                    {imageUrl &&
                        <Image
                            src={image}
                            alt="logo"
                            width={500}
                            height={500}
                        />
                    }
                </div>
            </div>
            <h6 className="text-sm my-1 text-stone-500">{formatDateTime(date).dateOnly}</h6>

            <div className="flex items-center mt-5">
                <button
                    className="flex items-center space-x-1"
                    onClick={() => setLikes(prevLikes => prevLikes + 1)}>
                    <ThumbUp />
                    <span>{likes}</span>
                </button>
                <button
                    className="ml-4 flex items-center space-x-1"
                    onClick={() => setComments(prevLikes => prevLikes + 1)}>
                    <Comment />
                    <span>{comments}</span>
                </button>
            </div>
        </div>
    )
}

export default BlogPost