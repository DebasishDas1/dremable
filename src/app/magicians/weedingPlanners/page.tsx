import { plannerData } from "@/components/Data"
import PageTitle from '@/components/sheared/PageTitle'
import MagiciansCard from '@/components/sheared/MagiciansCard'
import PageBnifitOptions from '@/components/sheared/PageBnifitOptions'
import Title from "@/components/sheared/Title"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Wedding Planners in Kolkata |Get Best Wedding Planner-Dremable',
    description: 'Searching for the Best Wedding Planner in Kolkata ? Dremable connects you with top Marriage planners in Kolkata, making your dream wedding a reality.',
}

const chooseDreamable = [
    {
        banifitsTitle: `Stress-Free Bliss`,
        banifitsDescribe: 'Our expert planners handle everything,from venue selection to vendor management, allowing you to savor the excitement',
    },
    {
        banifitsTitle: `Expertise You Can Trust`,
        banifitsDescribe: `We meticulously curate a network of Kolkata's most qualified and experienced wedding planners. Rest assured, your wedding is in the hands of true professionals.`,
    },
    {
        banifitsTitle: `Tailored to Your Love Story`,
        banifitsDescribe: 'No two weddings are alike. Our planners tailor your experience to your unique style, preferences, and budget. Whether you dream of a grand Bengali celebration or an intimate garden soirée, we bring your vision to life authentically.',
    },
    {
        banifitsTitle: `Local Knowledge, Global Vision`,
        banifitsDescribe: 'Our planners are deeply embedded in the Kolkata wedding scene, ensuring smooth navigation of local traditions and vendors. But their expertise extends beyond borders, drawing inspiration from global trends to create truly unique experiences.',
    },
    {
        banifitsTitle: `Abundant Choice, Seamless Search`,
        banifitsDescribe: 'Discover our diverse directory of top Kolkata planners. Compare profiles, packages, and pricing to find the perfect match for your needs. With just a few clicks, connect with multiple planners, request quotes, and schedule consultations.',
    },
]

const rightPlanner = [
    {
        banifitsTitle: `Experience`,
        banifitsDescribe: 'Ask about their specific expertise with your desired style and budget.',
    },
    {
        banifitsTitle: `Portfolio`,
        banifitsDescribe: 'Request to see their portfolio and inquire about weddings similar to yours.',
    },
    {
        banifitsTitle: `Communication Style`,
        banifitsDescribe: 'Ensure they align with your communication preferences and accessibility needs.',
    },
    {
        banifitsTitle: `Vendor Management`,
        banifitsDescribe: 'Understand their approach to vendor selection and how they handle contracts.',
    },
    {
        banifitsTitle: `Contingency Planning`,
        banifitsDescribe: 'Discuss their strategies for unforeseen circumstances, ensuring peace of mind.',
    },
]

const youAvoid = [
    {
        banifitsTitle: `Budget Busting`,
        banifitsDescribe: 'Our planners guide you in creating a realistic budget and prevent impulsive overspending.',
    },
    {
        banifitsTitle: `Vendor Drama`,
        banifitsDescribe: 'They navigate vendor selection and communication, ensuring reliable and professional services.',
    },
    {
        banifitsTitle: `Planning Paralysis`,
        banifitsDescribe: 'They break down the process into manageable steps, keeping you on track and stress-free.',
    },
    {
        banifitsTitle: `Logistics Lapses`,
        banifitsDescribe: 'They handle all logistical details, from permits to transportation, ensuring smooth execution.',
    },
    {
        banifitsTitle: `Missed Moments`,
        banifitsDescribe: 'They help you prioritize and delegate tasks, freeing you to savor the precious moments.',
    },
]


const weedingPlanners = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col md:w-[65%] w-[85%] items-center'>
                <PageTitle title='Wedding Planners in Kolkata' />
                <h1 className='hidden'>Wedding Planners in Kolkata</h1>
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
                <Title> Dremable : Dream Weddings Begin with Your Perfect Wedding Planners !</Title>
                Search for wedding planners in Kolkata or Bengali wedding planner in Kolkata and get overwhelmed? Dremable takes the stress out of finding the best wedding planner in Kolkata, turning your dream wedding into a reality.
                <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">Why Choose Dremable ?</div>
                <PageBnifitOptions banifits={chooseDreamable} />
                <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">Say &quot;I Do&quot; to the Right Planner</div>
                Wondering how to choose the best Marriage planner in Kolkata? We&apos;ve got you covered! Ask these crucial questions
                <PageBnifitOptions banifits={rightPlanner} />
                <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">Mistakes a Marriage Planner Helps You Avoid</div>
                <PageBnifitOptions banifits={rightPlanner} />
                <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">Start Your Dream Today</div>
                Browse our directory of Kolkata&apos;s finest wedding planners and find your perfect match! With Dremable by your side, your Dream wedding unfolds flawlessly, allowing you to truly revel in the magic of your happily ever after.
            </div>
        </div>
    )
}

export default weedingPlanners