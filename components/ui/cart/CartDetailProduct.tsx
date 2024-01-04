'use client'
import { Icons } from '@/components/icons'
import React, { useState } from 'react'
import Img from '@/public/one.jpg';
import Image from 'next/image';
import { cn } from '@/utils/cn';


export const CartDetailProduct = () => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
      <>
      <tr className='border-t flex md:table-row items-center justify-between '>
    <td className='flex items-center gap-3 py-3 '>
        <Image src={Img} className='w-[75px] lg:w-[90px]' alt='hello'/>
       <div className='flex flex-col items-start'>
         <p className='text-[#555555] text-xs lg:text-sm'>adidas-ADILETTE SHOWER-Slides-Unisex</p>
        <i className='text-[#555555] text-xs' >Size:9</i>
       </div>
    </td>
    <td className='hidden md:table-cell '>
        <p className='text-[#555555] text-sm py-3'>K99,000</p>
    </td>
    <td className='hidden md:table-cell'>
        <div className=' flex justify-center'>
                <button className='  h-[30px] bg-gray-100 w-[35px] flex items-center justify-center'><Icons.minus className='w-4 h-4'/></button>
                <button className='border h-[30px] bg-white w-[40px] text-xs flex items-center justify-center'>1</button>
              
                <button className=' h-[30px] bg-gray-100 w-[35px] flex items-center justify-center'><Icons.plus className='w-4 h-4'/></button>
            </div>
    </td>
    <td className=''>
      <div className='flex flex-col justify-end md:flex-row items-center gap-3'>
          <p className='text-[#555555] text-sm '>K99,000</p>
         <button className='hidden  h-[30px] bg-gray-100 w-[35px] lg:flex items-center justify-center'><Icons.closeX className='w-4 h-4'/></button>
         <button className='md:hidden bg-gray-100 text-xs p-1  px-3 border-black border lg:hidden items-center justify-center' onClick={()=>setIsEdit((prev)=>!prev)}>EDIT</button>
      </div>
    </td>
  </tr>
  {
    isEdit && <div className={cn(isEdit ? ' max-h-[50px]  opacity-1' : 'max-h-0 opacity-0','flex mb-5   transition-all duration-500   md:hidden  justify-between w-full ')}>
     <button className=' bg-gray-100 text-xs  px-2 border-black border lg:flex items-center justify-center'><Icons.closeX className="w-4 h-4"/></button>
    <div className=' flex justify-center'>
    <button className='  h-[30px] bg-gray-100 w-[35px] flex items-center justify-center'><Icons.minus className='w-4 h-4'/></button>
    <button className='border h-[30px] bg-white w-[40px] text-xs flex items-center justify-center'>1</button>
    <button className=' h-[30px] bg-gray-100 w-[35px] flex items-center justify-center'><Icons.plus className='w-4 h-4'/></button>
    </div>
     <button className=' bg-black text-white px-3 text-xs  uppercase border-black border lg:flex items-center justify-center'>Update</button>
  </div>
  }
      </>
  
  )
}
