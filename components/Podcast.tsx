import React from 'react'
import spotify from '../public/images/spotify.png'//seating red shirt and tie(large and small)
import Image from 'next/image'

const Podcast = () => {
    return (
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 items-center min-h-[50vh] py-20 px-6 md:px-0 max-w-6xl mx-auto mt-20'>
            <div className='col-span-1 flex flex-col items-center justify-center'>
                <p className='text-center uppercase text-2xl lg:text-4xl mb-2 font-medium italic'>WISDOM EZEKIEL PODCAST</p>
                <p className='text-center uppercase text-sm md:text-base mb-10'>BUSINESS. INVESTMENT. PERSONAL GROWTH</p>
            </div>
            <div className='col-span-1 flex flex-col items-center justify-center'>
                <div className='relative w-[1/2] aspect-square  md:rounded-lg lg:rounded-full overflow-hidden group'>
                    <Image src={spotify} alt='wisdom' priority placeholder='blur' className='h-full w-full object-center object-cover' />
                </div>
            </div>

            <div>
                <div className='flex flex-col md:flex-row lg:justify-center lg:items-start gap-4 md:gap-8 flex-wrap'>
                    The Wisdom Ezekiel Podcast brand identity by the right pane.
                    Your one-stop shop for real estate, business and finance advice from a seasoned professional.
                    Wisdom Ezekiel answers all your pressing questions on real estate investments, business navigation in tough seasons, and early stage investing in startups.
                    <a href='https://www.google.com' target='_blank' rel='noreferrer' className='btn-blue uppercase'>Listen Now</a>
                </div>
            </div>
        </div>
    )
}

export default Podcast
