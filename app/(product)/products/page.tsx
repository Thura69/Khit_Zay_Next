import { BannerProductCard } from '@/components/ui/Site-banner'
import FilterList from '@/components/ui/product/FilterList'
import { FilterSide } from '@/components/ui/product/FilterSide'
import { ProductCard } from '@/components/ui/product/ProductCard'
import { RelatedProducts } from '@/components/ui/product/RelatedProducts'
import { SearchProduct } from '@/components/ui/product/Search'
import { SearchCard } from '@/components/ui/search/SearchCard'
import React from 'react'

function Page() {
  return (
    <div className='container my-[30px] flex gap-[10px] w-full mx-auto'>
          <FilterSide />
          <div className=' w-[100%] lg:w-[80%] container mx-auto px-3'>
              <SearchProduct />
              <div className=' grid gap-[5px] grid-cols-2 md:grid-cols-3 md:gap-[10px] lg:grid-cols-4'>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
              </div>
          </div>
    </div>
  )
}

export default Page