import React, { FC } from 'react'
import { AuthInput } from './AuthInput'
import { Playfair } from 'next/font/google'
import { cn } from '@/utils/cn';
import { SignInProps } from './SignIn';
const palyfair = Playfair({ subsets: ['latin'] });


export const Forgot:FC<SignInProps> = ({setWhich}) => {
  return (
    <div className='text-xs lg:w-[500px] lg:mx-auto'>
          <h3 className={cn(palyfair.className,'text-[18px] mb-4 text-center')}>Reset your password</h3>
          <div className=' flex-col gap-2 flex '>
              <p className='mb-2 text-[#1e1e1ea0]'>We will send you an email to reset your password.</p>
              <AuthInput title='Email'/>
          </div>
           <div className='w-full flex-col gap-6  flex items-center justify-center my-4'>
        <button className='bg-black p-3 px-6 text-xs  mx-auto text-white'>SUBMIT</button>
        <button onClick={()=>setWhich(1)} className=' uppercase'>Cancel</button>
    </div>
    </div>
  )
}
