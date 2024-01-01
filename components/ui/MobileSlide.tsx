import React, { FC } from 'react'
import { Icons } from '../icons'
import { MobileSideSliderDrop } from './DropDown'
import { cn } from '@/utils/cn';


const listCln = 'h-[40px] flex text-sm justify-between items-center px-4 border-[0.5px]';

interface MenuSlideProps  {
    menuHeader: boolean,
    setMenuHeader:(newValue:boolean)=>void
}

export const MobileSlide:FC<MenuSlideProps> = ({menuHeader,setMenuHeader}) => {
  return (
      <>
       <div className={cn(menuHeader ? 'translate-x-0 opacity-1' : 'translate-x-[-100%] opacity-0','w-[100%] lg:hidden md:hidden transition-all duration-300 z-50  fixed top-0 bottom-0 left-0 ')}>
    <div className='w-[70%]  fixed top-0 bottom-0 left-0   bg-white'>
    <div onClick={()=>setMenuHeader(false)} className='flex px-3 bg-[#dddddd55] h-[40px] border items-center justify-between'>
        <p className=' text-sm '>Close Menu</p>
        <Icons.close fill={'black'} color='white' />
    </div>
        <div className='h-[50px] flex text-sm justify-between items-center px-3 border-[0.5px]'>
            <p>HOME</p>
           
        </div>
        <MobileSideSliderDrop title='MEN'>
            <ul className='w-full bg-[#dddddd55] flex  text-sm flex-col'>
                <li className={cn(listCln)}>APPAREL</li>
                <li className={cn(listCln)}>FOOTWEAR</li>
                <li className={cn(listCln)}>ACCESSORIES</li>
                <li className={cn(listCln)}>BEAUTY & HEALTH</li>
            </ul>
        </MobileSideSliderDrop>
        <MobileSideSliderDrop title='WOMEN'>
            <ul className='w-full bg-[#dddddd55] flex  text-sm flex-col'>
                <li className={cn(listCln)}>APPAREL</li>
                <li className={cn(listCln)}>FOOTWEAR</li>
                <li className={cn(listCln)}>ACCESSORIES</li>
                <li className={cn(listCln)}>BEAUTY & HEALTH</li>
            </ul>
        </MobileSideSliderDrop>
         <MobileSideSliderDrop title='KIDS'>
            <ul className='w-full bg-[#dddddd55] flex  text-sm flex-col'>
                <li className={cn(listCln)}>APPAREL</li>
                <li className={cn(listCln)}>FOOTWEAR</li>
                <li className={cn(listCln)}>TOY</li>
            </ul>
        </MobileSideSliderDrop>
        <div className='h-[50px] flex text-sm justify-between items-center px-3 border-[0.5px]'>
            <p>OFFICAL BRANDS</p>
        </div>
        <div className='h-[50px] text-sm flex justify-between items-center px-3 border-[0.5px]'>
            <p>ALL ITEMS</p>
        </div>
    </div>   
          </div>
        <div className={cn(menuHeader ? 'block opacity-1' : 'hidden opacity-0','w-[100%] transition-all duration-300 z-30 md:hidden lg:hidden fixed top-0 bottom-0 left-0 bg-[#191919c2]')}></div>
      </>
  )
}
