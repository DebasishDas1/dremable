import type { Metadata } from 'next'
import PostForm from './PostForm'
import PageTitle from '@/components/sheared/PageTitle'
import Posts from './Posts'

export const metadata: Metadata = {
    title: 'Blogs - EOD',
    description: 'Generated by create next app',
}

const blog: React.FC = () => {
    return (
        <div className='flex flex-col items-center'>
            <PageTitle title='Wedding Blog' />
            <PostForm />
            <Posts />
        </div>
    );
};

export default blog