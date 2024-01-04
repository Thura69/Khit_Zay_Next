'use client'
import { SliderImages } from '@/config/site'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import { Icons } from '../icons'
import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'


const images = SliderImages.adidas;
const deskImages = SliderImages.adidas_md;
const iconSize = 'w-4 h-4';
const slideIcon = 'absolute top-[50%] p-3 translate-y-[-50%] bg-[#e9e7e715] opacity-[0.8] border-black   bg-white';
const slideVariants = cva(
 'h-[250px] overflow-hidden relative ',
    {
      variants: {
        variant: {
          default:
            'relative hidden md:block',
          expand:
            'relative hidden'
        },
      },
      defaultVariants: {
        variant: 'default'
      }
    }
);
  
const arrowVariants = cva(
  'absolute top-[50%] p-3 translate-y-[-50%] opacity-[0.8] border-black   bg-white',
  {
    variants: {
      arrow: {
        default: 'absolute top-[50%] p-3 translate-y-[-50%] bg-[#e9e7e715] opacity-[0.8] border-black   bg-white',
        zoom: 'absolute top-[50%] p-3 translate-y-[-50%]  opacity-[0.5] border-black   bg-white'
      }
    },
    defaultVariants: {
      arrow:'default'
    }
  });

  interface SlideProps extends VariantProps<typeof slideVariants>,VariantProps<typeof arrowVariants> {
    img?: StaticImageData[],
    setDigit:(e:number)=>void
}






export const Slider: FC<SlideProps> = (
  {variant,arrow,img,setDigit,...props}
) => {
    const [slideImages, setSlideImages] = useState(images);
    const [slideDesk, setSlideDesk] = useState(deskImages);
    const [count, setCount] = useState(0);
    
  
  useEffect(() => {
    if (img !== undefined) {
      setSlideImages(img);
    } 
  },[img])
 


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
    
      setDigit(count)

  return () => {
    clearInterval(intervalId);
  };
}, [count]); 

  return (
      <>
        <div className={' h-[90%]  overflow-hidden relative block'}>
        <Link href={'#'}>
            <Image src={img![count]} alt='3'/>
        </Link>
        <div onClick={()=>handleSlice('i')} className={cn(arrowVariants({arrow}),'right-1 cursor-pointer')}>
              <Icons.right  className={iconSize} />
        </div>
        <div onClick={()=>handleSlice('d')} className={cn(arrowVariants({arrow}),'left-1 cursor-pointer   ')}>
              <Icons.left className={iconSize} />
        </div>
    </div>
    <div className={cn(slideVariants({variant}))}>
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
