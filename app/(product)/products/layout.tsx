import { SiteBanner } from '@/components/ui/Site-banner'
import React, { ReactNode } from 'react'


function Layout({children}:{children:ReactNode}) {
  return (
    <div>
      <SiteBanner title='Adidas'/>
      {children}</div>
  )
}

export default Layout