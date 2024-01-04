import { BannerProductCard, SiteBanner } from '@/components/ui/Site-banner'
import { SiteKinds } from '@/components/ui/Site-kinds'
import { Slider } from '@/components/ui/Slider'
import { Playfair } from 'next/font/google'
import { cn } from '@/utils/cn'
import { SigupForNew } from '@/components/ui/SigupForNew'
import { siteConfig } from '@/config/site'

const palyfair = Playfair({ subsets: ['latin'] });


export default function Home() {
  return (
    <div className=' lg:container px-[10px] pt-[10px] mx-auto'>
      <SiteBanner title={siteConfig.pageName} />
      {/* <Slider/> */}
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
            <button className=' bg-black text-white w-[100px] h-[40px] text-xs uppercase font-extralight mx-auto'>View All</button>
   </div>
   </div>
  )
}
