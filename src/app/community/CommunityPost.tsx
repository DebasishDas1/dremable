'use client'
import { useState } from 'react';
import { ThumbUp, Comment } from '@mui/icons-material';
import Image from "next/image"

interface BlogPostProps {
    message: string;
    timestamp: string;
    imageUrl: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ message, timestamp, imageUrl }) => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);

    return (
        <div className="rounded-xl bg-white md:w-[60%] w-[100%] mx-auto mb-6 p-4 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{message}</h2>
            {/* <p className="text-gray-500 text-sm">{formattedDate}</p> */}
            {imageUrl &&
                <Image
                    src={imageUrl}
                    alt="logo"
                    width={1000}
                    height={1000}
                />
            }
            <div className="flex items-center py-3">
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
    );
};


export default BlogPost;
