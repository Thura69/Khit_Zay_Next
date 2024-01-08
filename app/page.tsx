'use client'
import { BannerProductCard, SiteBanner } from '@/components/ui/Site-banner'
import { SiteKinds } from '@/components/ui/Site-kinds'
import { Slider } from '@/components/ui/Slider'
import { Playfair } from 'next/font/google'
import { cn } from '@/utils/cn'
import { SigupForNew } from '@/components/ui/SigupForNew'
import { siteConfig } from '@/config/site'
import Img_one from '@/public/Official-Store-Mobile-Banner-2023_bf3738a4-08a7-4680-b3a7-1fc83cc59f82.webp';
import Img_two from '@/public/B1-1200x1200.webp';
import Img_three from '@/public/B2-1200x1200.webp';
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const palyfair = Playfair({ subsets: ['latin'] });


export default function Home() {
  const [images, setImages] = useState([Img_one, Img_two, Img_three]);
  const router = useRouter();
  return (
    <div className=' lg:container px-[10px] pt-[10px] mx-auto'>
      <SiteBanner  title={siteConfig.pageName} />
      <div className='lg:hidden'>
        <Slider  isDesk={false} img={images}/>
      </div>
      <div className='hidden lg:block'>
           <Slider isDesk={true} img={images}/>
      </div>
      <SiteKinds />
      <h3 className={cn(' uppercase text-center mt-[20px] text-xl', palyfair.className)}>Adidas</h3>
      <div className=' grid grid-cols-2 sm:grid-cols-3   md:grid-cols-3 lg:grid-cols-4 items-center justify-center mt-[20px] gap-3'>
        <BannerProductCard image='' price={11} mainTitle='' subTitle=''  discount={22}/>
        <BannerProductCard image='' price={11} mainTitle='' subTitle=''  discount={22}/>
        <BannerProductCard image='' price={11} mainTitle='' subTitle=''  discount={22}/>
        <BannerProductCard image='' price={11} mainTitle='' subTitle=''  discount={22}/>
        <BannerProductCard image='' price={11} mainTitle='' subTitle=''  discount={22}/>
        <BannerProductCard image='' price={11} mainTitle='' subTitle=''  discount={22}/>
        <BannerProductCard image='' price={11} mainTitle='' subTitle=''  discount={22}/>
        <BannerProductCard image='' price={11} mainTitle='' subTitle=''  discount={22}/>
      </div>
    <div className='w-full  flex items-center justify-center my-[15px] mb-[40px]'>
            <button onClick={()=>router.push('/products')} className=' bg-black text-white w-[100px] h-[40px] text-xs uppercase font-extralight mx-auto'>View All</button>
   </div>
   </div>
  )
}
