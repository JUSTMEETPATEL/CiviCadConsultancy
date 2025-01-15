"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Menu, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      {/* Desktop & Mobile Main Nav */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/Civicad.png" alt="Civicad Logo" width={60} height={60} />
          <h1 className="text-2xl md:text-3xl font-bold text-[#4B5563] ml-2 md:ml-4">
            CIVICAD.
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-600">
            About Us
          </Link>
          <Link href="/services" className="text-gray-800 hover:text-gray-600">
            Our Services
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600">
            Contact
          </Link>
          <Link
            href="/get-started"
            className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 pt-16">
          <div className="container mx-auto px-4">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-800 hover:text-gray-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-gray-600">
                About Us
              </Link>
              <Link
                href="/services"
                className="text-gray-800 hover:text-gray-600"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-gray-600"
              >
                Contact
              </Link>
              <Link
                href="/get-started"
                className="mt-4 w-full bg-black text-white py-2 px-4 rounded text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#7E998D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Civicad</h3>
            <p className="text-sm opacity-80">Turning Ideas Into Reality</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-sm hover:opacity-80">
                Home
              </Link>
              <Link href="/services" className="text-sm hover:opacity-80">
                Our Services
              </Link>
              <Link href="/contact" className="text-sm hover:opacity-80">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Contact</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:civicadconsultancy@gmail.com"
                className="text-sm hover:opacity-80"
              >
                Email: civicadconsultancy@gmail.com
              </a>
              <p className="text-sm">Phone: +91 80175 50650</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/civicadconsultancy/" target="_blank" className="hover:opacity-80">
                <Instagram size={20} />
              </Link>
              <Link href="https://www.linkedin.com/company/civicad/" target="_blank" className="hover:opacity-80">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Background Design Element */}
        <div className="absolute right-0 bottom-0 opacity-20">
          {/* You can add the curved design element as an SVG or image here */}
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Footer };
