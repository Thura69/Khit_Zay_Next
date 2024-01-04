'use client'
import { cn } from '@/utils/cn';
import React, { FC, useState } from 'react'
import { Playfair } from 'next/font/google'

const palyfair = Playfair({ subsets: ['latin'] });

export const FilterDropDown: FC<{ title: string,IconDown:React.ElementType,IconUp:React.ElementType,delete:React.FC }> = ({ title,IconDown,IconUp,delete : DeleteButton }) => {
    const [show, setShow] = useState<boolean>(false);
  return (
      <>
       <div className='flex items-center justify-between'>
            <div onClick={()=>setShow((prev)=>!prev)} className='flex gap-3 items-center'>
              <IconDown className="w-4 h-4" />
              <h3 className={cn(palyfair.className,' text-md font-bold uppercase')}>{title}</h3>
            </div>
              <DeleteButton/>
          </div>
          <div  className={cn(show? 'max-h-[100px] h-auto py-2 opacity-1' : 'max-h-0 opacity-0','mt-2 mb-3 flex flex-col gap-1')}>
          {/* <Properties listInstance={{title:'Accessories',count:95}} />
          <Properties listInstance={{title:'Apparel',count:593}} />
          <Properties listInstance={{title:'Footwear',count:362}} /> */}
          </div>
      </>
  )
}
