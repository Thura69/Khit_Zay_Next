'use client'
import React, { useState } from 'react'
import Img_one from '@/public/one.jpg';
import Img_two from '@/public/two.jpg';
import Img_three from '@/public/three.jpg';
import Img_four from '@/public/four.webp';
import Image from 'next/image';
import { Icons } from '@/components/icons';
import { useRouter } from 'next/navigation';
import { ProductCardQuick } from './ProductCardQuick';



export const ProductCard = () => {

    const [productImg, setProductImg] = useState([Img_one, Img_two, Img_three, Img_four]);
    const [count, setCount] = useState(0);
    const [quick,setQuick] = useState(false);
    const router = useRouter();


    const handleSlice = (e: 'i' | 'd') => {
        if (e === 'i') {
            if (count === (productImg.length - 1) ) {
                setCount(0);
                return;
            } else {
                   setCount((prev) => prev + 1);
            }
         
        }
        if (e === 'd') {
            if (count === 0) {
                setCount(productImg.length - 1);
                return;
            } else {
              setCount((prev) => prev - 1);
            }
          
        }
    
    };
  
   

  return (
    <>
      <div className='border p-2  shadow'>
          <div
          className='border relative overflow-hidden cursor-pointer  group'
          onMouseOver={()=>{setCount(1)}}
          onMouseLeave={()=>{setCount(0)}}
          >
               <Image onClick={()=>{router.push('products/1')}} className='hover:opacity-80 duration-200' src={productImg[count]} alt='dd'/>
               <button onClick={()=>setQuick((prev)=>!prev)} className=' border p-2 md:translate-x-[100px] group-hover:translate-x-0 opacity-1 md:opacity-0 group-hover:opacity-100 duration-500  absolute top-1 bg-white right-1'><Icons.eye className='w-4 h-4'/></button>
              <div className='absolute md:translate-y-[100px] gap-1 flex duration-500 group-hover:translate-y-0 bottom-1 right-1'>
                    <button onClick={()=>handleSlice('i')} className=' duration-500 border p-2 hover:bg-[#333] hover:text-white  bg-white '><Icons.left className='w-4 h-4'/></button>
                    <button onClick={()=>handleSlice('d')} className=' duration-500 border p-2  hover:bg-[#333] hover:text-white  bg-white '><Icons.right className='w-4 h-4'/></button>
             </div>
        </div>
        <div className='text-sm flex mt-2 flex-col gap-2 text-[#555555]'>
            <p>adidas-FACE CVR SMALL-MASKS-UNISEX</p>
            <p>K44,500</p>
        </div>
      </div>
      {
        quick && <ProductCardQuick setQuick={setQuick}/>
     }
    </>
  )
}
