import { testimonial_info } from "@/components/constants"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Star, StarOutline } from '@mui/icons-material'

const Testimonial = () => {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="md:w-[60%] w-[65%] italic"
        >
            <CarouselContent>
                {testimonial_info.map(({ name, starCount, describe }, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className='flex flex-col font-sans  bg-white rounded-lg p-4 m h-[260px]'>
                            <div className='lex-auto text-lg font-bold'>{name}</div>
                            <div className='my-2'>
                                {Array.from({ length: starCount }).map((_, i) => <Star key={i} />)}
                                {Array.from({ length: 5 - starCount }).map((_, i) => <StarOutline key={i} />)}
                            </div>
                            <div className='w-full text-sm text-slate-700 font-serif'>{describe}</div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default Testimonial;