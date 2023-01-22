import React from 'react'
import Image from 'next/image'
import wisdom from '../public/images/DSC01248.jpg'
import Link from 'next/link'
import Button from './Button'

const AboutMe = () => {
  return (
    <section className='bg-[#0d0e18] text-white pb-8'>
    <div className='max-w-5xl mx-auto'>
      <div className='py-10 flex flex-col gap-4 lg:flex-row justify-between items-center px-4 md:px-0'>
        <h1 className='text-xl md:text-2xl font-medium text-center'>GET BIT-SIZED BUSINESS AND INVESTMENT TIPS IN YOUR INBOX</h1>
        <Button text='SIGN UP' path='/contact' />
      </div>
      <div className='flex flex-col justify-between gap-8 lg:flex-row w-full py-4 px-8 md:px-4'>
        {/* Image */}
        <div className='w-2/4 lg:w-1/2 aspect-square  overflow-clip rounded-full md:rounded-lg mx-auto lg:mx-0'>
          <Image src={wisdom} alt='Wisdom Ezekiel' priority placeholder='blur' />
        </div>

        {/* Text */}
        <div className='w-full lg:w-1/2 flex flex-col justify-center'>
          <p className='text-center md:text-left uppercase text-2xl font-medium lg:text-4xl mb-5'>About me</p>
          <p className='text-base md:text-lg font-light leading-relaxed'>Wisdom Ezekiel is a multi-award winning speaker,
            passionate entrepreneur, business advisor,
            early stage investor, and philanthropist with over two decades of experience.
            He, alongside his business partner built their multimillion dollar real estate company
            from scratch defying all odds set before them. </p>
          <div className='mt-10'>
            <Button text='Read More' path='/about' />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutMe
