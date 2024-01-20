import { photographersData } from "@/components/Data"
import PageTitle from '@/components/sheared/PageTitle'
import MagiciansCard from '@/components/sheared/MagiciansCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Photographers - Dremable',
    description: 'Photographers - Dremable',
}

const Photographers = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col md:w-[65%] w-[85%] items-center'>
                <PageTitle title='Weading Photographers' />
                <div className='flex flex-wrap h-auto items-center justify-evenly'>
                    {
                        photographersData.map(provider => (
                            <MagiciansCard
                                key={provider.name}
                                name={provider.name}
                                contact={provider.contact}
                                address={provider.address}
                                url={provider.url}
                                reating={3}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Photographers