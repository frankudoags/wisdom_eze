import React from 'react'
import book from '../public/images/book.jpg'
import Image from 'next/image'
import Button from './Button'

const BuyBook = () => {
    return (
        <div className='relative flex flex-col items-center justify-center min-h-[70vh]'>
            <div className='h-full w-full overflow-clip absolute inset-0 -z-10'>
                <Image src={book} alt='wisdom' priority placeholder='blur' className='h-full w-full object-center object-cover' />
            </div>
            {/* Black overlay on image */}
            <div className='h-full w-full bg-black opacity-60 absolute top-0 left-0 -z-10'></div>
            {/* Title */}
            <div className='flex flex-col items-center justify-center gap-4 md:gap-8 px-4 max-w-3xl md:text-center'>
                <h1 className='text-3xl font-bold text-gray-200'>Buy <u>"Coming to Lagos"</u> by Wisdom Ezekiel on Selar</h1>
                <p className='text-gray-200'>In Coming To Lagos, Wisdom reveals the steps he took and decisions he made that revolutionized his life from the market of Aswani to co-owning a multi billion naira business in Lagos. </p>
                <a href='https://selar.co/comingtolagos' target='_blank' rel='noreferrer' className='btn-blue mt-6 md:mt-0'>Buy Now</a>
            </div>
        </div>
    )
}

export default BuyBook
