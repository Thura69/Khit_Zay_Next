import React from 'react'
import Arrival from '@/public/arrivals.webp';
import Original from '@/public/originals.webp';
import Men from '@/public/men.webp';
import Women from '@/public/women.webp';
import Kids from '@/public/kids.webp';
import Image from 'next/image';

export const SiteKinds = () => {
  return (
    <div className=' grid sm:grid-cols-3 items-center mt-[50px] gap-3  justify-center'>
        <Image src={Arrival} alt='arrival'/>
        <Image src={Original} alt='arrival'/>
        <Image src={Men} alt='arrival'/>
        <Image src={Women} alt='arrival'/>
        <Image src={Kids} alt='arrival'/>
    </div>
  )
}
