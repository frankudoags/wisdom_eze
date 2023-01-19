import React from 'react'
import spotify from '../public/images/spotify.png'//seating red shirt and tie(large and small)
import wisdom from '../public/images/DSC07100.jpg'
import Image from 'next/image'

const Podcast = () => {
    return (
        <section className='relative text-white'>
        <div className='grid grid-cols-1 gap-6 items-center min-h-[50vh] py-20 px-6 md:px-0 max-w-6xl mx-auto mt-20'>
            <div className='col-span-1 flex flex-col items-center justify-center'>
                <p className='text-center uppercase text-2xl lg:text-4xl mb-2 font-medium italic'>WISDOM EZEKIEL PODCAST</p>
                <p className='text-center uppercase text-sm md:text-base mb-10'>BUSINESS. INVESTMENT. PERSONAL GROWTH</p>
            </div>
                <div className='w-full h-full absolute inset-0 -z-10'>
                    <Image src={wisdom} alt='wisdom' priority placeholder='blur' className='h-full w-full object-center object-cover' />
                </div>
                {/* Black overlay on image */}
            <div className='h-full w-full bg-black opacity-40 trans absolute top-0 left-0 -z-10'></div>
            <div>
                <div className='flex flex-col md:flex-row lg:justify-center lg:items-start gap-4 md:gap-8 flex-wrap'>
                    The Wisdom Ezekiel Podcast brand identity by the right pane.
                    Your one-stop shop for real estate, business and finance advice from a seasoned professional.
                    Wisdom Ezekiel answers all your pressing questions on real estate investments, business navigation in tough seasons, and early stage investing in startups.
                    <a href='https://www.google.com' target='_blank' rel='noreferrer' className='btn-blue rounded-md mt-6 block'>
                        <Image src={spotify} alt='spotify' priority placeholder='blur' className='h-6 w-6 object-center object-cover mr-2 rounded-full' />
                        Listen Now on Spotify
                        </a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Podcast
