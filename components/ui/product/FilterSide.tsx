'use client'
import React, { FC, useEffect } from 'react';
import FilterList from './FilterList'
import PropertiesComponent from './FilterProperties/PropertiesComponent'
import { Range,getTrackBackground } from 'react-range';
import './FilterSide.css'
import { useRef } from 'react';
import Slider from 'react-slider'
import { cn } from '@/utils/cn';

  const MIN = 21700;
  const MAX = 814500;
  const MIN_P = 0;
  const MAX_P = 30;
  
  interface FilterSideProps  {
    menuHeader?: boolean,
}

export const FilterSide:FC<FilterSideProps> = ({menuHeader}) => {

    const [values, setValues] = React.useState([MIN, MAX]);
    const [percent, setPercent] = React.useState([MIN_P, MAX_P]);

  


    
  return (
    <div className={cn(menuHeader?'w-[70%] md:w-[40%]    fixed top-[50px] bottom-[50px] left-0 ':'hidden','lg:bg-[#dddddd55] bg-white lg:w-[250px]   shadow  lg:block md:px-3 overflow-scroll   ')}>
        <FilterList title='Gender'>
            <PropertiesComponent title='Men' count={20}/>
            <PropertiesComponent title='Women' count={20}/>
        </FilterList>
        <FilterList title='Category'>
            <PropertiesComponent title='Accessories' count={20}/>
            <PropertiesComponent title='Apparel' count={20}/>
            <PropertiesComponent title='Footwear' count={20}/>
        </FilterList>
        <FilterList title='Sub Category'>
            <PropertiesComponent title='Polo' count={20}/>
            <PropertiesComponent title='T-Shirt' count={20}/>
            <PropertiesComponent title='Tight' count={20}/>
            <PropertiesComponent title='Jacket' count={20}/>
            <PropertiesComponent title='Pant' count={20}/>
        </FilterList>
        <FilterList title='Color'>
            <PropertiesComponent title='A/L7"' count={1}/>
            <PropertiesComponent title='A/M7' count={20}/>
            <PropertiesComponent title='A/XL7' count={20}/>
        </FilterList>
        <FilterList title='Size'>
            <PropertiesComponent title='10' count={1}/>
            <PropertiesComponent title='11' count={20}/>
            <PropertiesComponent title='2XL' count={20}/>
            <PropertiesComponent title='4' count={20}/>
            <PropertiesComponent title='5' count={20}/>
            <PropertiesComponent title='6' count={20}/>
            <PropertiesComponent title='7' count={20}/>
        </FilterList>
        <FilterList title='Price'>
         <div className='flex items-center text-xs text-[#555555] gap-2'>
                  <input value={values[0]}  className='w-[50%] outline-none px-2 border h-[35px]' />
                  -
                  <input value={values[1]} className='w-[50%] outline-none px-2 border h-[35px]'/>
         </div>
              <Slider
                  className='w-full h-[9px] mt-2 bg-gray-300'
                  onChange={setValues}
                  value={values}
                  min={MIN}
                  max={MAX} />
              <div className='flex justify-between mt-[-3px]'>
                  <div className='h-[8px] border-gray-300 w-[1px] border-[0.5px]'></div>
                  <div className='h-[5px] border-gray-300 w-[1px] border-[0.5px]'></div>
                  <div className='h-[5px] border-gray-300 w-[1px] border-[0.5px]'></div>
                  <div className='h-[5px] border-gray-300 w-[1px] border-[0.5px]'></div>
                  <div className='h-[8px] border-gray-300 w-[1px] border-[0.5px]'></div>
              </div>
              <div className='flex justify-between text-xs text-[#737373]'>
                  <p>K{values[0]}</p>
                  <p>K{values[1]}</p>
              </div>
          </FilterList>
        <FilterList title='Percent Sale'>
         <div className='flex items-center text-xs text-[#555555] gap-2'>
                  <input value={percent[0]}  className='w-[50%] outline-none px-2 border h-[35px]' />
                  -
                  <input value={percent[1]} className='w-[50%] outline-none px-2 border h-[35px]'/>
         </div>
              <Slider
                  className='w-full h-[9px] mt-2 bg-gray-300'
                  onChange={setPercent}
                  value={percent}
                  min={MIN_P}
                  max={MAX_P} />
              <div className='flex justify-between mt-[-3px]'>
                  <div className='h-[8px] border-gray-300 w-[1px] border-[0.5px]'></div>
                  <div className='h-[5px] border-gray-300 w-[1px] border-[0.5px]'></div>
                  <div className='h-[5px] border-gray-300 w-[1px] border-[0.5px]'></div>
                  <div className='h-[5px] border-gray-300 w-[1px] border-[0.5px]'></div>
                  <div className='h-[8px] border-gray-300 w-[1px] border-[0.5px]'></div>
              </div>
              <div className='flex justify-between text-xs text-[#737373]'>
                  <p>{percent[0]}%</p>
                  <p>{percent[1]}%</p>
              </div>
          </FilterList>


    </div>
  )
}
