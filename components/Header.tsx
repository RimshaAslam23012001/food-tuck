'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { PiHandbagBold } from "react-icons/pi";
import { RiMenu3Fill } from "react-icons/ri";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function Header() {
  // State to track the cart item count
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // On component mount, check if cart data is stored in localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const cartItems = JSON.parse(savedCart);
      // Calculate the total number of items in the cart
      const itemCount = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
      setCartCount(itemCount); // Update the state with the total item count
    }
  }, []);

  return (
    <div className="w-full bg-[#0D0D0DF2]">
      <header>
        {/* Logo Centered */}
        <div className="w-full text-center py-4 text-white">
          <p className="text-3xl">
            <span className="text-orange-500">Food</span>tuck
          </p>
        </div>

        {/* Navbar */}
        <nav className="w-full max-w-[1320px] mx-auto px-4 md:flex items-center justify-between text-white">
          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex flex-wrap gap-6 justify-center md:justify-start text-lg md:text-xl">
            <li>
              <Link href={"./"} className="flex items-center space-x-2 hover:text-orange-500 transition">Home</Link>
            </li>
            <li>
              <Link href={"/M-menu"} className="flex items-center space-x-2 hover:text-orange-500 transition">Menu</Link>
            </li>
            <li>
              <Link href={"/Blog"} className="flex items-center space-x-2 hover:text-orange-500 transition">Blog</Link>
            </li>
            <li>
              <Link href={"/Pages"} className="flex items-center space-x-2 hover:text-orange-500 transition">Pages</Link>
            </li>
            <li className="flex items-center">
              <Link href={"/About"} className="flex items-center space-x-2 hover:text-orange-500 transition">About</Link>
            </li>
            <li>
              <Link href={"/Shop"} className="flex items-center space-x-2 hover:text-orange-500 transition">Shop</Link>
            </li>
            <li>
              <Link href={"/Contact"} className="flex items-center space-x-2 hover:text-orange-500 transition">Contact</Link>
            </li>
          </ul>

          {/* Search Bar and Cart Icon */}
          <div className="hidden sm:flex items-center gap-6 mt-4 md:mt-0 flex-none">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="h-[40px] pl-4 pr-10 rounded-[20px] border border-orange-500 bg-transparent placeholder-white w-[200px] sm:w-[300px] text-lg"
              />
              <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white hover:text-orange-500" />
            </div>
            {/* Cart Icon with Count */}
            <Link href={"/Cart"} className="relative">
              <PiHandbagBold className="w-7 h-7 mt-4" />
              {/* Cart Count or Dot */}
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden absolute top-0 right-0 p-4">
          <Sheet>
            <SheetTrigger className="text-white">
              <RiMenu3Fill />
            </SheetTrigger>
            <SheetContent className="w-[250px] sm:w-[300px]">
              <nav className="space-y-8 text-lg">
                <Link href="./" className="flex items-center space-x-2 hover:text-orange-500 transition">
                  <span>Home</span>
                </Link>
                <Link href="/M-menu" className="flex items-center space-x-2 hover:text-orange-500 transition">
                  <span>Menu</span>
                </Link>
                <Link href="/Blog" className="flex items-center space-x-2 hover:text-orange-500 transition">
                  <span>Blog</span>
                </Link>
                <Link href="/Pages" className="flex items-center space-x-2 hover:text-orange-500 transition">
                  <span>Pages</span>
                </Link>
                <Link href="#" className="flex items-center space-x-2 hover:text-orange-500 transition">
                  <span>About</span>
                </Link>
                <Link href="/Shop" className="flex items-center space-x-2 hover:text-orange-500 transition">
                  <span>Shop</span>
                </Link>
                <Link href="/Contact" className="flex items-center space-x-2 hover:text-orange-500 transition">
                  <span>Contact</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}

export default Header;
