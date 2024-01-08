'use client'
import { siteConfig } from '@/config/site'
import React, { FC, useState } from 'react'
import { Playfair } from 'next/font/google'
import { cn } from '@/utils/cn'
import Image, { StaticImageData } from 'next/image';
import Shoe from '@/public/F35543-1_420x.webp';
import Link from 'next/link';
import { Icons } from '../icons';
import { useRouter } from 'next/navigation'



const palyfair = Playfair({ subsets: ['latin'] });


interface BannerProductCardProps {
    mainTitle: string,
    image: string,
    price: number,
    discount: number,
    subTitle:string
}




export const SiteBanner = ({ title = siteConfig.pageName }: { title: string }) => {
    return (
        <div className={cn('bg-[#dddddd55] flex items-center justify-center lg:text-2xl text-lg border h-[50px] lg:h-[70px]', palyfair.className)}>{title}</div>
    )
};

export const SiteBannerProductDetail = () => {
    return (
        <div className={cn('bg-[#dddddd55] text-[#555555] flex items-center justify-center lg:text-sm  text-[10px] border h-[40px]')}>
            <div className='gap-1 container mx-auto md:px-0 flex items-center px-[15px] justify-start'>
                <Link href={'#'}>Home</Link>
                <Icons.bannerRight className="w-3 h-3" />
                <Link href={'#'}>Adidas</Link>
                <Icons.bannerRight className="w-3 h-3" />
                <Link href={'#'}> adidas-ADILETTE AQUA-SLIDES-UNISEX</Link>
            </div>
        </div>
    )
};

export const BannerProductCard: FC<BannerProductCardProps> = ({ mainTitle, image, price, discount, subTitle }) => {
    const route = useRouter();
    
    return <div onClick={()=>route.push('/products/1')} className='text-xs cursor-pointer   max-w-[300px] flex-col gap-2 flex text-center'>
        <h3>ADIDAS MEN Run Tee T-Shirt</h3>
        <Image src={Shoe} alt='product' />
        <div className='flex justify-center gap-2'>
            <p className=' line-through'>K89,100</p>
            <p className=' text-red-500'>K89,100</p>
        </div>
    </div>
};

