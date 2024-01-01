import { Icons } from '@/components/icons'
import { SiteBannerProductDetail } from '@/components/ui/Site-banner'
import { ProductSlide } from '@/components/ui/product/ProductSlide'
import { RelatedProducts } from '@/components/ui/product/RelatedProducts'
import React from 'react'

function Page() {
  return (
    <div>
    <div className='md:container w-full mt-2 flex-col flex  md:flex gap-[40px] items-start mx-auto'>
        <div className='w-[100%] md:w-[50%]'>
          <ProductSlide />
        </div>
        <div className=' text-[#555555] flex flex-col items-start gap-4 text-xs md:w-[50%]'>
          <h3 className='text-sm text-[#555555]'>adidas-ADILETTE AQUA-SLIDES-UNISEX</h3>
          <div className='flex text-[#555555]  gap-5'>
            <p className='text-[#449700] '>In Stock</p>
            <p className='text-[#555555] '>SKU: F35550-4060509397830</p>
          </div>
          <p className='flex gap-3 p-0 items-end'>
            <span className='  line-through'>K79200</span>
            <span className=' translate-y-[5px] text-[#e95144]  text-xl'>K79,200</span>
            |
            <span className=''>You Save <span className='text-[#e95144]'>K7,920 (10%off)</span></span>
          </p>
          <p className='text-[13px]'>ADILETTE AQUA SLIDESPOST-SWIM SLIDES WITH ENHANCED CUSHIONING.Rinse off after the pool in these shower-friendly sandals. Keeping it simple, the smooth slip-ons reveal their adidas DNA with signature 3-Stripes. Soft cushioning rewards tired feet with plush comfort.</p>
          <div className='border text-[#31a3a3] border-[#31a3a3] w-full border-dashed text-center p-3'>
            <p className='text-[16px]'>Hurry! Only <span className=' font-bold'>10</span> left in stock.</p>
          </div>
          <div className='bg-[#FFF3CD] p-3 text-[13px] leading-6'>
            <p>
              Promotion မှာပါဝင်ပြီး ဝယ်ယူတဲ့ ပစ္စည်းများသည် ပို့ဆောင်သည့်အခါမှားယွင်းခြင်း၊ အနာအဆာပါခြင်းများမှ အပ Customer ၏ စိတ်ပြောင်းလဲမှုကြောင့်ဖြစ်စေ၊ အခြား မည်သည့် အကြောင်းကြောင့်မှ Design ပြန်လဲပေးခြင်း၊ Size ပြန်လဲပေးခြင်းများပြန်လည်ပြုလုပ်ပေးသွားမှာမဟုတ်တာကြောင့် Adidas ချစ်သူများအနေနဲ့ မိမိစိတ်ကြိုက် ပစ္စည်းတွေကို သေချာလေးရွေးချယ်ပြီး မှာဝယ်ယူအားပေးကြဖို့အတွက် မေတ္တာရပ်ခံလိုက်ပါတယ်။
            </p>
          </div>
          <div>
            <p>UK SIZE: <span className='font-bold'> 4</span></p>
            <div className='flex gap-1 mt-2'>
              <div className='border h-[30px] bg-gray-100 w-[40px] flex items-center justify-center'><p>1</p></div>
              <div className='border h-[30px] bg-gray-100 w-[40px] flex items-center justify-center'><p>6</p></div>
              <div className='border h-[30px] bg-gray-100 w-[40px] flex items-center justify-center'><p>8</p></div>
              <div className='border h-[30px] bg-gray-100 w-[40px] flex items-center justify-center'><p>3</p></div>
            </div>
          </div>
          <div className='w-full gap-2 md:flex-row flex-col flex'>
            <div className=' flex w-[30%]'>
                <button className='border  h-[40px] bg-gray-100 w-[40px] flex items-center justify-center'><Icons.minus className='w-4 h-4'/></button>
                <button className='border h-[40px] bg-white w-[45px] flex items-center justify-center'>1</button>
              
                <button className='border h-[40px] bg-gray-100 w-[50px] flex items-center justify-center'><Icons.plus className='w-4 h-4'/></button>
            </div>
            <button className='bg-black w-full h-[40px] flex items-center justify-center text-md text-center md:w-[80%]  text-white'>
              <p>ADD TO CART</p>
            </button>
          </div>
          <div className='border text-[#FFFF] mt-2 text-sm bg-[#e95144] w-full text-center p-3'>
            <p>ORDER NOW WITH CUSTOMER SERVICES</p>
          </div>
        </div>
      </div>
      <RelatedProducts/>
   </div>
  )
}

export default Page