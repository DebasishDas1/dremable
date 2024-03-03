import PageTitle from '@/components/sheared/PageTitle'
import BlogPostContainers from '@/components/sheared/BlogPostContainers'
import type { Metadata } from 'next'
import { getAllBlog } from '@/lib/actions/blog.action';

export const metadata: Metadata = {
    title: 'Blogs - Dremable',
    description: 'Blogs - Dremable',
}

const Blog = async () => {
    const page = 1;
    const searchText = '';
    const category = '';

    const blogs = await getAllBlog({
        query: searchText,
        category,
        page: 1,
        limit: 6
    })

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col md:w-[65%] w-[90%] items-center'>
                <PageTitle title='Wedding Blog' />
                <h1 className='hidden'>Wedding Blog</h1>

                <BlogPostContainers
                    data={blogs?.data}
                    emptyTitle="No Blogs Found"
                    emptyStateSubtext="Come back later"
                    collectionType="All_Events"
                    limit={6}
                    page={page}
                    totalPages={blogs?.totalPages}
                />
            </div>
        </div>
    )
}

export default Blog;