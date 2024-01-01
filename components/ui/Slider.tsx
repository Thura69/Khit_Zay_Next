'use client'
import { SliderImages } from '@/config/site'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Icons } from '../icons'
import { cn } from '@/utils/cn'


const images = SliderImages.adidas;
const deskImages = SliderImages.adidas_md;
const iconSize = 'w-4 h-4';
const slideIcon = 'absolute top-[50%] p-3 translate-y-[-50%] bg-[#e9e7e715] opacity-[0.8] border-black   bg-white';

export const Slider = () => {
    const [slideImages, setSlideImages] = useState(images);
    const [slideDesk, setSlideDesk] = useState(deskImages);
    const [count, setCount] = useState(0);



    const handleSlice = (e: 'i' | 'd') => {
        if (e === 'i') {
            if (count === (slideImages.length - 1) || count === (slideDesk.length - 1)) {
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
  const intervalId = setInterval(() => {
    if (count === 2) {
      setCount(0);
      return;
    } else {
      setCount((prev) => prev + 1);
    }
  }, 5000);

  return () => {
    clearInterval(intervalId);
  };
}, [count]); 

  return (
      <>
        <div className=' h-[250px] overflow-hidden relative md:hidden'>
        <Link href={'#'}>
            <Image src={slideImages[count]} alt='3'/>
        </Link>
        <div onClick={()=>handleSlice('i')} className={cn(slideIcon,'right-1 cursor-pointer')}>
              <Icons.right  className={iconSize} />
        </div>
        <div onClick={()=>handleSlice('d')} className={cn(slideIcon,'left-1 cursor-pointer   ')}>
              <Icons.left className={iconSize} />
        </div>
    </div>
    <div className=' relative hidden md:block'>
        <Link href={'#'}>
            <Image src={deskImages[count]} alt='3'/>
        </Link>
        <div onClick={()=>handleSlice('i')} className={cn(slideIcon,'right-1 cursor-pointer ')}>
              <Icons.right className={iconSize} />
        </div>
        <div onClick={()=>handleSlice('d')} className={cn(slideIcon,'left-1 cursor-pointer   ')}>
              <Icons.left className={iconSize} />
        </div>
    </div>
      </>
  )
}
