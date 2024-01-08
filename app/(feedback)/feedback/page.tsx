'use client'
import React, { useState } from 'react'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { AuthInput } from '@/components/ui/auth/AuthInput'
export default function Feedback() {
 const [rating, setRating] = useState(0) 

    
    

  return (
    <div className='text-xs lg:w-[500px] lg:mx-auto'>
          <p className=' uppercase text-[16px] text-center mb-2'>Give Feedback</p>
          <div className='  flex-col w-full gap-3 my-6 flex '>
              <AuthInput title='Email'/>
              <AuthInput title='Phone' />
              <p>What do you think of the using KhitZay?</p>
              <Rating style={{ maxWidth: 150 }} value={rating} onChange={setRating} />
              <p>Do You have thoughts you&apos;d like to share?</p>
              <textarea className='h-[200px] border outline-none'/>
          </div>
           <div className='w-full flex-col gap-6  flex items-center justify-center my-4'>
        <button className='bg-black p-3 px-6 text-xs  mx-auto text-white'>SUBMIT</button>
    </div>
    </div>
  )
}
