'use client'
import React, { FC, ReactNode, useState } from 'react'
import { cn } from '@/utils/cn';
import { Icons } from '../icons';
import { Playfair } from 'next/font/google';
const palyfair = Playfair({ subsets: ['latin'] });


interface DropDownProperties {
    title: string,
    children:ReactNode
}

export const DropDown:FC<DropDownProperties> = ({title,children}) => {
     const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mb-2">
      <button
        onClick={toggle}
        className={cn(palyfair.className,"flex uppercase items-center text-lg justify-between w-full py-2 text-white font-semibold rounded-md focus:outline-none")}
      >
      {title}
        <span className="ml-2">{isOpen ? <Icons.up className='w-4 h-4'/> : <Icons.down className='w-4 h-4'/>}</span>
      </button>
     <div
        className={` text-gray-700 transition-all mb-1 duration-500 ${
          isOpen ? 'max-h-[120px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
     {
        children
     }
      </div>
      <div className='border-[0.3px]  border-[#414141]'></div>
    </div>
  )
}


export const MobileSideSliderDrop:FC<DropDownProperties> = ({title,children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div >
        <div onClick={toggle} className='h-[50px] flex text-sm justify-between items-center px-3 border-[0.5px]'>
            <p>{title}</p>
            {
              isOpen && <Icons.minus className='w-4 h-4'/>
            }
           {
            !isOpen && <Icons.plus className='w-4 h-4'/>
           }
        </div>
     <div
        className={` text-gray-700 transition-all  duration-500 ${
          isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
     {
        children
     }
      </div>
    </div>)
};