import React from 'react'
import Img from '@/public/one.jpg';
import Image from 'next/image';

export const SearchCard = () => {
  return (
    <div className='bg-white text-center text-[#555555] p-3 w-auto'>
          <Image className='' src={Img} alt='Hello' />
          <div className='my-5'>
              <h3 className='text-blue-900 text-sm'>Letter A</h3>
          <p className='text-sm'>adidas</p>
          <p className='text-sm'>2313414</p>
         </div>
    </div>
  )
}
