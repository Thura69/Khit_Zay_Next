import Image1 from '@/public/B1-1200x1200.webp';
import Image2 from '@/public/B2-1200x1200.webp';
import Image3 from '@/public/Official-Store-Mobile-Banner-2023_bf3738a4-08a7-4680-b3a7-1fc83cc59f82.webp';

import Image1_md from '@/public/B1-1900x750_1728x.webp';
import Image2_md from '@/public/B2-1900x1750_1728x.webp';
import Image3_md from '@/public/Official-Store-Web-Banner-2023Desktop_d571473e-25ed-4f6f-8ca2-fe6aa261d8c2_1728x.webp';

import { StaticImageData } from 'next/image';

interface siteConfig {
    phone: string,
    pageName: string,
    links: {
        facebook: string,
        instagram:string
    }
}; 

interface LinkProps{
    name: string,
    link:string
}

interface FooterLinkProps {
    quickLink: LinkProps[],
    help: LinkProps[],
    myAccount:LinkProps[]
    
}



export interface SliderimagesProps{
    adidas: StaticImageData[],
    adidas_md:StaticImageData[]
};

export const siteConfig:siteConfig = {
    phone: '09942176731',
    pageName: "ADIDAS OFFICIAL STORE",
    links: {
        facebook: '',
        instagram:''
    }

};

export const SliderImages: SliderimagesProps = {
    adidas: [Image1, Image2, Image3],
    adidas_md: [Image1_md, Image2_md, Image3_md]
};

export const FooterLinks:FooterLinkProps = {
   quickLink: [{
        name: "About us",
        link:'#'
    },
    {
        name:"Privacy Policy",
        link:'#'
    },
    {
        name:"How To Buy Guide?",
        link:"#"
    }],
    help: [
        {
            name: "Payment",
            link:'#'
        },
        {
            name: 'Returns & Exchange',
            link:'#'
        },
        {
            name: 'Delivery',
            link:'#'
        },
        {
            name: "FAQ",
            link:'#'
        },
        {
            name: 'Delivery',
            link:'#'
        },
        {
            name: 'FAQ',
            link:'#'
        }
    ],
    myAccount: [{
        name: 'My Personal Information',
        link:'#'
    }]
}