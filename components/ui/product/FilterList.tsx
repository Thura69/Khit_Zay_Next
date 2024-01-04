'use client'
import { cn } from '@/utils/cn';
import { Playfair } from 'next/font/google'
import { ReactNode, useState } from 'react';
import { Icons } from '@/components/icons';

const palyfair = Playfair({ subsets: ['latin'] });
function FilterList({ title,children }: { title:string,children:ReactNode }) {
    const [show, setShow] = useState<boolean>(true);






  return (
      <div className=' border-b px-2  '>
          <div className='flex py-2 items-center justify-between'>
              <button  className='flex   gap-2 items-center'>
                 {
                    show ?  <Icons.down onClick={() => setShow((prev) => !prev)} className="w-4 h-4 cursor-pointer"/>: <Icons.up onClick={() => setShow((prev) => !prev)} className="w-4 h-4 cursor-pointer"/>
                 }
                  <h3 className={cn(palyfair.className, ' text-lg  uppercase')}>{title}</h3>
              </button>
              <button><div><p className='text-sm hidden hover:underline text-[#555555]'>Clear</p></div></button>
          </div>
          <div  className={cn(show? 'max-h-[250px] mt-2  h-auto  opacity-1 mb-3' : 'max-h-0 opacity-0',' flex flex-col gap-2  duration-200 transition-all')}>
        {
            children
        }
          </div>

      </div>
  )
}




export default FilterList