'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ImgSLice from '@/public/one.jpg';
import ImgSLice_two from '@/public/two.jpg';
import ImgSLice_three from '@/public/three.jpg';
import ImgSLice_four from '@/public/five.jpg';
import { Icons } from '@/components/icons';
import { SwiperSlide,Swiper } from 'swiper/react';
import "swiper/css";

const imageSize = 'w-auto'

export const ProductSlide = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true);
  }, []);

  if (start) {
    return (
      <div className='flex w-[100%]  flex-col md:container mx-auto items-center md:flex-row'>
        <div className='flex gap-2 '>
          <div className=' gap-2 hidden md:flex flex-col'>
            <Image src={ImgSLice} className={imageSize} alt="Product Slide" />
            <Image src={ImgSLice_two} className={imageSize} alt="Product Slide" />
            <Image src={ImgSLice_three} className={imageSize} alt="Product Slide" />
            <Image src={ImgSLice_four} className={imageSize} alt="Product Slide" />
          </div>
          <div className=' relative '>
            <Image src={ImgSLice} alt='dd' />
            <button className='absolute top-[50%] left-0 translate-y-[-60%]'><Icons.bannerLetf className='w-7 h-7' /></button>
            <button className='absolute top-[50%] right-0 translate-y-[-60%]'><Icons.bannerRight className='w-7 h-7' /></button>
            <div className='bg-black rounded-md h-[50px] w-[50px] absolute bottom-3 right-3'>dd</div>
          </div>
        </div>
        <div className=' md:hidden  my-1 px-[20px]'>
          <Swiper
            spaceBetween={5}
            slidesPerView={4}
            className='w-[80svw] px-[30px] '
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide> <Image className={imageSize} src={ImgSLice} alt='dd' />   </SwiperSlide>
            <SwiperSlide> <Image className={imageSize} src={ImgSLice_two} alt='dd' />   </SwiperSlide>
            <SwiperSlide> <Image className={imageSize} src={ImgSLice_three} alt='dd' />   </SwiperSlide>
            <SwiperSlide> <Image className={imageSize} src={ImgSLice_four} alt='dd' />   </SwiperSlide>
          </Swiper>
        </div>
      </div>
    )
  }
}
