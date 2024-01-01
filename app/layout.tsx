import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteBanner } from '@/components/ui/Site-banner'
import { Header } from '@/components/ui/Header'
import { Slider } from '@/components/ui/Slider'
import { SiteKinds } from '@/components/ui/Site-kinds'
import { SigupForNew } from '@/components/ui/SigupForNew'
import { Footer } from '@/components/Site-footer'
import Link from 'next/link'
import FeedBack from '@/public/V2_customer-feedback.png';
import Image from 'next/image'
import { Icons } from '@/components/icons'
import { UpTop } from '@/components/ui/UpTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      
      <body className={inter.className}>
      <Header />
        {children}
      <SigupForNew/>
      <Footer/>
        <Link href="#" className=' fixed bottom-1 left-1'>
          <Image className='w-[100px] h-[40px]' src={FeedBack} alt='feed-back' />
        </Link>
        <UpTop/>
      </body>

    </html>
  )
}
