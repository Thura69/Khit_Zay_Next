import React from 'react'
import { Playfair } from 'next/font/google'
import { cn } from '@/utils/cn';
import Img from '@/public/one.jpg'
import Image from 'next/image';
import { Icons } from '@/components/icons';
import { CartDetailProduct } from './CartDetailProduct';

const palyfair = Playfair({ subsets: ['latin'] });


export const CartProductsEdit = () => {
  return (
    <div className='w-[100%] md:w-[70%] '>
        <table className=' w-full'>
  <tr className='text-md hidden md:table-row text-[#555555] border-b bg-[#e4e4e455] h-[40px] font-extralight'>
    <th className={cn(palyfair.className)}>
       PRODUCT 
    </th>
    <th className={cn(palyfair.className,' text-start')}>PRICE</th>
    <th className={cn(palyfair.className)}>QUANTITY</th>
    <th className={cn(palyfair.className)}>TOTAL</th>
  </tr>
  <CartDetailProduct/>
  <CartDetailProduct/>
  <CartDetailProduct/>


</table>
<div className='my-4 flex px-3 items-center gap-3 md:justify-between'>
    <button className='text-[#31a3a3] flex items-center gap-1 text-xs'><Icons.arrowRight className=' w-4 h-4 rotate-180'/> Continue Shopping</button>
    <button className='text-[#31a3a3] flex items-center gap-1 text-xs'><Icons.update className=' w-4 h-4 rotate-180'/> Update</button>
</div>
    </div>
  )
}
