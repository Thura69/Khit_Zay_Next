'use client'
import { Icons } from '@/components/icons'
import { SearchIcon } from 'lucide-react'
import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group';


interface SearchProps {
    search: boolean,
    setSearch:(newValue:boolean)=>void
}

export const Search:FC<SearchProps> = ({search,setSearch}) => {
    return (
      <div className='fixed bg-[#000000ca] top-0 left-0 bottom-0 right-0 z-10'>
          <div className=' mt-[-10px] flex flex-col gap-2  absolute top-0 bg-[#f9f9f9] w-full p-5'>
              <div className='flex w-full mt-[10px] mb-[20px] justify-between gap-2   items-center'>
                  <div className='flex px-3 gap-2 bg-white items-center w-[95%]  h-[65px]'>
                  <SearchIcon className='w-4 lg:w-7 lg:h-7 h-4 text-gray-500 ' />
                  <input className=' outline-none text-md lg:text-xl text-[#555555]' placeholder='Search by keywords or #'/>
                  </div>
                  <Icons.closeX onClick={()=>setSearch(false)} className='w-8 cursor-pointer h-8 text-gray-500 '/>
              </div>
              <div className='flex w-full gap-7'>
                    <div className='w-[25%]  p-5 bg-white'>
                    <div>
                         <p className='text-lg '>Suggestions</p>
                     <ul className='text-sm my-3 flex gap-2 flex-col text-[#555555]'>
                        <li className='p-1 rounded px-2 duration-300 hover:bg-gray-200'>jeju aloe</li>
                        <li className='p-1 rounded px-2 duration-300 hover:bg-gray-200'>adidas</li>
                     </ul>
                    </div>
                    <div>
                         <p className='text-lg'>Collections</p>
                     <ul className='text-sm my-3 flex gap-2 flex-col text-[#555555]'>
                        <li className='p-1 rounded px-2 duration-300 hover:bg-gray-200'>Enjoyable Moment To A Dad</li>
                        <li className='p-1 rounded px-2 duration-300 hover:bg-gray-200'>Ipanema A Gift To Make Her SMILE</li>
                     </ul>
                    </div>
                    <div>
                         <p className='text-lg'>Pages</p>
                     <ul className='text-sm my-3 flex gap-2 flex-col text-[#555555]'>
                        <li className='p-1 rounded px-2 duration-300 hover:bg-gray-200'>Cros April</li>
                        <li className='p-1 rounded px-2 duration-300 hover:bg-gray-200'>About US</li>
                     </ul>
                    </div>
                    </div>
                    <div className='flex w-[75%] gap-5  flex-col'>
                        <div className='h-[50px] flex items-center justify-between p-3 w-full bg-white'>
                            <p>Products</p>
                            <a className='text-sm underline text-blue-800'>View all products</a>
                        </div>
                        <div className='h-[130px] bg-white'></div>
                    </div>
              </div>
          </div>
    </div>
  )
}
