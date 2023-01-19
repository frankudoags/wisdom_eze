import React from 'react'
import Image from 'next/image'
import wisdom1 from '../public/images/DSC01042.jpg'
import wisdom2 from '../public/images/DSC01196.jpg'
import wisdom3 from '../public/images/DSC06914.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [wisdom1, wisdom2, wisdom3]

const HomeSlider = () => {
  return (
    <div className='relative h-[70vh] w-full flex justify-center items-center border-b border-[#251b1b]'>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Slides image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
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
      <div className='absolute inset-0 bg-black bg-opacity-20'></div>
    </div>
  )
}