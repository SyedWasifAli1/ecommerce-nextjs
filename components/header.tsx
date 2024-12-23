'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaUser, FaRegHeart } from 'react-icons/fa';
import { IoCartOutline, IoSearch } from 'react-icons/io5';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Background color logic
  const bgColor = pathname === '/' ? 'bg-[#FBEBB5]' : 'bg-white';

  // Font size variable for consistency
  const fontSize = 'text-base font-medium lg:text-lg lg:font-semibold';

  return (
    <header className={`${bgColor} w-full max-w-[1440px] h-[100px] z-50 mx-auto`}>
      <div className="px-4 lg:px-12 flex justify-between items-center h-full">
        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-auto justify-center space-x-8 lg:space-x-16">
          <Link href="/" className={`${fontSize} hover:text-yellow-600`}>
            Home
          </Link>
          <Link href="/shop" className={`${fontSize} hover:text-yellow-600`}>
            Shop
          </Link>
          <Link href="/about" className={`${fontSize} hover:text-yellow-600`}>
            About
          </Link>
          <Link href="/contact" className={`${fontSize} hover:text-yellow-600`}>
            Contact
          </Link>
        </nav>

        {/* Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-12">
          <button aria-label="Profile" className={`text-gray-700 hover:text-yellow-600`}>
            <FaUser size={20} />
          </button>
          <button aria-label="Search" className={`text-gray-700 hover:text-yellow-600`}>
            <IoSearch size={22} />
          </button>
          <button aria-label="Favorites" className={`text-gray-700 hover:text-yellow-600`}>
            <FaRegHeart size={20} />
          </button>
          <button aria-label="Cart" className={`text-gray-700 hover:text-yellow-600`}>
            <IoCartOutline size={22} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Off-Canvas Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#FBEBB5] shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 z-40 md:hidden`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <FaTimes size={24} />
        </button>
        <nav className="mt-16 space-y-4 px-6">
          <Link
            href="/"
            className={`${fontSize} block hover:text-yellow-600`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`${fontSize} block hover:text-yellow-600`}
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/about"
            className={`${fontSize} block hover:text-yellow-600`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${fontSize} block hover:text-yellow-600`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center justify-evenly mt-8 px-6">
          <button aria-label="Profile" className={`text-gray-700 hover:text-yellow-600`}>
            <FaUser size={20} />
          </button>
          <button aria-label="Search" className={`text-gray-700 hover:text-yellow-600`}>
            <IoSearch size={20} />
          </button>
          <button aria-label="Favorites" className={`text-gray-700 hover:text-yellow-600`}>
            <FaRegHeart size={20} />
          </button>
          <button aria-label="Cart" className={`text-gray-700 hover:text-yellow-600`}>
            <IoCartOutline size={20} />
          </button>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
