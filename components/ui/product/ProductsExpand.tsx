'use client'
import React, { FC, useEffect, useState } from 'react'
import { Slider } from '../Slider'
import { Icons } from '@/components/icons'
import Img_one  from '@/public/one.jpg';
import Img_two from '@/public/two.jpg';
import Img_three from '@/public/three.jpg';
import { cn } from '@/utils/cn';

interface ProductsExpandProps{
    handleExpand: () => void,
    expand:boolean
}

export const ProductsExpand: FC<ProductsExpandProps> = ({ expand, handleExpand }) => {

    const [share, setShare] = useState(false);
    const [image, setImage] = useState([Img_one, Img_two, Img_three]);
    const [digit,setDigit] = useState(1)
    
    useEffect(() => {
    // Add or remove a class to body to disable/enable scrolling
    const handleBodyScroll = () => {
        document.body.style.overflow = expand ? 'hidden' : 'auto';
        
    };

    handleBodyScroll(); // Initial setup

    // Cleanup function to remove event listener
    return () => {
      document.body.style.overflow = 'auto'; // Restore scrolling on component unmount
    };
    }, [expand]);
    
    const handleDigit = (e:number) => {
        setDigit(e +1)
    };
  return (
     <div className={cn(
  'transition-opacity duration-1000 ease-in-out',  // Add this class for opacity transition
  expand ? "opacity-1" : "opacity-0",
  'fixed w-[100svw] py-[20px] flex flex-col items-center justify-center top-0 z-50 left-0 right-0 bottom-0 h-[100svh] bg-black'
)}>
        <div className='text-white absolute top-3 px-[15px] flex justify-between w-full'>
              <p className='w-[50px] flex items-center justify-around'><span className='w-[10px]'>{digit}</span> / <span>{image.length}</span></p>
               <div className='text-white gap-2 flex'>
                <div className='relative'>
                      <Icons.forward onClick={() => setShare((prev)=>!prev)} />
                  <div className={cn(share ? 'max-h-[35px] py-2 opacity-1':'max-h-0 opacity-0',' overflow-hidden   transition-all duration-500 absolute border w-[130px] text-xs  top-[130%] bg-white px-3 text-[#555555]  left-[-100px]')}>
                    <p>Download Image</p>
                  </div>
                </div>
                  <Icons.closeX onClick={handleExpand} />
        </div>
        </div>
        <div className=' flex items-center justify-center'>
              <Slider  variant={'expand'} setDigit={handleDigit} img={image} arrow={'zoom'}/>
        </div>
    </div>
  )
}
