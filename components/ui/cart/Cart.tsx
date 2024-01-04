import React from 'react'
import { CartProductCard } from './CartProductCard'

export const Cart = () => {
  return (
    <div className='p-3'>
      <div className='flex flex-col gap-3'>
        <div className=' h-[270px] flex flex-col gap-3 overflow-y-scroll'>
        <CartProductCard/>
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
       </div>
        <div className=' border-[0.5px]'></div>
        <p className='flex text-md text-[#555555] items-center justify-between'>TOTAL: <span className='text-[15px]'>K316,800</span></p>
        <div className='border-[0.5px]'></div>
        <button className='border-black border bg-gray-200 h-[35px]'><p>VIEW CART</p></button>
        <button className='border-black border bg-black text-white h-[40px]'><p>CHECKOUT</p></button>
      </div>
    </div>
  )
}
