"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Star, StarOutline } from '@mui/icons-material'

type Props = {
    name: string
    contact: string
    address: string
    reating: number
    url: string
}

const MagiciansCard = ({ name, contact, address, reating, url }: Props) => {
    const [contactVisible, setContactVisible] = useState(false)
    let plannerReating = []

    if (reating) {
        for (let i = 0; i < reating; i++) {
            plannerReating.push('L')
        }
        for (; reating < 5; reating++) {
            plannerReating.push('DL')
        }
    }

    return (
        <div className='flex flex-col justify-between font-sans bg-white rounded-lg p-4 mb-4 m-2 md:w-60 md:h-[260px]  w-[100%] hover:shadow-2xl shadow-lg'>
            <div className='mb-2'>
                <div className='lex-auto text-lg font-bold'>{name}</div>
                <div className='w-full text-sm text-slate-700'>{address}</div>
            </div>
            <div>
                <div className='mb-2 mt-4 '>
                    {plannerReating.map((rate, i) => rate == 'L' ? <Star key={i} /> : <StarOutline key={i} />)}
                </div>
                <div className='flex items-center'>
                    <Button
                        type="submit"
                        onClick={() => setContactVisible(data => !data)}
                    >Contact</Button>
                    {
                        contactVisible ? <div className='text-black test-sm ml-2'>{contact}</div> : ''
                    }
                </div>
            </div>

        </div>
    )
}

export default MagiciansCard