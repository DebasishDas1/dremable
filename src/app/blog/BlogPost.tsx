'use client'
import { useState } from 'react';
import { ThumbUp, Comment } from '@mui/icons-material';

interface BlogPostProps {
    message: string;
    timestamp: string;
    imageUrl: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ message, timestamp, imageUrl }) => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);

    // Extract seconds from the timestamp string and convert to a number
    // const matchArray = timestamp.match(/\d+/);

    // if (!matchArray || matchArray.length === 0) {
    //     console.error('Invalid timestamp format:', timestamp);
    //     return null; // or handle the error in your preferred way
    // }

    // const timestampInSeconds = parseInt(matchArray[0], 10);
    // const dateObject = new Date(timestampInSeconds * 1000); // Convert seconds to milliseconds

    // const formattedDate = dateObject.toLocaleString();

    return (
        <div className="rounded-lg bg-white md:w-[45%] mx-auto my-4 p-4 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{message}</h2>
            {/* <p className="text-gray-500 text-sm">{formattedDate}</p> */}
            {imageUrl && <img src={imageUrl} alt="Post" />}
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
