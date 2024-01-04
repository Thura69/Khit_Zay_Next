import React from 'react'
import ImgSlide from '@/public/one.jpg';
import Image from 'next/image';
import { Icons } from '@/components/icons';

export const CartProductCard = () => {
  return (
    <div className='h-auto flex items-start gap-3'>
       <Image className='w-[60px] h-[60px]' src={ImgSlide} alt='img'/>  
          <div className='flex text-[#555555] text-[12px] gap-[10px] text-start flex-col justify-around'>
              <p> adidas-ADILETTE AQUA-SLIDES-UNISEX</p>
              <p>K 79,200 x 2</p>
          </div> 
          <Icons.closeX className='w-5 h-5'/>
    </div>
  )
}
