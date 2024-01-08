import { SiteBanner, SiteBannerProductDetail } from "@/components/ui/Site-banner"
import { ReactNode } from "react"

function Layout({children}:{children:ReactNode}) {
  return (
    <>
     <SiteBanner title="FEEDBACK" />

    <div className='flex w-full p-[15px] flex-col flex-grow  '>
      
      {children}
    
    </div>
    </>
  )
}

export default Layout