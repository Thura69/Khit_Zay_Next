'use client'
import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/swiper-bundle.css";
import { BannerProductCard } from '../Site-banner';
import { Playfair } from 'next/font/google'
import { cn } from '@/utils/cn';


const palyfair = Playfair({ subsets: ['latin'] });

export const RelatedProducts = () => {
  return (
      <div className='container  my-[50px] mx-auto'>
          <p className={cn(palyfair.className,'text-center text-2xl mb-[40px]')}>RELATED PRODUCTS</p>
           <Swiper
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
             640:{
           slidesPerView:3,
            },
            768:{
           slidesPerView:4,
            }
           
            }}
            className='my-1 w-[90svw] mx-auto m-0 p-0'
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
                  <BannerProductCard image='' price={11} mainTitle='' subTitle='' discount={22} />
            </SwiperSlide>
            <SwiperSlide>
                  <BannerProductCard image='' price={11} mainTitle='' subTitle='' discount={22} />
            </SwiperSlide>
            <SwiperSlide>
                  <BannerProductCard image='' price={11} mainTitle='' subTitle='' discount={22} />
            </SwiperSlide>
            <SwiperSlide>
                  <BannerProductCard image='' price={11} mainTitle='' subTitle='' discount={22} />
            </SwiperSlide>
            <SwiperSlide>
                  <BannerProductCard image='' price={11} mainTitle='' subTitle='' discount={22} />
            </SwiperSlide>
            <SwiperSlide>
                  <BannerProductCard image='' price={11} mainTitle='' subTitle='' discount={22} />
            </SwiperSlide>
            <SwiperSlide>
                  <BannerProductCard image='' price={11} mainTitle='' subTitle='' discount={22} />
            </SwiperSlide>
          
              
          </Swiper>
    </div>
  )
}
