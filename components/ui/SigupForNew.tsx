'use client'
import React from 'react'
import {Playfair} from 'next/font/google';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { Icons } from '../icons';
const palyfair = Playfair({ subsets: ['latin'] });


export const SigupForNew = () => {
  return (
    <div className=' bg-[#dddddd55]  py-[10px] '>
          <div className='lg:container px-[15px]  mx-auto items-center lg:py-4 lg:flex justify-between'>
                 <div className='sm:flex sm:mt-[20px] lg:w-[60%]'>
              <h3 className={cn(palyfair.className,'uppercase  sm:leading-5   lg:text-lg text-center sm:text-left  text-md mb-3')}>Sign up for <span className='lg:text-2xl   '>newletter</span></h3>
          <div className='flex items-center w-[97%] sm:w-full mx-auto'>
              <div className=' border w-[77%] px-2 bg-white'>
                  <input placeholder='Email address' className=' text-sm rounded-none  outline-none h-[40px] border-none ' />
              </div>
              <button className='w-[25%] bg-black  text-xs border-2 border-black text-white h-[40px] uppercase'>subscribe</button>
          </div>
          </div>
          <div className='flex lg:gap-4 mt-4 mb-4 items-center justify-center gap-2'>
              <Link href={""}>
                  <Icons.faceBook className='w-5 h-5'/>
              </Link>
              <Link href={""}>
                  <Icons.instagram className='w-5 h-5'/>
              </Link>
          </div>
       </div>
    </div>
  )
}
