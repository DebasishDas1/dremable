import { plannerData } from "@/components/Data"
import PageTitle from '@/components/sheared/PageTitle'
import MagiciansCard from '@/components/sheared/MagiciansCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Planners - Dremable',
    description: 'Planners - Dremable',
}

const Planners = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col md:w-[65%] w-[85%] items-center'>
                <PageTitle title='Weading Planners' />
                <div className='flex flex-wrap h-auto items-center justify-evenly'>
                    {
                        plannerData.map(provider => (
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

export default Planners