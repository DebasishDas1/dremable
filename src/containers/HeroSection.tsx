import Title from "@/components/sheared/Title"
import { benifits } from '@/components/constants'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const HeroSection = () => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                {/* wellcome text */}
                <div className="">
                    <div className='relative flex md:hidden'>
                        <Image
                            src={'https://images.pexels.com/photos/6530614/pexels-photo-6530614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                            alt="landing page"
                            width={1500}
                            height={500}
                        />
                        <div className='absolute top-10 text-4xl flex flex-col items-center'>
                            <div className="w-[90%] font-bold">Crafting Timeless Celebrations</div>
                            <div className="w-[90%] text-sm" > Your dream wedding begins here. Expression of Dreams specializes in turning your love story into a breathtaking celebration, blending elegance, imagination, and heartfelt dedication</div>
                        </div>
                        <div className="bottom-2 absolute flex justify-center w-full" >
                            <Button size='lg' asChild className="button w-fit ">
                                <Link href={'/planner'}>Explore now</Link>
                            </Button>
                        </div>

                    </div>
                    <div className='relative hidden md:flex '>
                        <Image
                            src={'https://images.pexels.com/photos/6530730/pexels-photo-6530730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                            alt="landing page"
                            width={1500}
                            height={500}
                        />
                        <div className='absolute top-10 text-8xl flex flex-col items-center'>
                            <div className="font-bold">Crafting </div>
                            <div className="font-bold pb-2">Timeless Celebrations</div>
                            <div className="w-[80%] text-lg pb-5" > Your dream wedding begins here. Expression of Dreams specializes in turning your love story into a breathtaking celebration, blending elegance, imagination, and heartfelt dedication</div>
                            <Button size='lg' asChild className="button w-full sm:w-fit">
                                <Link href={'/planner'}>Explore now</Link>
                            </Button>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col md:w-[75%] w-[90%] md:items-center'>
                    <Title> Let’s Plan Your Dream  Wedding Now </Title>
                    <div className='pb-2'>
                        Planning your wedding shouldn't be a chaotic whirlwind. Dremable brings calm to the storm,
                        connecting you with a handpicked network of top-notch wedding professionals. From
                        visionaries who orchestrate unforgettable celebrations to artists who transform spaces
                        into breathtaking masterpieces, find the perfect match for every part of your special day.
                    </div>
                    <Title> How Dremable makes your planning smooth sailing</Title>
                    {
                        benifits.map(({ title, describe }) => (
                            <div key={title} className="flex p-2 md:w-[80%] bg-white rounded-lg m-2 items-center shadow-xl">
                                <LocationSearchingIcon />
                                <div className="ml-3">
                                    <span className="font-bold"> {title} </ span>
                                    {describe}
                                </div>
                            </div>
                        ))
                    }
                    <div className='pb-2 pt-10'>
                        No more endless scrolling, frantic emails, or phone tag nightmares. Dremable empowers you
                        to plan your dream wedding with ease, trust, and joy.
                    </div>
                </div>
            </div>


            {/* problrm and solution */}
            {/* benifits */}
            {/* testimonial */}
            {/* features */}
            {/* faq */}
        </div>
    )
}

export default HeroSection