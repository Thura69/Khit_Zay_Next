'use client'
import { Icons } from '@/components/icons'
import { SearchIcon } from 'lucide-react'
import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group';
import { SearchCard } from './SearchCard';
import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/swiper-bundle.css";

interface SearchProps {
    search: boolean,
    setSearch:(newValue:boolean)=>void
}

export const Search:FC<SearchProps> = ({search,setSearch}) => {
    return (
      <div className='fixed overflow-scroll bg-[#000000ca] top-0 left-0 bottom-0 right-0 z-10'>
          <div className=' mt-[-10px] flex flex-col gap-2  absolute top-0 bg-[#f9f9f9] w-full p-5'>
              <div className='flex w-full mt-[10px] mb-[20px] justify-between gap-2   items-center'>
                  <div className='flex px-3 gap-2 bg-white items-center w-[95%]  h-[65px]'>
                  <SearchIcon className='w-4 lg:w-7 lg:h-7 h-4 text-gray-500 ' />
                  <input className=' outline-none text-md lg:text-xl text-[#555555]' placeholder='Search by keywords or #'/>
                  </div>
                  <Icons.closeX onClick={()=>setSearch(false)} className='w-8 cursor-pointer h-8 text-gray-500 '/>
              </div>
              <div className='flex flex-col md:flex-row w-full gap-7'>
                    <div className='w-full lg:w-[25%]  p-5 bg-white'>
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
                    <div className='flex lg:w-[75%] w-full gap-5  flex-col'>
                        <div className='h-[50px] flex items-center justify-between p-3 w-full bg-white'>
                            <p>Products</p>
                            <a className='text-sm underline text-blue-800'>View all products</a>
                        </div>
                        <div className='flex'>
                             <Swiper
            spaceBetween={10}
            direction='horizontal'
            slidesPerView={1}
            className='my-1 w-[90svw] mx-auto m-0 p-0'
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
    // when window width is >= 640px
    640: {
      width: 640,
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      width: 768,
      slidesPerView: 3,
    },
  }}                
                            
                            >
          <SwiperSlide>
          <SearchCard/>
          </SwiperSlide>        
          <SwiperSlide>
          <SearchCard/>
          </SwiperSlide>        
          <SwiperSlide>
          <SearchCard/>
          </SwiperSlide>        
          <SwiperSlide>
          <SearchCard/>
          </SwiperSlide>        
          <SwiperSlide>
          <SearchCard/>
          </SwiperSlide>        
          </Swiper>
                        </div>
                    </div>
              </div>
          </div>
    </div>
  )
}
