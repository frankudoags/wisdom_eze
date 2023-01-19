import React from 'react'

const Podcast = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 items-center h-[50vh]'>
        <div className='col-span-2 flex flex-col items-center justify-center'>
            <p className='text-center uppercase text-2xl lg:text-4xl mb-2 font-medium'>LISTEN TO MY PODCAST</p>
            <p className='text-center uppercase text-sm md:text-base mb-10'>BUSINESS. INVESTMENT. PERSONAL GROWTH</p>
            <a href='https://www.google.com' target='_blank' rel='noreferrer' className='btn-white uppercase'>Listen Now</a>
        </div>
        <div className='col-span-1 flex flex-col items-center justify-center'>
            <img src='/images/podcast.png' alt='podcast' className='w-[300px] h-[300px]' />
        </div>

        <div>
            <div className='flex flex-col md:flex-row lg:justify-center lg:items-start gap-4 md:gap-8 flex-wrap'>
                hello
            </div>
        </div>
    </div>
  )
}

export default Podcast
