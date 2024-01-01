'use client'
import { siteConfig } from '@/config/site'
import React, { useState } from 'react'
import { Icons } from '../icons'
import Logo from '@/public/khit_logo.webp';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { MobileSlide } from './MobileSlide';


const iconsSize = "w-4 h-4"

export const Header = () => {
  const [menuHeader, setMenuHeader] = useState<boolean>(false);
  const [count, setCount] = useState<boolean>(false);
  

  
  return (
      <>
      <div className=' bg-[#141414] flex px-[10px] justify-start h-[40px] w-full text-white'>
        <span className='flex sm:mx-auto md:mx-0  items-center gap-1'>
         <Icons.phone  className='w-4 h-4  '/>
          <a
            className=' text-[12px]'
            href={`tel:${siteConfig.phone}`}
          >{siteConfig.phone}</a>
        </span>
      </div>
      <header className='h-[80px] px-[8px] md:px-[15px] lg:px-[30px] w-full flex justify-between items-center '>
      <div className='flex gap-3 md:hidden'>
          <button onClick={()=>setMenuHeader((prev)=>!prev)} className='  cursor-pointer'><Icons.menu className='w-5 h-5' /></button>
          <button className='    cursor-pointer'><Icons.user className='w-5 h-5'/></button>
      </div>
      <Image alt='khit_logo' className='w-[140px]  h-[50px]' src={Logo}/>
      <ul className=' hidden md:flex  gap-[30px] justify-between items-center text-xs'>
        <li>HOME</li>
        <li className='flex gap-1 items-center'>MEN <Icons.down className={cn(iconsSize)} /></li>
        <li className='flex gap-1 items-center'>WOMEN<Icons.down className={cn(iconsSize)} /></li>
        <li className='flex gap-1 items-center'>KIDS<Icons.down className={cn(iconsSize)} /></li>
        <li >OFFICAL BRANDS</li>
        <li>ALL ITEMS</li>
      </ul>
      <div className='flex gap-3 '>
          <Icons.search className='w-5 h-5' />
          <button onClick={()=>setCount((prev)=>!prev)} className='relative flex '>
            <Icons.bag className='w-5 h-5' />
            <span className=' translate-y-[-10px] bg-black text-white px-2 rounded-full top-[-95%] left-[8px] text-[8px] p-1 '>0</span>
            <div className={cn(count ? 'max-h-[35px] py-2 opacity-1':'max-h-0 opacity-0',' overflow-hidden   transition-all duration-500 absolute border w-[250px] text-xs  top-[130%] bg-white  left-[-210px]')}>You don&#39;t have any items in your cart.</div>
          </button>
      </div>
      </header>
      <MobileSlide menuHeader={menuHeader} setMenuHeader={setMenuHeader} />
      </>
  )
}
