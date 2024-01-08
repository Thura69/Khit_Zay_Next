import { Icons } from '@/components/icons'
import React from 'react'

function Loading() {
  return (
    <div className='w-full h-full flex justify-center items-center'><Icons.loading className=" animate-spin"/></div>
  )
}

export default Loading