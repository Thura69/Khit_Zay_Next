import React from 'react'

export const CartOrderContent = () => {
  return (
    <div className='w-full md:w-[30%]  text-[#555555]'>
        <div>
          <p className='text-sm text-black text-center lg:text-start mb-3'>ADD A NOTE TO YOUR ORDER</p>
          <textarea className='h-[100px] md:h-[200px] text-xs text-[#555555] outline-none resize-none w-full border p-4'></textarea>
       </div>
       <div className='border p-5 flex-col flex mt-[20px] gap-3'>
        <p className='flex justify-between'><span className='text-sm text-black '>SUBTOTAL</span> <span> K99,000</span></p>
              <i className='text-xs '>Shipping & taxes calculated at checkout</i>
        <button className='bg-black w-full hover:bg-[#303030] duration-300 flex items-center spacing tracking-[2px]  justify-center uppercase mt-1 py-3 px-4 text-xs text-white  text-center gap-2'><span>CHECK OUT</span> </button>
       </div>
    </div>
  )
}

