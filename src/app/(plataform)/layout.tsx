import Footer from '@/shared/components/ui/Footer';
import Header from '@/shared/components/ui/Header';
import React from 'react'
import LayoutProps from '@/shared/types/layout-props';


export default function layout({ children }: LayoutProps) {
  return (
    <div className='bg-white'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}
