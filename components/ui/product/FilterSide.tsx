'use client'
import React from 'react';
import FilterList from './FilterList'
import PropertiesComponent from './FilterProperties/PropertiesComponent'
import { Range,getTrackBackground } from 'react-range';

const STEP = 0.1;
const MIN = 0;
const MAX = 50;

export const FilterSide = () => {

    const [values, setValues] = React.useState([10,25 ]);
    
  return (
    <div className='bg-[#dddddd55]  p-1 w-[20%] '>
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
                  <input  className='w-[50%] outline-none px-2 border h-[35px]' />
                  -
                  <input  className='w-[50%] outline-none px-2 border h-[35px]'/>
         </div>
         <div className=' bg-gray-300 relative h-[5px]'>
            <div className=' bg-gray-700 h-[5px] absolute left-[25%] right-[25%]'></div>
         </div>
          </FilterList>


    </div>
  )
}
