'use client'

import { Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <div className="px-4 py-12 bg-white">
      <footer className="bg-blue-800 text-white rounded-2xl max-w-6xl mx-auto px-6 py-6 shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Company Info */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">Strojírny Svoboda, s.r.o</p>
            <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Center: Social Icons */}
          <div className="flex gap-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-300 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-300 transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Right: Credits */}
          <div className="text-sm text-center md:text-right opacity-80">
            Website made by <span className="font-medium">TheGrandPoints</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
