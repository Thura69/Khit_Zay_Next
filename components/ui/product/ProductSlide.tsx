'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import ImgSLice from '@/public/one.jpg';
import ImgSLice_two from '@/public/two.jpg';
import ImgSLice_three from '@/public/three.jpg';
import ImgSLice_four from '@/public/five.jpg';
import { Icons } from '@/components/icons';
import { SwiperSlide,Swiper } from 'swiper/react';
import "swiper/css";
import { ProductsExpand } from './ProductsExpand';
import { CSSTransition } from 'react-transition-group';
import { Magnifier } from '../Magnifier';


const imageSize = 'w-auto  md:w-[150px]'

export const ProductSlide = () => {
  const [start, setStart] = useState(false);
  const [expand, setExpand] = useState(false);

  const [slideImages, setSlideImages] = useState([ImgSLice, ImgSLice_two, ImgSLice_three, ImgSLice_four]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setStart(true);
  }, []);

  const handleSlice = (e: 'i' | 'd') => {
        if (e === 'i') {
            if (count === (slideImages.length - 1)) {
                setCount(0);
                return;
            } else {
                   setCount((prev) => prev + 1);
            }
         
        }
        if (e === 'd') {
            if (count === 0) {
                setCount(slideImages.length - 1);
                return;
            } else {
              setCount((prev) => prev - 1);
            }
          
        }
    
  };
  

  useEffect(() => {
    var options = {width:400,height:250,zoomWidth:500,img:"1.jpg",offset:{vertical:0,horizontal:10},scal:"1.5",zoomPosition:"original"};

   
  }, []);

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  if (start) {
    return (
      <>
        <div className='flex w-[100%]  flex-col md:container mx-auto items-center md:flex-row'>
        <div className='flex gap-1 '>
          <div className=' gap-1 hidden md:flex flex-col'>
          <Swiper
            spaceBetween={5}
            slidesPerView={4}
            direction='vertical'
            className=' max-h-[250px] w-[60px] px-[30px] '
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide> <Image className={imageSize} src={ImgSLice} alt='dd' />   </SwiperSlide>
            <SwiperSlide> <Image className={imageSize} src={ImgSLice_two} alt='dd' />   </SwiperSlide>
            <SwiperSlide> <Image className={imageSize} src={ImgSLice_three} alt='dd' />   </SwiperSlide>
            <SwiperSlide> <Image className={imageSize} src={ImgSLice_four} alt='dd' />   </SwiperSlide>
          </Swiper>
          </div>
          <div className=' relative '>
            <Magnifier imgUrl={slideImages[count]} />
            <Image className='lg:hidden' src={slideImages[count]} alt="dkd" />
              
            <button onClick={()=>handleSlice('i')}  className='absolute top-[50%] left-0 translate-y-[-60%]'><Icons.bannerLetf className='w-7 h-7' /></button>
            <button onClick={()=>handleSlice('d')} className='absolute top-[50%] right-0 translate-y-[-60%]'><Icons.bannerRight className='w-7 h-7' /></button>
            <div onClick={()=>{setExpand((prev)=>!prev)}} className='bg-black rounded h-[35px] flex items-center justify-center w-[35px] absolute bottom-3 right-3'>
              <Icons.expand className='w-full h-[60%] text-white'/>
            </div>
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
     {
   <CSSTransition
  in={expand}
  appear
  timeout={300}
  classNames="fade"
  unmountOnExit
  
>
  <ProductsExpand expand={expand} handleExpand={handleExpand} />
</CSSTransition>
        }
        
      </>
    )
  }
}
