import React from 'react'
import { DropDown } from './ui/DropDown'
import { Icons } from './icons'
import { Playfair } from 'next/font/google';
import { cn } from '@/utils/cn';
const palyfair = Playfair({ subsets: ['latin'] });

export const Footer = () => {
  return (
      <div className='p-5 pt-[20px] w-full bg-[#0d0d0d]'>
        <div className='md:hidden'>
        <DropDown title='Quick Link'>
        <ul className='text-white text-sm flex mb-4 flex-col gap-1'>
        <li>About Us</li>
        <li>Privacy Policy</li>
        <li>How To Buy Guide?</li>
      </ul>
          </DropDown>
          <DropDown title='HELP'>
         <ul className='text-white text-sm flex h-full mb-4 h flex-col gap-1'>
        <li>Payment</li>
        <li>Returns & Exchange</li>
        <li>Delivery</li>
        <li>FAQ</li>
      </ul>
          </DropDown>
          <DropDown title='My Account'>
           <ul className='text-white text-sm flex mb-4 flex-col gap-1'>
        <li>My Personal Information</li>
      </ul>    
              </DropDown>
         <div className=' text-white my-[20px]'>
                   <h3 className={cn(palyfair.className,' mb-4 text-lg uppercase')}>Contact Us</h3>
              <div className='flex flex-col gap-3'>
              <p className='text-xs flex items-center gap-2'>
                <Icons.phone className='w-4 h-4'/>
                <span>09942176731</span></p>
              <p className='text-xs flex items-center gap-2'>
                <Icons.mail className='w-4 h-4'/>
               <span > service@khitzay.com</span></p>
             </div>
              </div>
         </div>
          <div className=' container hidden md:grid mx-auto  grid-cols-4 text-white my-[20px] mb-[40px]'>
              <div className=' '>
                   <h3 className={cn(palyfair.className,' mb-4 text-lg uppercase')}>Quick Link</h3>
             <ul className='text-white text-xs gap-3 flex mb-4 flex-col '>
        <li>About Us</li>
        <li>Privacy Policy</li>
        <li>How To Buy Guide?</li>
        </ul>
             </div>
              <div className=' '>
                   <h3 className={cn(palyfair.className,' mb-4 text-lg uppercase')}>HELP</h3>
                <ul className='text-white text-xs flex h-full mb-4 h flex-col gap-3'>
        <li>Payment</li>
        <li>Returns & Exchange</li>
        <li>Delivery</li>
        <li>FAQ</li>
      </ul>
             </div>
              <div className=' '>
                   <h3 className={cn(palyfair.className,' mb-4 text-lg uppercase')}>My Account</h3>
             <ul className='text-white text-xs flex mb-4 flex-col gap-3'>
        <li>My Personal Information</li>
      </ul>    
             </div>
              <div className=' '>
                   <h3 className={cn(palyfair.className,' mb-4 text-lg uppercase')}>Contact Us</h3>
              <div className='flex flex-col gap-3'>
              <p className='text-xs flex items-center gap-2'>
                <Icons.phone className='w-4 h-4'/>
                <span>09942176731</span></p>
              <p className='text-xs flex items-center gap-2'>
                <Icons.mail className='w-4 h-4'/>
               <span > service@khitzay.com</span></p>
             </div>
              </div>
              
          </div>
           <div className='border-[0.3px] lg:container mx-auto  border-[#414141]'></div>
          <p className=' text-white lg:text-left lg:container lg:mx-auto lg:text-xs text-center text-sm mt-[40px]  my-[20px]'>© 2020 KhitZay. All Rights Reserved.</p>
    </div>
  )
}
