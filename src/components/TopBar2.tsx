"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="topbar bg-black flex items-center justify-between px-4 py-4 shadow-lg border-b border-[#f3f3f3] relative">
      {/* Hamburger Menu for Mobile */}
      <div className="flex md:hidden">
        <button
          className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </div>

      {/* Centered Logo Container */}
      <div className="flex-1 md:flex-none flex justify-center items-center">
        <Link href="#">
        <Image
          src="/images/LOGODARK.png" // Static logo path for simplicity
          alt="Logo"
          width={240}
          height={40}
          className="glitch-effect"
        /></Link>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex w-1/3 justify-end items-center space-x-4 lg:space-x-6">
        <Link href="/#home" className="hover:text-blue-500 transition">
          Home
        </Link>
        
          <Link href="/#about" className="hover:text-blue-500 transition">
            About
          </Link>
        
          <Link href="/#memes" className="hover:text-blue-500 transition">
          Memes
        </Link>
        <Link href="/#tokenomics" className="hover:text-blue-500 transition">
          Tokenomics
        </Link>
        <Link href="/#roadmap" className="hover:text-blue-500 transition">
          Roadmap
        </Link>
  
       
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="block absolute top-16 left-0 w-full bg-gray-900 text-white p-4 shadow-lg rounded-lg z-50">
          <Link href="/#home" className="block px-4 py-2 hover:bg-black rounded">
            Home
          </Link>
         
            <Link href="/#about" className="block px-4 py-2 hover:bg-black rounded">
              About
            </Link>
            
          <Link href="/#tokenomics" className="block px-4 py-2 hover:bg-black rounded">
            Tokenomics
          </Link>
          <Link href="/#roadmap" className="block px-4 py-2 hover:bg-black rounded">
            Roadmap
          </Link>
         
          
        </div>
      )}

      {/* Hamburger Button Styling */}
      <style jsx>{`
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        .line {
          width: 100%;
          height: 2px;
          background-color: #ffffff;
          transition: all 0.3s ease;
        }
        .hamburger.open .line:nth-child(1) {
          transform: rotate(45deg) translateY(6px);
        }
        .hamburger.open .line:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open .line:nth-child(3) {
          transform: rotate(-45deg) translateY(-6px);
        }
      `}</style>
    </div>
  );
}
