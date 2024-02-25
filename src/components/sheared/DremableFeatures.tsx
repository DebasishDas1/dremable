import { FC } from 'react';
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone } from 'lucide-react';

interface FeatureProps {
    text: string;
    url: string;
    sideLink: string;
}

const FeatureItem: FC<FeatureProps> = ({ text, url, sideLink }) => {
    return (
        <div className='relative my-2 rounded-lg overflow-hidden'>
            <Image
                src={url}
                alt="landing page"
                width={1500}
                height={500}
                className="object-cover"
            />
            <div className='absolute inset-0 flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-500 p-4'>
                <div className="font-bold text-4xl md:text-8xl">{text}</div>
                <div className="mt-4">
                    <Button size='lg' asChild className="button w-full sm:w-auto">
                        <Link href={sideLink}>Explore now</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

const DremableFeatures: FC = () => {
    return (
        <div className='flex flex-wrap items-center justify-evenly text-4xl'>
            <FeatureItem text="Weeding Planners" url='https://images.pexels.com/photos/733854/pexels-photo-733854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' sideLink='/magicians/weedingPlanners' />
            <FeatureItem text="Photographers" url='https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' sideLink='/magicians/photographers' />
            <FeatureItem text="Makeup Artists" url='https://images.pexels.com/photos/3522732/pexels-photo-3522732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' sideLink='/magicians/makeupArtists' />
        </div>
    );
};

export default DremableFeatures;