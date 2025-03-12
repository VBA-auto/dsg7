"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BuyButton from "../Buttons/BuyButton";
import useScrollHeader from "./useScrollHeader";
import SearchOverlay from "./SearchOverlay";

export default function Header() {
  const isScrolled = useScrollHeader(); // Using the custom hook
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header
      className={`w-full shadow-md sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto py-1 flex items-center justify-between">
        {/* Logo on the Left */}
        <div className="flex items-center">
          <Link href="/" className="">
            <h1 className="text-[50px] text-red-500 font-extrabold">DSG7.FR</h1>
          </Link>
        </div>

        {/* Center Navigation Links */}
        <nav className="flex space-x-12 items-center md:absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="relative group">
            <span
              className={`text-lg font-[500] uppercase tracking-wider transition ${
                isScrolled ? "text-red-500" : "text-red-500"
              }`}
            >
              Accueil
            </span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/produits" className="relative group">
            <span
              className={`text-lg font-[500] uppercase tracking-wider transition ${
                isScrolled ? "text-red-500" : "text-red-500"
              }`}
            >
              Produits
            </span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/about-us" className="relative group">
            <span
              className={`text-lg font-[500] uppercase tracking-wider transition ${
                isScrolled ? "text-red-500" : "text-red-500"
              }`}
            >
              About Us
            </span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/contact" className="relative group">
            <span
              className={`text-lg font-[500] uppercase tracking-wider transition ${
                isScrolled ? "text-red-500" : "text-red-500"
              }`}
            >
              Contact
            </span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/faq" className="relative group">
            <span
              className={`text-lg font-[500] uppercase tracking-wider transition ${
                isScrolled ? "text-red-500" : "text-red-500"
              }`}
            >
              FAQ
            </span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* Right Icons and Button */}
        <div className="flex items-center space-x-5">
          {/* Search Icon */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={`p-2 hover:bg-gray-100 hover:text-red-500 cursor-pointer rounded-full ${
              isScrolled ? "text-red-500" : "text-red-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>

          {/* Call to Action Button */}
          <BuyButton text="Aide en ligne" />
        </div>

        {/* Mobile Menu (Visible on Small Screens) */}
        <div className="md:hidden">
          <button
            className={`hover:text-[#6B8375] focus:outline-none ${
              isScrolled ? "text-gray-600" : "text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </header>
  );
}
