import { artistsData } from "@/components/Data"
import PageTitle from '@/components/sheared/PageTitle'
import MagiciansCard from '@/components/sheared/MagiciansCard'
import type { Metadata } from 'next'
import PageBnifitOptions from '@/components/sheared/PageBnifitOptions'
import Title from "@/components/sheared/Title"

export const metadata: Metadata = {
    title: 'Bridal Makeup Artist in Kolkata |Best Makeup near me-Dremable',
    description: `Dream of picture-perfect Wedding glow? Dremable connects you with Kolkata's best bridal makeup artists  Discover best makeup artists with top Ratings`,
}

const choseDremable = [
    {
        banifitsTitle: `Stress-Free Planning`,
        banifitsDescribe: ' Leave the makeup worries to us! Explore profiles, compare artistry, and book confidently, knowing all our artists are vetted for professionalism and talent.',
    },
    {
        banifitsTitle: `Curated Expertise`,
        banifitsDescribe: 'We handpick only the best bridal makeup artists in Kolkata, renowned for their technical skills, understanding of skin tones, and ability to create personalized looks.',
    },
    {
        banifitsTitle: `Diverse Styles & Budgets`,
        banifitsDescribe: 'Whether you dream of timeless elegance, bold experimentation, or airbrush perfection, find an artist whose style aligns with your vision and complements your budget.',
    },
    {
        banifitsTitle: `Convenience at Your Fingertips`,
        banifitsDescribe: 'Browse portfolios, compare services, and request quotes with a single click. Connect with multiple artists, read client testimonials, and book your dream makeup artist seamlessly.',
    },
]

const makeupArtist = [
    {
        banifitsTitle: `Know Your Vibe`,
        banifitsDescribe: 'Define your desired look – classic, glamorous, natural, or artistic? Explore portfolios to find artists who resonate with your style.',
    },
    {
        banifitsTitle: `Review Experience`,
        banifitsDescribe: `Consider an artist's experience with your preferred style, skin type, and wedding size. Look for past client weddings similar to yours.`,
    },
    {
        banifitsTitle: `Location & Availability`,
        banifitsDescribe: 'Ensure they cater to your region and are available on your chosen wedding date.',
    },
    {
        banifitsTitle: `Schedule Consultations`,
        banifitsDescribe: 'Discuss your vision, budget, and any concerns. See if you connect personally and feel comfortable trusting their expertise.',
    },
]

const artistEasier = [
    {
        banifitsTitle: `Detailed Profiles`,
        banifitsDescribe: `Read each artist's bio, qualifications, experience, and featured looks to gain a clear understanding of their artistic approach.`,
    },
    {
        banifitsTitle: `Transparent Pricing`,
        banifitsDescribe: 'Compare service packages and pricing options to find an artist who fits your budget and needs.',
    },
    {
        banifitsTitle: `Client Testimonials`,
        banifitsDescribe: 'Gain valuable insights by reading real experiences from brides who entrusted their makeup to our artists.',
    },
    {
        banifitsTitle: `Secure Booking`,
        banifitsDescribe: 'Send inquiries and book your chosen artist directly through Dremable with secure payment options.',
    },
]

const iDoArtist = [
    {
        banifitsTitle: `Be upfront about your budget. Open communication helps artists recommend suitable packages and avoid surprises.`,
    },
    {
        banifitsTitle: `Discuss your allergies and skin concerns. Ensure the artist has experience working with your specific needs.`,
    },
    {
        banifitsTitle: `Bring inspiration photos. Share visuals of looks you love for clear communication and reference.`,
    },
    {
        banifitsTitle: `Schedule a trial run. This allows you to test the artist's skills, discuss any adjustments, and build confidence for your wedding day.`,
    },
    {
        banifitsTitle: `Ask about their hygiene practices. Ensure sanitation and product quality are a priority.`,
    },
]

const collaboration = [
    {
        banifitsTitle: `Communicate your vision clearly. The more details you share, the better the artist can translate your dream into reality.`,
    },
    {
        banifitsTitle: `Be open to suggestions. Experienced artists can offer valuable insights to enhance your look.`,
    },
    {
        banifitsTitle: `Relax and trust the process. Let the artist do their magic and enjoy the pampering experience.`,
    },
]

const makeupArtists = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col md:w-[65%] w-[85%] items-center'>
                <PageTitle title='Bridal makeup artists in kolkata' />
                <h1 className='hidden'>Bridal makeup artists in kolkata</h1>
                <div className='flex flex-wrap h-auto items-center justify-evenly'>
                    {
                        artistsData.map(provider => (
                            <MagiciansCard
                                key={provider.name}
                                name={provider.name}
                                contact={provider.contact}
                                address={provider.address}
                                url={provider.url}
                                rating={Number(provider.rating)}
                            />
                        ))
                    }
                </div>
                <Title> Dremable: Radiate Confidence on Your Wedding Day with Your Perfect Bridal Makeup Artist in Kolkata</Title>
                Wedding is a moment you&apos;ll cherish forever, and flawless makeup that enhances your natural beauty plays a crucial role in capturing that feeling. At Dremable, we connect you with Kolkata&apos;s best bridal makeup artists, ensuring you radiate confidence and glow on your special day. From traditional Bengali wedding styles to modern glamour, find your perfect match and experience artistry that reflects your unique vision.
                <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">Why Choose Dremable</div>
                <PageBnifitOptions banifits={choseDremable} />
                <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">Finding Your Perfect Kolkata Bridal Makeup Artist</div>
                <PageBnifitOptions banifits={makeupArtist} />
                <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">Dremable Makes Finding Your Dream Makeup Artist Easier</div>
                <PageBnifitOptions banifits={artistEasier} />
                <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">Before You Say &quot;I Do&quot; to a Makeup Artist</div>
                <PageBnifitOptions banifits={iDoArtist} />
                <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">Tips for a Successful Collaboration</div>
                <PageBnifitOptions banifits={collaboration} />
                <div className="md:text-3xl text-2xl font-bold md:p-12 py-8">Start Your Dream Today</div>
                Browse our directory of Kolkata&apos;s most talented bridal makeup artists and find your perfect match! With Dremable by your side, you can step into your wedding day feeling confident, radiant, and undeniably beautiful. Remember, your makeup should tell your story – let Dremable help you write it on your canvas of beauty
            </div>
        </div>
    )
}

export default makeupArtists