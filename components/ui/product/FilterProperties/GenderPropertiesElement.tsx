import React, { FC } from 'react'
import { FilterPropertiesElement,FilterPropertiesElementType, FilterPropertiesInstance } from './FilterPropertiesElement'
import {ChevronDown,ChevronUp} from 'lucide-react'
import { Checkbox, Radio, Switch } from 'pretty-checkbox-react';

const type: FilterPropertiesElementType = 'Gender';

export const GenderPropertiesElement:FilterPropertiesElement = {
  type,
  designerLiElement: {
    iconDown: ChevronDown,
    iconUp:ChevronUp,
    title: "Gender",
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
    <div className='flex items-center gap-1 text-[#555555] text-sm'>
    <input type="checkbox" className="focus:outline-current focus:outline-offset-2 focus:outline-solid"/>
      <label htmlFor="vehicle1"> {title}</label>
      <p>({count})</p>
    </div>
  )
}

export default GenderPropertiesElement


