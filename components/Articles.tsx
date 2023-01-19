import React from 'react'
import Image from 'next/image'
import wisdom1 from '../public/images/DSC01042.jpg'
import wisdom2 from '../public/images/DSC01196.jpg'
import wisdom3 from '../public/images/DSC06914.jpg'


const Articles = () => {
    return (
        <div className='pt-20 sm:px-2'>
            <p className='text-center uppercase text-2xl lg:text-4xl mb-10'>READ THOUGHT-PROVOKING ARTICLES</p>

            <div>
                <div className='flex flex-col md:flex-row lg:justify-center lg:items-start gap-4 md:gap-8 flex-wrap'>
                    <Card title='THE TRUTH ABOUT THE UNBREAKABLE BUSINESS CHALLENGE' image={wisdom1} link='https://www.google.com' />
                    <Card title='HOW TO BUILD AN INVINCIBLE LEGACY — STARTING TODAY' image={wisdom2} link='https://www.google.com' />
                    <Card title='THE #1 SKILL THAT SUPERCHARGED MY SUCCESS' image={wisdom3} link='https://www.google.com' />
                </div>
            </div>
            {/* Youtube Videos */}
            <p className='text-center uppercase text-2xl lg:text-4xl mt-10 md:mt-24 pb-10 '>MOST RECENT VIDEOS</p>
            <div>
                <div className='flex flex-col md:flex-row lg:justify-center lg:items-center gap-4 md:gap-8 flex-wrap'>
                    <div className='w-80 h-80 md:w-96 md:h-96 bg-gray-200 md:rounded-lg'></div>
                    <div className='w-80 h-80 md:w-96 md:h-96 bg-gray-200 md:rounded-lg'></div>
                    <div className='w-80 h-80 md:w-96 md:h-96 bg-gray-200 md:rounded-lg'></div>
                </div>
            </div>
        </div>
    )
}

export default Articles


type Card1Props = {
    title: string;
    image: any;
    link: string;
}

const Card = ({ title, image, link }: Card1Props) => {
    return (
        <div className='relative w-full h-80 md:w-96 md:h-96 md:rounded-lg overflow-hidden group'>
            <div className='h-full w-full overflow-clip absolute inset-0 -z-10'>
                <Image src={image} alt='wisdom' priority placeholder='blur' className='h-full w-full object-center object-cover' />
            </div>
            {/* Black overlay on image */}
            <div className='h-full w-full bg-black opacity-40 group-hover:opacity-10 trans absolute top-0 left-0 -z-10'>
            </div>
            <div className='h-full w-full md:w-[70%] mx-auto p-4 z-1 text-[#ffffff] flex flex-col items-center justify-center gap-4 md:gap-12'>
                <p className='text-lg font-bold'>{title}</p>
                <a href={link} target='_blank' rel='noreferrer' className='btn-white uppercase'>Read More</a>
            </div>
        </div>
    )
}
