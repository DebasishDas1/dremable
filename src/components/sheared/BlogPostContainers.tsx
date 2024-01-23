import BlogPost from './BlogPost';
import { IBlog } from '@/lib/database/models/blog.model';
import { getAllBlog } from '@/lib/actions/blog.action';

const BlogPostContainers = async () => {
    try {
        const blogs: IBlog[] = await getAllBlog();

        if (blogs.length > 0) {
            return (
                <div className="flex flex-col items-center gap-5">
                    {blogs.map(blog => (
                        <BlogPost
                            key={blog._id}
                            title={blog.title}
                            description={blog.description}
                            id={blog._id}
                            date={blog.date}
                            image={blog.imageUrl}
                        />
                    ))}
                </div>
            );
        } else {
            return (
                <div className='w-full bg-white flex items-center flex-col p-10 rounded-l shadow-lg'>
                    <h1 className='p-bold-20 md:h5-bold'>No Blogs Found</h1>
                    <p>Come back later</p>
                </div>
            );
        }
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return null;
    }
};

export default BlogPostContainers;
