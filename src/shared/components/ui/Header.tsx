import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className='bg-[#f3f2ee] rounded-b-3xl fixed top-0 left-0 right-0 z-50 shadow-2xl'>
            <div className='flex justify-between items-center mx-10'>
                <Image src="/logo/pethope-logo.png" alt="Logo" width={100} height={100} className='my-2' />
                <nav className='text-black'>
                    <ul className='flex gap-5'>
                        <li>
                            <Link href="#home" className='relative inline-block px-2 py-1 group hover:text-[#9bc0b1] transition-colors duration-300'>
                                Home
                                <span className="absolute left-0 bottom-0 h-[1px] w-full bg-[#9bc0b1] transform scale-x-0 transition-transform duration-300 ease-out origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#about" className='relative inline-block px-2 py-1 group hover:text-[#9bc0b1] transition-colors duration-300'>
                                About
                                <span className="absolute left-0 bottom-0 h-[1px] w-full bg-[#9bc0b1] transform scale-x-0 transition-transform duration-300 ease-out origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className='relative inline-block px-2 py-1 group hover:text-[#9bc0b1] transition-colors duration-300'>
                                Contact
                                <span className="absolute left-0 bottom-0 h-[1px] w-full bg-[#9bc0b1] transform scale-x-0 transition-transform duration-300 ease-out origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
