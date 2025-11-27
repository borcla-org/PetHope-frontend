import Footer from '@/shared/components/ui/Footer';
import Header from '@/shared/components/ui/Header';
import React from 'react'

interface LayoutProps {
    children: React.ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}
