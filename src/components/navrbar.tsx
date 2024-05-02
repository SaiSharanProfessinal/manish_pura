"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: '#ed1450' }} className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <div className="text-2xl font-semibold flex items-center hover:text-gray-300">
            <img src="/PuraLogo.webp" alt="Logo" className="h-[75px] mr-2" />
          </div>
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row md:space-x-4 text-lg`}>
          <Link href="/products" passHref>
            <div className="hover:text-gray-300 mt-4 md:mt-0">Products</div>
          </Link>
          <Link href="/contactUs" passHref>
            <div className="hover:text-gray-300 mt-4 md:mt-0">Contact Us</div>
          </Link>
          <Link href="https://havepura.com/" passHref>
            <div className="hover:text-gray-300 mt-4 md:mt-0">About Us</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

