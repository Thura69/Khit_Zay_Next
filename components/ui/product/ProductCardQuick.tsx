import { Icons } from '@/components/icons'
import Image from 'next/image'
import React, { FC } from 'react'
import Img_one from '../../../public/one.jpg';

interface ProductCardQuickProps {
    setQuick:(newValue:boolean)=>void
}

export const ProductCardQuick:FC<ProductCardQuickProps> = ({setQuick}) => {
  return (
     <div className="bg-[#333333ce] fixed flex items-center justify-center  z-50 top-0 left-0 right-0 bottom-0">
        <div className='bg-white lg:flex gap-[30px] relative text-sm text-[#555555] lg:p-5 p-3 lg:w-auto w-[90%] rounded h-auto'>
          <Icons.closeX onClick={()=>setQuick(false)} className=' cursor-pointer absolute top-0 right-0'/>
          <div>
             <Image src={Img_one} className='lg:w-[350px]' alt='ikg' />
          </div>
          <div className='flex lg:w-[350px] lg:gap-[10px] flex-col gap-2'>
             <p>adidas-FACE CVR SMALL-MASKS-UNISEX</p>
          <p>K44,500</p>
          <div className='flex flex-col gap-1'>
            <p>SIZE:XS</p>
            <div className='flex gap-1 flex-wrap'>
         <button className='px-2 py-1 border'>xs</button>
         <button className='px-2 py-1 border'>xs</button>
         <button className='px-2 py-1 border'>xs</button>
         <button className='px-2 py-1 border'>xs</button>
         <button className='px-2 py-1 border'>xs</button>
        </div>
            </div>
             <div className=' flex w-[30%]'>
                <button className='  h-[40px] bg-gray-100 w-[40px] flex items-center justify-center'><Icons.minus className='w-4 h-4'/></button>
                <button className='border h-[40px] bg-white w-[45px] flex items-center justify-center'>1</button>
              
                <button className=' h-[40px] bg-gray-100 w-[50px] flex items-center justify-center'><Icons.plus className='w-4 h-4'/></button>
            </div>
          <button className='w-full lg:mt-[30px] border bg-black text-white h-[40px] '>
            <h3 className=' uppercase'>ADD TO CART</h3>
          </button>
        </div>
        </div>
      </div>
  )
}
