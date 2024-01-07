import PageTitle from '@/components/sheared/PageTitle'

interface BlogDetailsPageProps {
    props: {
        blogId: string;
    }

}

const BlogDetailsPage = ({ props }: BlogDetailsPageProps) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col md:w-[65%] w-[85%] items-center'>
                <PageTitle title='Wedding Blog' />
                {props.blogId}
            </div>
        </div>
    )
}

export default BlogDetailsPage