import React from 'react'
import Image from 'next/image'
import wisdom1 from '../public/images/DSC01042.jpg'
import wisdom2 from '../public/images/DSC01196.jpg'
import wisdom3 from '../public/images/DSC06914.jpg'

const HomeSlider = () => {
  return (
    <div className='h-[80vh] w-full flex justify-center items-center border-b border-[#251b1b]'>
      <Slides image={wisdom1} />
    </div>
  )
}

export default HomeSlider

type SlidesProps = {
  title?: string;
  image: any;
  link?: string;
}

const Slides = ({ title, image, link }: SlidesProps) => {
  return (
    <div className='relative w-full h-full'>
      <div className='h-full w-full overflow-clip absolute inset-0 -z-10'>
        <Image src={image} alt='wisdom' priority placeholder='blur' className='h-full w-full object-center object-cover' />
      </div>
    </div>
  )
}