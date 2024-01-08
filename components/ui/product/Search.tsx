'use client'
import { Icons } from '@/components/icons'
import { cn } from '@/utils/cn';
import React, { useState } from 'react'
import { MobileFilter } from './FilterProperties/MobileFilter';

const listCls = 'p-2 px-3 duration-200 cursor-pointer hover:bg-[#dddddd55]';

export const SearchProduct = () => {
    const [filter, setFilter] = useState(false);
    const [show, setShow] = useState(false);
    const [showFilter, setShowFilter] = useState(false);


  return (
      <>
    <div className='border text-sm text-[#555555] gap-2 px-2 items-center w-full bg-white flex  h-[40px]'>
          <Icons.search className='w-4 h-4' />
          <input placeholder='search products' className=' outline-none'/>
    </div>
    <div className='flex flex-col md:flex-row lg:justify-end relative justify-end gap-2 my-3'>
        <button onClick={()=>{
            setShow((prev)=>!prev);
            setFilter(false);
        }}   className=' bg-[#dddddd55] relative hidden lg:flex text-xs text-[#555555] p-3 px-3 gap-3 items-center'>
                  <p>Show</p>
                  <p className='flex items-center'>24 <Icons.down className='w-4 h-4' /></p>
                  
        <div className={cn(show ? 'max-h-[500px] h-auto py-2 opacity-1' : 'max-h-0 opacity-0', ' overflow-hidden  top-[100%] z-20  transition-all duration-500 absolute border w-full text-xs  bg-white  right-[0px]')}>
              {/* <p> You don&#39;t have any items in your cart.</p> */}
        <ul className='text-[#555555]  text-sm'>
            <li className={listCls}>9</li>
            <li className={listCls}>12</li>
            <li className={listCls}>24</li>
            <li className={listCls}>48</li>
        </ul>
            </div>
        </button>
         
        
        <button onClick={()=>{
            setShowFilter((prev)=>!prev);
            setShow(false);
        }} className='flex bg-[#dddddd55] lg:hidden   w-full border justify-start text-xs text-[#555555] p-3 px-3 gap-1 items-center'>
                  <Icons.filter className='w-4 h-4'/>
                  <p>Filter By</p>

        </button>
        <button onClick={()=>{
            setFilter((prev)=>!prev);
            setShow(false);
        }} className='flex bg-[#dddddd55] lg:w-[240px] relative w-full border justify-between text-xs text-[#555555] p-3 px-3 gap-3 items-center'>
                  <p>Best Selling</p>
                  <Icons.down className='w-4 h-4' />
                  
          <div className={cn(filter ? 'max-h-[500px] h-auto py-2 opacity-1' : 'max-h-0 opacity-0', ' overflow-hidden  top-[105%]   z-20 transition-all duration-500 absolute border w-full lg:w-[240px] text-xs  bg-white  right-[0px]')}>
              {/* <p> You don&#39;t have any items in your cart.</p> */}
        <ul className='text-[#555555] text-start py-1 text-[14px]'>
            <li className={listCls}>Featured</li>
            <li className={listCls}>Availability</li>
            <li className={listCls}>Relevance</li>
            <li className={listCls}>Best Selling</li>
            <li className={listCls}>Alphabetically, A-Z</li>
            <li className={listCls}>Alphabetically, Z-A</li>
            <li className={listCls}>Price, low to high</li>
            <li className={listCls}>Price, high to low</li>
            <li className={listCls}>% Sale off</li>
        </ul>
            </div>
        </button>
       
          </div>
          {
              showFilter && <MobileFilter menuHeader={ showFilter} setMenuHeader={setShowFilter}/>
          }
      </>
  )
}
