import PageTitle from '@/components/sheared/PageTitle'
import BlogPostContainers from '@/components/sheared/BlogPostContainers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blogs - Dremable',
    description: 'Blogs - Dremable',
}

const Blog = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col md:w-[65%] w-[90%] items-center'>
                <PageTitle title='Wedding Blog' />
                <h1 className='hidden'>Wedding Blog</h1>
                <BlogPostContainers />
            </div>
        </div>
    )
}

export default Blog;