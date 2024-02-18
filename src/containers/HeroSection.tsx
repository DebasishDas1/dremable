import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const HeroSection = () => {
    return (
        <div className='flex flex-col items-center'>
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
                        <Link href={'/magicians/weedingPlanners'}>Explore now</Link>
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
                        <Link href={'/magicians/weedingPlanners'}>Explore now</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection