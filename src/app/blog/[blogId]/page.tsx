import PageTitle from '@/components/sheared/PageTitle'
import { getBlogById } from '@/lib/actions/blog.action'
import { getCatagoryById } from '@/lib/actions/catagory.action'
import Image from 'next/image'
import { Place, Celebration, CalendarMonth, PhoneIphone, InsertLink } from '@mui/icons-material';
import { formatDateTime } from '@/lib/utils'
import Link from 'next/link';
import { text } from 'stream/consumers';
import { error } from 'console';

interface BlogDetailsPageProps {
    params: { blogId: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const BlogDetailsPage = async ({ params: { blogId } }: BlogDetailsPageProps) => {
    const blogDetails = await getBlogById(blogId)
    const catagoryetails = await getCatagoryById(blogDetails.category)

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col md:w-[65%] w-full items-center'>
                <PageTitle title={blogDetails.title} />
                <Image
                    src={blogDetails.imageUrl}
                    alt="hero image"
                    width={1000}
                    height={1000}
                    className="flex-center h-full min-h-[300px] bg-dark-3 flex overflow-hidden md:rounded-xl"
                />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-5">
                    <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700 flex items-center">
                        <Celebration className='mr-3' />{catagoryetails.name}
                    </p>
                    <p className="p-medium-16 rounded-full bg-blue-500/10 px-4 py-2.5 text-violate-500 lex items-center">
                        <Place className='mr-3' />{blogDetails.location}
                    </p>
                    <p className="p-medium-16 rounded-full bg-yellow-500/10 px-4 py-2.5 lex items-center">
                        <CalendarMonth className='mr-3' />{formatDateTime(blogDetails.date).dateOnly}
                    </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-5">
                    {
                        blogDetails.url &&
                        <Link href={blogDetails.url} className="p-medium-16 rounded-full bg-orange-500/10 px-4 py-2.5 lex items-center text-orange-700">
                            <InsertLink /> Ckeck it out
                        </Link>
                    }
                    {
                        blogDetails.phone &&
                        <p className="p-medium-16 rounded-full bg-purple-500/10 text-purple-700 px-4 py-2.5 lex items-center">
                            <PhoneIphone className='mr-3' />{blogDetails.phone}
                        </p>
                    }
                </div>
                <div className='m-4'>
                    <div dangerouslySetInnerHTML={{ __html: blogDetails.description }} />
                </div>
            </div>
        </div>
    )
};

export default BlogDetailsPage