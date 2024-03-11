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
        <div className="flex flex-col p-4 md:w-[80%] bg-white rounded-lg my-4 shadow-md">
            <h3 className="ml-2 text-lg md:text-xl font-semibold">{message}</h3>
            {imageUrl &&
                <Image
                    src={imageUrl}
                    alt="logo"
                    width={1000}
                    height={1000}
                />
            }
            <div className="flex items-center p-3 ">
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
