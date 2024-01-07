import PageTitle from '@/components/sheared/PageTitle'
import BlogPostContainers from './BlogPostContainers'

const Blog = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col md:w-[65%] w-[90%] items-center'>
                <PageTitle title='Wedding Blog' />
                <BlogPostContainers />
            </div>
        </div>
    )
}

export default Blog;