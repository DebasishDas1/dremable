'use client'
import { collection, addDoc, getFirestore, query, orderBy } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import BlogPost from './BlogPost';

const Post = () => {
    const q = query(collection(getFirestore(db.app), 'posts'), orderBy('timestamp', 'desc'));
    const [value, loading, error] = useCollection(q);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!value) {
        return <p>No data available.</p>;
    }

    return (
        <div className='w-[100%]'>
            {value.docs.map((post) => {
                const { id, message, timestamp, imageUrl } = post.data(); // Access the data using .data()
                return (
                    <BlogPost
                        key={post.id}
                        message={message}
                        timestamp={timestamp}
                        imageUrl={imageUrl}
                    />
                );
            })}
        </div>
    );
};

export default Post;
