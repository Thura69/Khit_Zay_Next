import React, { FC } from 'react'
import { FilterPropertiesElement,FilterPropertiesElementType, FilterPropertiesInstance } from './FilterPropertiesElement'
import {ChevronDown,ChevronUp} from 'lucide-react'
import { Checkbox, Radio, Switch } from 'pretty-checkbox-react';

const type: FilterPropertiesElementType = 'Category';

export const CategoryPropertiesElement:FilterPropertiesElement = {
  type,
  designerLiElement: {
    iconDown: ChevronDown,
    iconUp:ChevronUp,
    title: "Category",
    delete:DeleteButton
  },
  propertiesComponent:PropertiesComponent
}


function DeleteButton  () {
  return (
    <button><div><p className='text-sm hover:underline text-[#555555]'>Clear</p></div></button>
  )
}



function PropertiesComponent({ listInstance }: { listInstance: FilterPropertiesInstance }) {
  const { title,count } = listInstance;
  return (
    <div className='flex my-[0.5px] items-center gap-2 text-[#555555] text-sm'>
    <input type="checkbox" className="focus:outline-current focus:outline-offset-2 focus:outline-solid"/>
      <label htmlFor="vehicle1" className='text-sm'> {title}</label>
      <p className='text-xs'>({count})</p>
    </div>
  )
}

export default CategoryPropertiesElement


