import { photographersData } from "@/components/Data"
import PageTitle from '@/components/sheared/PageTitle'
import MagiciansCard from '@/components/sheared/MagiciansCard'
import type { Metadata } from 'next'
import PageBnifitOptions from '@/components/sheared/PageBnifitOptions'
import Title from "@/components/sheared/Title"

export const metadata: Metadata = {
    title: 'Best Wedding Photographers in Kolkata near me - Dremable',
    description: `Looking for Best Wedding Photographers in Kolkata? Dremable connects you with Kolkata's top Photographers expert in pre wedding & candid photography`,
}

const findPhotographer = [
    {
        banifitsTitle: `Know Your Vibe`,
        banifitsDescribe: `Are you drawn to classic elegance, romantic candids, or bold photojournalism? Define your style to choose photographers who resonate with you.`,
    },
    {
        banifitsTitle: `Explore Portfolios`,
        banifitsDescribe: ` Dive into portfolios to see if their aesthetics align with your vision. Pay attention to lighting, composition, and storytelling elements.`,
    },
    {
        banifitsTitle: `Consider Experience`,
        banifitsDescribe: ` Expertise matters! Look for photographers who have experience with your preferred style and wedding size.`,
    },
    {
        banifitsTitle: `Location & Availability`,
        banifitsDescribe: `Ensure they cover your region and are available on your chosen wedding date.`,
    },
    {
        banifitsTitle: `Meet & Connect`,
        banifitsDescribe: `Schedule consultations to discuss your ideas, budget, and expectations. See if you connect personally and feel comfortable communicating openly.`,
    },
]

const dreamPhotographer = [
    {
        banifitsTitle: `Curated Selection`,
        banifitsDescribe: `We handpick only the top wedding photographers in Kolkata, known for their professionalism, creativity, and exceptional service.`,
    },
    {
        banifitsTitle: `Diverse Styles`,
        banifitsDescribe: `Find the perfect match, whether you seek traditional elegance, artistic flair, or modern photojournalism.`,
    },
    {
        banifitsTitle: `Convenient Search`,
        banifitsDescribe: ` Easily compare profiles, portfolios, and pricing to find photographers who fit your style and budget.`,
    },
    {
        banifitsTitle: `Stress-Free Booking`,
        banifitsDescribe: `Contact multiple photographers with a single click, request quotes, and book directly through Dreamable.`,
    },
]

const toDoPhotographer = [
    {
        banifitsTitle: `Discuss your budget openly. Be upfront about your financial limitations to avoid surprises.`,
    },
    {
        banifitsTitle: `Ask about editing style and turnaround time. Get a clear understanding of their editing process and how long it will take to receive your photos.`,
    },
    {
        banifitsTitle: `Inquire about contracts and insurance. Ensure they have a formal contract outlining services and cancellation policies, and liability insurance for peace of mind.`,
    },
    {
        banifitsTitle: `Review their client testimonials. Read real experiences from couples to gauge their professionalism and client satisfaction.`,
    },
]

const Photographers = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col md:w-[65%] w-[85%] items-center'>
                <PageTitle title='Wedding Photographers in Kolkata' />
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
                <Title>Dreamable: Capture Timeless Memories with Your Perfect Wedding Photographer!</Title>
                Looking for best wedding photographers near you to capture the magic of your Dream wedding? Your search ends here! Dremable connects you with Kolkata&apos;s best wedding photographers, specializing in various styles, including Bengali wedding photography.
                <br /><br />
                Find your ideal match, discover breathtaking portfolios, and book with ease – from stunning portraits to candid moments, we ensure your story unfolds beautifully.
                <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">How to Find Your Perfect Wedding Photographer</div>
                <PageBnifitOptions banifits={findPhotographer} />
                <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">Dreamable Makes Finding Your Dream Photographer Easier</div>
                <PageBnifitOptions banifits={dreamPhotographer} />
                <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">Before You Say &quot;I Do&quot; to a Photographer</div>
                <PageBnifitOptions banifits={toDoPhotographer} />
                <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">Start Your Dream Today</div>
                Browse our directory of Kolkata&apos;s most talented wedding photographers and find your perfect match! With Dreamable by your side, you can focus on cherishing every moment while they capture timeless memories that will last a lifetime
            </div>
        </div>
    )
}

export default Photographers