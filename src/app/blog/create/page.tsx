import PageTitle from '@/components/sheared/PageTitle'
import BolgForm from '@/components/sheared/BolgForm'

const CraeteBlog = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col md:w-[65%] w-[90%] items-center'>
                <PageTitle title='Create Wedding Blog' />
                <h1 className='hidden'>Create Wedding Blog</h1>
                <BolgForm type='create' />
            </div>
        </div>
    )
}

export default CraeteBlog