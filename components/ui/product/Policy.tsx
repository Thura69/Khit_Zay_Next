'use client'
import { cn } from '@/utils/cn';
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';


export const Policy = () => {

  const [count, setCount] = useState(1);

  const handleClick = (e:number) => {
    setCount(e);
  };

 const renderComponentBasedOnProjectName =()=> {
    switch (count) {
      case 1:
        return <p className='text-[#555555] text-xs my-[30px]'>
    ADILETTE AQUA SLIDESPOST-SWIM SLIDES WITH ENHANCED CUSHIONING.Rinse off after the pool in these shower-friendly sandals. Keeping it simple, the smooth slip-ons reveal their adidas DNA with signature 3-Stripes. Soft cushioning rewards tired feet with plush comfort.
    </p>;
      case 2:
        return <ReturnAndExchange />;
      case 3:
        return <Delivery />;
      default:
        return <p className='text-[#555555]  text-xs my-[30px]'>
    ADILETTE AQUA SLIDESPOST-SWIM SLIDES WITH ENHANCED CUSHIONING.Rinse off after the pool in these shower-friendly sandals. Keeping it simple, the smooth slip-ons reveal their adidas DNA with signature 3-Stripes. Soft cushioning rewards tired feet with plush comfort.
    </p>;
    }
  }

    return (
   <div>
     <p className='text-[#555555] md:hidden text-xs my-[20px]'>
    ADILETTE AQUA SLIDESPOST-SWIM SLIDES WITH ENHANCED CUSHIONING.Rinse off after the pool in these shower-friendly sandals. Keeping it simple, the smooth slip-ons reveal their adidas DNA with signature 3-Stripes. Soft cushioning rewards tired feet with plush comfort.
    </p>
    <div className='my-[70px] hidden md:block'>
      <ul className='flex uppercase text-[#555555] text-sm border-b'>
        <li onClick={()=>handleClick(1)} className={cn(count === 1 && 'border-black border-b cursor','-pointer transition-all duration-500  px-6 py-4')}>Product Details</li>
        <li onClick={()=>handleClick(2)} className={cn(count === 2 && 'border-black border-b',' cursor-pointer transition-all duration-500  px-6 py-4')}>Returns and exchange</li>
        <li onClick={()=>handleClick(3)} className={cn(count === 3 && 'border-black border-b','transition-all duration-500  cur  px-6 py-4')}>Delivery</li>
      </ul>
      <div>
        <CSSTransition
  in={true}
  appear
  timeout={300}
  classNames="fade"
  unmountOnExit
  
> 
         {renderComponentBasedOnProjectName()}
         </CSSTransition>
      </div>
    </div>
   </div>
  )
}

const ReturnAndExchange = () => {
  return <div className='flex flex-col items-start justify-center gap-2 my-[30px]'>
    <p  className='text-sm font-bold'>Returns Policies</p>
    <p className='text-[#555555] text-xs'>The product(s) must be in their original packaging, if applicable, in the same condition it was received. We do not accept returns for perishable items, intimate items, gift cards, and beauty items. If you wish to return your item, we must receive your request within (7 days) of the date you received your item. The conditions we accept to return the products are Unopened, Unused, No damages with the original tags still intact.</p>
    <p className='text-xs font-bold'>How to return product?</p>
    <p className='text-xs text-[#555555] font-bold'>Q. How can I return the product at Door steps ?</p>
    <p className='text-xs text-[#555555] '>A. You can simply return on the spot of Door Steps and just make a call to our Call Center 09977000333 for returning the order presenting by Order ID.</p>
    <p className='text-xs text-[#555555] font-bold'>Q. How can I return the product within 7 Days Return Policies ?</p>
    <p className='text-xs text-[#555555] '>A. You should aware the policies of return within 7 Days before making decision of returning the products, such as Unopened, Unused, No damages with the original tags still intact. If we found out something invalid to the core policies of return products when it arrived back to Khit Zay, we will contact you for the decisions of mediation between Brands (Sellers) and Buyers.</p>
    <p className='text-xs text-[#555555] font-bold'>Q. How can I return the product at Partner Brand Stores ?</p>
    <p className='text-xs text-[#555555]'>A. It’s simple that you can drop-off your desirable return products at our Partner selected Brand Stores. Our Call Center Staffs will call you for the further processes.</p>
    <p className='text-xs text-[#555555] font-bold'>Q. How can I return the products if it paid ?</p>
    <p className='text-xs text-[#555555]'>A. If your product is defective/damage at the time of delivery, please contact our Call Center 09977000333 for return decisions making. Your product may be eligible for replacement depending on the product category and condition. Or we will offer you for the same amount of Gift Card Code to redeem other products purchasing on Khit Zay Website.</p>
    <p className='text-xs font-bold'>Exchange Policies</p>
    <p className='text-xs text-[#555555] '>The Exchangeable Product(s) can be in the conditions of Core Returns Policies within (7) it was received.</p>
    <p className='text-xs  font-bold'>How to exchange product?</p>
    <p className='text-xs text-[#555555]  font-bold'>Q. How can I exchange the full/partial order ?</p>
    <p className='text-xs text-[#555555]'>A. Very simple that you can make a call to our Call Center 09977000333 for exchanging full or partial order of the products via any Delivery Services on own costs of Customers address our Khit Zay Office Location which is provided under the title of contact us.</p>
    <p className='text-xs  font-bold'>Q. How do I know products can be exchangeable ?</p>
    <p className='text-xs text-[#555555]'>A. We do not accept returns for perishable items, intimate items, gift cards, and beauty items.Products with Regular selling prices can be exchangeable under the core policies of returning the products. All the promotional items are not exchangeable.</p>
  </div>
}
const Delivery = () => {
  return <div className='flex flex-col items-start justify-center gap-2 my-[30px]'>
    <p  className='text-sm font-bold'>Delivery</p>
    <p className='text-[#555555] text-xs font-bold'>Q. Delivery Time</p>
    <p className='text-xs '>A. Normally, delivery time based on the township, cities and states. For example, Yangon can be done</p>
    <p className='text-xs text-[#555555] font-bold'>Q. How do I know my order is shipped ?</p>
    <p className='text-xs text-[#555555] '>A. The system will notice you via SMS as the order is being ship.</p>
    <p className='text-xs text-[#555555] font-bold'>Q. Khit Zay delivers out of Yangon ?</p>
    <p className='text-xs text-[#555555] '>A. Yes we will deliver within the logisitic partners are available. The list can be seen in Available States and Divisions.</p>
    <p className='text-xs text-[#555555] font-bold'>Q. Can I change my address during my order is shipping ?</p>
    <p className='text-xs text-[#555555]'>A. The changing address of delivery location can be done before your order was confirmed.</p>
    <p className='text-xs text-[#555555] font-bold'>Q. Can my order deliver to the office address ?</p>
    <p className='text-xs text-[#555555]'>A. Yes we can. And the exact shipping address should be provided before order has confirmation.</p>
    <p className='text-xs text-[#555555]  font-bold'>Q. Will somebody contact me before my order delivery ?</p>
    <p className='text-xs text-[#555555] '>A. Yes our logistics and delivery team will contact for sending the parcels.</p>
    <p className='text-xs  font-bold'>Avaliable states and divisions</p>
    <p className='text-xs text-[#555555]  font-bold'>We will provide the exact list detail after discussion with Logistics Partners.</p>
  </div>
}
