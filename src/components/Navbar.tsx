'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 64)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "About Civicad", "Services", "Projects"]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled ? "bg-[#0a0a0a] shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between min-h-[10vh] px-4 md:px-12">
        <div className="flex items-center">
          <Image src="/Civicad.png" alt="Civicad Logo" width={60} height={60} />
          <h1 className="text-2xl md:text-3xl font-bold text-white ml-2 md:ml-4">
            CIVICAD.
          </h1>
        </div>
        <nav className="hidden md:block space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-white hover:text-lg transition-all duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-white text-black px-3 py-1 md:px-4 md:py-2 mr-4 rounded-lg hover:text-lg transition-all duration-200"
          >
            Contact Us
          </Link>
          <Link
            href="/about"
            className="bg-white text-black px-3 py-1 md:px-4 md:py-2 rounded-lg hover:text-lg transition-all duration-200"
          >
            About Us
          </Link>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-white hover:text-lg transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="mailto:civicadconsultancy@gmail.com"
              className="bg-white text-black px-3 py-1 rounded-lg hover:text-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="bg-white text-black px-3 py-1 rounded-lg hover:text-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}