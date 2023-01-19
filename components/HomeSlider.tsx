import React from 'react'
import Image from 'next/image'
import wisdom1 from '../public/images/DSC01042.jpg'// seating across screen with glasses(large)
import wisdom2 from '../public/images/DSC01196.jpg'//seating red shirt and tie(large and small)
import group from '../public/images/DSC_0790.jpg'//group of people(large)
import wisdom3 from '../public/images/DSC06975.jpg'//standing(small)
import wisdom4 from '../public/images/DSC06914.jpg'//standing(small)
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const imagesLarge = [wisdom2, wisdom1, group]
const imagesSmall = [wisdom4, wisdom3, wisdom2]

const titles = [
  'SERIAL ENTREPRENEUR, CO-FOUNDER OF PERTINENCE GROUP, CEO OF RUSHTOWER, START-UP INVESTOR, INTERNATIONAL SPEAKER, BUSINESS ADVISOR & AUTHOR ',
  'HOW TO BUILD AN INVINCIBLE LEGACY — STARTING TODAY',
  'THE #1 SKILL THAT SUPERCHARGED MY SUCCESS',
  'THE TRUTH ABOUT THE UNBREAKABLE BUSINESS CHALLENGE'
]



const HomeSlider = () => {
  return (
    <div className='relative h-[92vh] w-full flex justify-center items-center border-b border-[#251b1b]'>
      <div className='hidden md:flex w-full h-full'>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full h-full"
        >
          {imagesLarge.map((image, index) => (
            <SwiperSlide key={index}>
              <Slides image={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='flex md:hidden w-full h-full'>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full h-full"
        >
          {imagesSmall.map((image, index) => (
            <SwiperSlide key={index}>
              <Slides image={image} title={titles[index]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
      {/* Image */}
      <div className='h-full w-full overflow-clip absolute inset-0 -z-10'>
        <Image src={image} alt='wisdom' priority placeholder='blur' className='h-full w-full object-center object-cover' />
      </div>
      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-20 -z-10'></div>
      {/* Title */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
          <h1 className='text-2xl md:text-4xl font-medium text-center text-white'>{title}</h1>
      </div>
        {/* <p className='absolute inset-0 text-white text-xs'>Photo by <a href='https://unsplash.com/@joshuaearle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Joshua Earle</a> on <a href='https://unsplash.com/s/photos/wisdom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a></p> */}
    </div>
  )
}