import { Icons } from '@/components/icons'
import React from 'react'

export const NoProducts = () => {
  return (
    <div className='container w-full flex h-[45svh] justify-center items-center flex-col gap-3  mx-auto'>
          <h2 className=' text-xl'>YOUR CART</h2>
          <p className='text-xs text-[#555555]'>You don&apos;t have any items in your cart.</p>
          <button className='bg-black hover:bg-[#303030] duration-300 flex items-center spacing tracking-[2px]  justify-center uppercase mt-1 py-2 px-4 text-xs text-white  text-center gap-2'><span>Continue shopping</span> <Icons.arrowRight className='w-5 h-5 text-white'/></button>
    </div>
  )
}
