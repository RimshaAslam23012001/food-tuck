'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CiSearch, CiUser } from "react-icons/ci";
import { PiHandbagBold } from "react-icons/pi";
import { RiMenu3Fill } from "react-icons/ri";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function HeaderTwo() {
  // State to track the cart item count
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

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
    <div className="w-full bg-black pt-6">
      <header>
        {/* Navbar */}
        <nav className="w-full max-w-[1320px] mx-auto px-4 flex flex-wrap justify-between items-center text-white">
          {/* Logo */}
          <div className="py-4 text-white">
            <p className="text-2xl">
              Food <span className="text-orange-500">tuck</span>
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex flex-row gap-4 text-sm md:text-base">
            <li className="text-primary">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/M-menu">Menu</Link>
            </li>
            <li>
              <Link href="/Blog">Blog</Link>
            </li>
            <li>
              <Link href="/Pages">Pages</Link>
            </li>
            <li>
              <Link href="/About">About</Link>
            </li>
            <li>
              <Link href="/Shop">Shop</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>

          {/* Search Bar and Icons */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="h-[40px] pl-4 pr-10 rounded-[20px] border border-orange-500 bg-transparent placeholder-white w-[200px] sm:w-[300px] text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white hover:text-orange-500" />
            </div>

            {/* User Icon */}
            <Link href="/Signout">
              <CiUser className="w-6 h-6" />
            </Link>

            {/* Cart Icon with Count */}
            <Link href={"/Cart"} className="relative">
              <PiHandbagBold className="w-6 h-6" />
              {/* Cart Count or Dot */}
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation Links */}
        <div className="md:hidden absolute top-0 right-0 p-4">
          <Sheet>
            <SheetTrigger className="text-white">
              <RiMenu3Fill />{" "}
            </SheetTrigger>
            <SheetContent className="w-[200px] sm:w-[300px]">
              <nav className=" space-y-8">
                <Link
                  href="./"
                  className="flex items-center space-x-2 hover:text-orange-500 transition"
                >
                  <span className="text-orange-500">Home</span>
                </Link>
                <Link
                  href="/Menu"
                  className="flex items-center space-x-2 hover:text-orange-500 transition"
                >
                  <span>Menu</span>
                </Link>
                <Link
                  href="/BlogPage"
                  className="flex items-center space-x-2 hover:text-orange-500 transition"
                >
                  <span>Blog</span>
                </Link>
                <Link
                  href="/Pages"
                  className="flex items-center space-x-2 hover:text-gray-400 transition"
                >
                  <span>Pages</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-2 hover:text-gray-400 transition"
                >
                  <span>About</span>
                </Link>
                <Link
                  href="/Shop"
                  className="flex items-center space-x-2 hover:text-gray-400 transition"
                >
                  <span>Shop</span>
                </Link>
                <Link
                  href="/ContactPage"
                  className="flex items-center space-x-2 hover:text-orange-500 transition"
                >
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

export default HeaderTwo;
