import BlogPost from './BlogPost'
import { IBlog } from '@/lib/database/models/blog.model'

type BlogPostContainersProps = {
    data: IBlog[],
    emptyTitle: string,
    emptyStateSubtext: string,
    collectionType?: 'Weeding' | 'birthday',
    limit: number,
    page: number | string,
    totalPages?: number
}

const BlogPostContainers = ({
    data,
    emptyTitle,
    emptyStateSubtext,
    collectionType,
    limit,
    page,
    totalPages,
}: BlogPostContainersProps) => {
    return (
        <>
            {data.length > 0 ?
                <div className="flex flex-col items-center gap-5">
                    {data.map((blog) => (
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
                : <div className='w-full bg-white flex items-center flex-col p-10 rounded-l shadow-lgg' >
                    <h1 className='p-bold-20 md:h5-bold'>{emptyTitle}</h1>
                    <p>{emptyStateSubtext}</p>
                </div>
            }
        </>
    )
}

export default BlogPostContainers
