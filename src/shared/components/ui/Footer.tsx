import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 rounded-t-3xl z-40" id='contact'>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* Assuming a white logo variant exists or using the same one if it works on dark */}
              <div className="bg-white p-1 rounded-lg w-fit">
                <Image src="/logo/pethope-logo.png" alt="PetHope Logo" width={80} height={80} className="object-contain" />
              </div>
              <span className="text-xl font-bold tracking-wider">PetHope</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting pets with loving homes and professional care. Your trusted partner in pet welfare.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#9bc0b1]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#9bc0b1] transition-colors duration-300 flex items-center gap-2">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#9bc0b1] transition-colors duration-300 flex items-center gap-2">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#9bc0b1] transition-colors duration-300 flex items-center gap-2">
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#9bc0b1] transition-colors duration-300 flex items-center gap-2">
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#9bc0b1]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#9bc0b1] mt-1 shrink-0" />
                <span>123 Pet Street, Animal City, AC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#9bc0b1] shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#9bc0b1] shrink-0" />
                <span>contact@pethope.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#9bc0b1]">Follow Us</h3>
            <p className="text-gray-400 text-sm mb-6">
              Stay updated with our latest news and pet care tips.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#9bc0b1] hover:text-white transition-all duration-300 text-gray-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#9bc0b1] hover:text-white transition-all duration-300 text-gray-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#9bc0b1] hover:text-white transition-all duration-300 text-gray-400">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PetHope. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-[#9bc0b1] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#9bc0b1] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
