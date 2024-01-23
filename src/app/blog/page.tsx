import PageTitle from '@/components/sheared/PageTitle'
import BlogPostContainers from '@/components/sheared/BlogPostContainers'
import { getAllBlog } from '@/lib/actions/blog.action'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blogs - Dremable',
    description: 'Blogs - Dremable',
}

const Blog = async () => {
    const blogs = await getAllBlog()

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col md:w-[65%] w-[90%] items-center'>
                <PageTitle title='Wedding Blog' />
                <BlogPostContainers
                    data={blogs}
                    emptyTitle="No Blogs Found"
                    emptyStateSubtext="Come back later"
                    collectionType='Weeding'
                    limit={6}
                    page={1}
                    totalPages={2}
                />
            </div>
        </div>
    )
}

export default Blog;