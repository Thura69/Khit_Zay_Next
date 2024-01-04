import React, { ReactElement } from 'react'
import { GenderPropertiesElement } from './GenderPropertiesElement';
import { LucideIcon } from 'lucide-react';


export type FilterPropertiesElementType ='Gender';


export type FilterPropertiesElement = {
  type:FilterPropertiesElementType,
  designerLiElement: {
    iconDown: React.ElementType,
    iconUp:React.ElementType,
    title: string,
    delete: React.FC
  },
  propertiesComponent: React.FC<{
    listInstance:FilterPropertiesInstance
  }>
}

export type FilterPropertiesInstance = {
  title: string,
  count:number
} 

export type filterListsElement = {
  list:React.FC
}

type FilterPropertiesType = {
  [key in FilterPropertiesElementType] : FilterPropertiesElement
}

export const FilterPropertiesElements: FilterPropertiesType = {
  Gender: GenderPropertiesElement
};

    
