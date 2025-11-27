import React from 'react'
import LayoutProps from '@/shared/types/layout-props';
import Image from 'next/image';

export default function layout({ children }: LayoutProps) {
  return (
    <div className='bg-primary flex h-screen items-center justify-center gap-2'>
      <Image className='absolute -bottom-33' src={"/animals/pets.png"} alt='dog and cat' width={1000} height={550}></Image>
      <div className=''>
        <Image src="/logo/pethope-logo-large.png" alt='logo' width={500} height={500}></Image>
      </div>
      <span className='bg-black/30 w-px h-1/2 block '></span>
      <div>
        {children}
      </div>
    </div>
  )
}
