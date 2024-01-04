import React from 'react'
import { CartOrderContent } from './CartOrderContent'
import { CartProductsEdit } from './CartProductsEdit'

export const CartPage = () => {
  return (
      <div className='container lg:px-[30px] flex flex-col md:flex-row gap-[40px]  mx-auto'>
           <CartProductsEdit/>
          <CartOrderContent />
      </div>
  )
}
