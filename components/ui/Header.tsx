'use client'
import { siteConfig } from '@/config/site'
import React, { useState } from 'react'
import { Icons } from '../icons'
import Logo from '@/public/khit_logo.webp';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { MobileSlide } from './MobileSlide';
import { CartProductCard } from './cart/CartProductCard';
import { Cart } from './cart/Cart';
import { Search } from './search/Search';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const iconsSize = "w-4 h-4"

export const Header = () => {
  const [menuHeader, setMenuHeader] = useState<boolean>(false);
  const [men, setMen] = useState();
  const [women, setWomen] = useState();
  const [count, setCount] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const router = useRouter();

  
  return (
      <>
      <div className=' bg-[#141414] flex px-[10px] justify-start h-[40px] w-full text-white'>
        <span className='flex sm:mx-auto md:mx-0  items-center gap-1'>
         <Icons.phone  className='w-4 h-4  '/>
          <a
            className=' text-[12px]'
            href={`tel:${siteConfig.phone}`}
          >{siteConfig.phone}</a>
        </span>
      </div>
      <header className='h-[80px] px-[8px] md:px-[15px] lg:px-[30px] w-full flex justify-between items-center '>
      <div className='flex gap-3 md:hidden'>
          <button onClick={()=>setMenuHeader((prev)=>!prev)} className='  cursor-pointer'><Icons.menu className='w-5 h-5' /></button>
          <button className='    cursor-pointer'><Icons.user onClick={()=>router.push('/login')} className='w-5 h-5'/></button>
      </div>
      <Image onClick={()=>{router.push('/')}}  alt='khit_logo' className='w-[140px] cursor-pointer  h-[50px]' src={Logo}/>
      <ul className=' hidden md:flex  gap-[30px] justify-between items-center text-xs'>
        <li><Link href={'/'}>HOME</Link></li>
          <li className='flex relative  gap-1 group items-center'>MEN <Icons.down className={cn(iconsSize)} />
          <ul className=' absolute border hidden group-hover:block translate-y-[40px] opacity-0 group-hover:opacity-100 duration-300 z-40 transition-all group-hover:translate-y-[-16px] my-4 top-[100%] bg-white w-[200px] py-3'>
            <li onClick={()=>router.push('/products')} className='p-2 cursor-pointer hover:bg-[#dddddd55]'>APPAREL</li>
            <li onClick={()=>router.push('/products')} className='p-2 cursor-pointer hover:bg-[#dddddd55]'>FOOTWEAR</li>
            <li onClick={()=>router.push('/products')} className='p-2 cursor-pointer hover:bg-[#dddddd55]'>ACCESSORIES</li>
            <li onClick={()=>router.push('/products')} className='p-2 cursor-pointer hover:bg-[#dddddd55]'>BEAUTY & HEALTH</li>
          </ul>
          </li>
        
          <li className='flex gap-1 group relative items-center'>WOMEN<Icons.down className={cn(iconsSize)} />
           <ul className=' absolute border hidden group-hover:block translate-y-[40px] opacity-0 group-hover:opacity-100 duration-300 z-40 transition-all group-hover:translate-y-[-16px] my-4 top-[100%] bg-white w-[200px] py-3'>
            <li onClick={()=>router.push('/products')} className='p-2 cursor-pointer hover:bg-[#dddddd55]'>APPAREL</li>
            <li onClick={()=>router.push('/products')} className='p-2 cursor-pointer hover:bg-[#dddddd55]'>FOOTWEAR</li>
            <li onClick={()=>router.push('/products')} className='p-2 cursor-pointer hover:bg-[#dddddd55]'>ACCESSORIES</li>
            <li onClick={()=>router.push('/products')} className='p-2 cursor-pointer hover:bg-[#dddddd55]'>BEAUTY & HEALTH</li>
          </ul>
          </li>
          <li className='flex gap-1 relative group items-center'>KIDS<Icons.down className={cn(iconsSize)} />
           <ul className=' absolute border hidden group-hover:block translate-y-[40px] opacity-0 group-hover:opacity-100 duration-300 z-40 transition-all group-hover:translate-y-[-16px] my-4 top-[100%] bg-white w-[200px] py-3'>
            <li onClick={()=>router.push('/products')} className='p-2 cursor-pointer hover:bg-[#dddddd55]'>APPAREL</li>
            <li onClick={()=>router.push('/products')} className='p-2 cursor-pointer hover:bg-[#dddddd55]'>FOOTWEAR</li>
          </ul>
          </li>
       
          <li><Link href={"/products"}>ALL ITEMS</Link></li>
           <li ><Link href={'/login'}>LOGIN</Link></li>
      </ul>
      <div className='flex gap-3 '>
          <button onClick={()=>setSearch((prev)=>!prev)}>
             <Icons.search className='w-5 h-5' />
         </button>
          <button onClick={()=>setCount((prev)=>!prev)} className='relative flex '>
            <Icons.bag className='w-5 h-5' />
            <span className=' translate-y-[-10px] bg-black text-white px-2 rounded-full top-[-95%] left-[8px] text-[8px] p-1 '>7</span>
            <div className={cn(count ? 'max-h-[500px] h-auto py-2 opacity-1' : 'max-h-0 opacity-0', ' overflow-hidden  z-20  transition-all duration-500 absolute border w-[330px] text-xs  top-[140%] bg-white  left-[-300px]')}>
              {/* <p> You don&#39;t have any items in your cart.</p> */}
              <Cart/>
            </div>
          </button>
      </div>
      </header>
      <MobileSlide menuHeader={menuHeader} setMenuHeader={setMenuHeader} />
      {
        search && <Search search={search} setSearch={setSearch} />
      }
      </>
  )
}
