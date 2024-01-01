'use client'
import React, { useEffect, useState } from 'react'
import { Icons } from '../icons'
import { cn } from '@/utils/cn';

export const UpTop = () => {
const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional smooth scrolling behavior
    });
  };
    if (isScrolled) return <button onClick={scrollToTop} className={cn(isScrolled ? "translate-y-0 opacity-1":'translate-y-[-100px] opacity-0','h-[40px] transition-all duration-500 w-[40px] rounded-md  fixed bottom-7 right-4 flex items-center justify-center bg-black')}>
        <Icons.up className='w-4 h-4' color="white" />
    </button>;

    return <></>
}
