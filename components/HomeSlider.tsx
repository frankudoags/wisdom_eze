import React from 'react'
import Image, { StaticImageData } from 'next/image'
import wisdom1 from '../public/images/DSC01042.jpg'// seating across screen with glasses(large)
import wisdom2 from '../public/images/DSC01196.jpg'//seating red shirt and tie(large and small)
import group from '../public/images/DSC00790.jpg'//group of people(large)
import herophone1 from '../public/images/herosm1.jpg'
import herophone2 from '../public/images/herosm2.jpg'
import heroLarge from '../public/images/herolg.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const imagesSmall = [herophone1, herophone2]


const HomeSlider = () => {
  return (
    <div className="relative h-[90vh] md:h-[85vh] w-full flex justify-center items-center border-b border-[#251b1b] font-inter">
      <div className="hidden md:flex w-full h-full">
        <Image
          src={heroLarge}
          alt="wisdom"
          priority
          placeholder="blur"
          className="h-full w-full object-center object-cover"
        />
      </div>
      <div className="flex md:hidden w-full h-full">
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
              <Slides image={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HomeSlider

type SlidesProps = {
  image: StaticImageData;
}

const Slides = ({ image }: SlidesProps) => {
  return (
    <div className='relative w-full h-full'>
      {/* Image */}
      <div className='h-full w-full overflow-clip absolute inset-0 -z-10'>
        <Image src={image} alt='wisdom' priority placeholder='blur' className='h-full w-full object-center object-cover' />
      </div>
      {/* Black overlay on image */}
      <div className='h-full w-full bg-black opacity-20 absolute top-0 left-0 -z-10'></div>
    </div>
  )
}