import React, { FC } from 'react'

interface AuthInputProps {
    title: string,
}

export const AuthInput:FC<AuthInputProps> = ({title}) => {
  return (
    <div className='text-sm'>
          <p className='text-xs mb-1 text-[#1e1e1ea0]'>{title}</p>
          <input className=' rounded h-[40px] w-full p-3 bg-white border' placeholder={title} /> 
    </div>
  )
}
