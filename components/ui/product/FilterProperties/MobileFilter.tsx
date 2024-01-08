import React, { FC } from 'react'

import { cn } from '@/utils/cn';
import { FilterSide } from '../FilterSide';
import { Icons } from '@/components/icons';


const listCln = 'h-[40px] flex text-sm justify-between items-center px-4 border-[0.5px]';

interface MenuSlideProps  {
    menuHeader: boolean,
    setMenuHeader:(newValue:boolean)=>void
}

export const MobileFilter:FC<MenuSlideProps> = ({menuHeader,setMenuHeader}) => {
  return (
      <>
       <div className={cn(menuHeader ? 'translate-x-0 opacity-1' : 'translate-x-[-100%] opacity-0','w-[100%] lg:hidden   transition-all duration-500 z-50  fixed top-0 bottom-0 left-0 ')}>
        <div className='flex border fixed z-30 bg-white  items-center justify-between px-2  w-[70%] h-[50px] md:w-[40%] shadow-md'>
            <p>Filter By</p>
            <Icons.closeX className=' cursor-pointer' onClick={()=>setMenuHeader(false)}/>
        </div>
                   <FilterSide menuHeader={menuHeader} />
          <div className='flex border fixed bottom-0 z-30 bg-white  items-center justify-center px-2 w-[70%] md:w-[40%] h-[55px] shadow-lg  '>
           <div className='border w-[90%] text-center py-1 border-black'>
            <p className=' uppercase'>VIEW 1054 PROducts</p>
           </div>
        </div>
          </div>
        <div className={cn(menuHeader ? 'block opacity-1' : 'hidden opacity-0','w-[100%] transition-all duration-300 z-30  lg:hidden fixed top-0 bottom-0 left-0 bg-[#191919c2]')}></div>
      </>
  )
}
