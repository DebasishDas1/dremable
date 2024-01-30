import Image from "next/image";
import { formatDateTime } from '@/lib/utils';
import Link from 'next/link';

type BlogPostProps = {
    title: string;
    description?: string;
    id: string;
    date: Date;
    image: string;
}

const BlogPost = ({ title, description, id, date, image }: BlogPostProps) => {
    const BlogPostTitle = title.split(' ').slice(0, 6).join(' ') + '...';
    const BlogPostDescription = description ? description.split(' ').slice(0, 30).join(' ') + ' ...' : "";

    return (
        <div className="rounded-xl bg-white md:w-[600px] w-full p-4 shadow-lg">
            <Link href={`/blog/${id}`}>
                <h2 className="text-2xl font-semibold mb-2">{BlogPostTitle}</h2>
            </Link>
            <div className='flex flex-row '>
                {description && (
                    <div className="text-sm my-2 basis-3/4">
                        <div dangerouslySetInnerHTML={{ __html: BlogPostDescription }} />
                    </div>
                )}
                {image && (
                    <div className='basis-1/4 flex items-center blur-sm' >
                        <Image
                            src={image}
                            alt="image"
                            width={250}
                            height={250}
                            className="w-full object-cover object-center"
                        />
                    </div>
                )}
            </div>
            <h6 className="text-sm my-1 text-stone-500">{formatDateTime(date).dateOnly}</h6>
        </div>
    );
}

export default BlogPost;
