'use client'
import React from 'react'
import Arrival from '@/public/arrivals.webp';
import Original from '@/public/originals.webp';
import Men from '@/public/men.webp';
import Women from '@/public/women.webp';
import Kids from '@/public/kids.webp';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const SiteKinds = () => {
  const router = useRouter();

  return (
    <div className=' grid sm:grid-cols-3 items-center mt-[50px] gap-3  justify-center'>
        <Image className=' cursor-pointer' onClick={()=>router.push('products')} src={Arrival} alt='arrival'/>
        <Image className='cursor-pointer' onClick={()=>router.push('products')} src={Original} alt='arrival'/>
        <Image className='cursor-pointer' onClick={()=>router.push('products')} src={Men} alt='arrival'/>
        <Image className='cursor-pointer' onClick={()=>router.push('products')} src={Women} alt='arrival'/>
        <Image className='cursor-pointer' onClick={()=>router.push('products')} src={Kids} alt='arrival'/>
    </div>
  )
}
