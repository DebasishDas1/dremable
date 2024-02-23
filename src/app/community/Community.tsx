'use client'
import { collection, addDoc, getFirestore, query, orderBy } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import CommunityPost from './CommunityPost';

const Post = () => {
    const q = query(collection(getFirestore(db.app), 'posts'), orderBy('timestamp', 'desc'));
    const [value, loading, error] = useCollection(q);

    if (loading) {
        return <p className='p-10'>Loading...</p>;
    }

    if (error) {
        return <p className='p-5' >Error: {error.message}</p>;
    }

    if (!value) {
        return <p className='p-5' >No data available.</p>;
    }

    return (
        <div className='md:w-[65%] w-[85%] flex items-center flex-col'>
            {value.docs.map((post) => {
                const { id, message, timestamp, imageUrl } = post.data(); // Access the data using .data()
                return (
                    <CommunityPost
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
