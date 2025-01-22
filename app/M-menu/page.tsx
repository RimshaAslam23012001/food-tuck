import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import HeaderTwo from "@/components/Header-to";
import RestaurantDetail from "@/components/Resturant";

const Menu = () => {
  return (
    <div>
      <HeaderTwo />
        {/* Hero Image */}
        <div className="relative">
        <Image
          src={"/images/heropic.png"}
          alt="pic"
          height={410}
          width={1920}
          className="w-full h-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-[90%] max-w-[300px] sm:max-w-[400px]">
          {/* Title */}
          <h1 className="text-white font-bold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px]">
            Our Menu
          </h1>

          {/* Breadcrumb Navigation */}
          <ul className="flex gap-2 justify-center text-xs sm:text-sm md:text-base mt-2 text-white">
            <li>
              <Link href={"./"}>Home</Link>
            </li>
            <li className="flex items-center">
              <FaAngleRight />
            </li>
            <li>
              <Link href={"/menu"} className="text-orange-500">
               Menu
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/*     Starter  Menu Section */}
      <div className="w-full max-w-[1320px] h-auto mt-20 flex flex-col md:flex-row gap-8 mx-auto">
        {/* Left side */}
        <div className="w-full md:w-[448px]">
          <Image src="/images/menu1.png"alt="pic" height={626} width={448} />
        </div>

        {/* Right Side main div */}
        <div className="w-full md:w-[760px] h-auto">
          <FiCoffee className="text-orange-500" />
          <h2 className="font-bold text-[32px] md:text-[48px]">Starter Menu</h2>

          {/* 1st Box */}
          <div className="flex flex-col md:flex-row justify-between border-b border-dashed py-4">
            <div className="w-full md:w-[600px]">
              <h3 className="font-bold text-[20px] md:text-[24px] text-[#333333]">
                Alder Grilled Chinook Salmon
              </h3>
              <p className="text-[#4F4F4F]">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-[#828282]">560 CAL</p>
            </div>
            <p className="text-orange-500 font-bold mt-2 md:mt-0">$32</p>
          </div>

          {/* 2nd Box */}
          <div className="flex flex-col md:flex-row justify-between border-b border-dashed py-4">
            <div className="w-full md:w-[600px]">
              <h3 className="font-bold text-[20px] md:text-[24px] text-orange-500">
                Berries and creme tart
              </h3>
              <p className="text-[#4F4F4F]">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-[#828282]">700 CAL</p>
            </div>
            <p className="text-orange-500 font-bold mt-2 md:mt-0">$43</p>
          </div>

          {/* 3rd Box */}
          <div className="flex flex-col md:flex-row justify-between border-b border-dashed py-4">
            <div className="w-full md:w-[600px]">
              <h3 className="font-bold text-[20px] md:text-[24px] text-[#333333]">
                Tormentoso Bush Pizza Pintoage
              </h3>
              <p className="text-[#4F4F4F]">
                Ground cumin, avocados, peeled and cubed
              </p>
              <p className="text-[#828282]">1000 CAL</p>
            </div>
            <p className="text-orange-500 font-bold mt-2 md:mt-0">$14</p>
          </div>

          {/* 4th Box */}
          <div className="flex flex-col md:flex-row justify-between border-b border-dashed py-4">
            <div className="w-full md:w-[600px]">
              <h3 className="font-bold text-[20px] md:text-[24px] text-[#333333]">
                Spicy Vegan Potato Curry
              </h3>
              <p className="text-[#4F4F4F]">
                Spreadable cream cheese, crumbled blue cheese
              </p>
              <p className="text-[#828282]">560 CAL</p>
            </div>
            <p className="text-orange-500 font-bold mt-2 md:mt-0">$35</p>
          </div>
        </div>
      </div>

      {/*    Main Course Section */}

      <div className="w-full max-w-[1320px] h-auto my-20 flex flex-col md:flex-row gap-8 mx-auto">
        {/* Left Side main div */}
        <div className="w-full md:w-[760px] h-auto">
          <FiCoffee className="text-orange-500" />
          <h2 className="font-bold text-[32px] md:text-[48px]">Main Course</h2>

          {/* 1st Box */}
          <div className="flex flex-col md:flex-row justify-between border-b border-dashed py-4">
            <div className="w-full md:w-[600px]">
              <h3 className="font-bold text-[20px] md:text-[24px] text-[#333333]">
                Optic Big Breakfast Combo Menu
              </h3>
              <p className="text-[#4F4F4F]">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-[#828282]">560 CAL</p>
            </div>
            <p className="text-orange-500 font-bold mt-2 md:mt-0">$32</p>
          </div>

          {/* 2nd Box */}
          <div className="flex flex-col md:flex-row justify-between border-b border-dashed py-4">
            <div className="w-full md:w-[600px]">
              <h3 className="font-bold text-[20px] md:text-[24px] text-[#333333]">
                Cashew Chicken With Stir-Fry
              </h3>
              <p className="text-[#4F4F4F]">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-[#828282]">700 CAL</p>
            </div>
            <p className="text-orange-500 font-bold mt-2 md:mt-0">$43</p>
          </div>

          {/* 3rd Box */}
          <div className="flex flex-col md:flex-row justify-between border-b border-dashed py-4">
            <div className="w-full md:w-[600px]">
              <h3 className="font-bold text-[20px] md:text-[24px] text-[#333333]">
                Vegetables & Green Salad
              </h3>
              <p className="text-[#4F4F4F]">
                Ground cumin, avocados, peeled and cubed
              </p>
              <p className="text-[#828282]">1000 CAL</p>
            </div>
            <p className="text-orange-500 font-bold mt-2 md:mt-0">$14</p>
          </div>

          {/* 4th Box */}
          <div className="flex flex-col md:flex-row justify-between border-b border-dashed py-4">
            <div className="w-full md:w-[600px]">
              <h3 className="font-bold text-[20px] md:text-[24px] text-[#333333]">
                Spicy Vegan Potato Curry
              </h3>
              <p className="text-[#4F4F4F]">
                Spreadable cream cheese, crumbled blue cheese
              </p>
              <p className="text-[#828282]">560 CAL</p>
            </div>
            <p className="text-orange-500 font-bold mt-2 md:mt-0">$35</p>
          </div>
        </div>

        {/* Right side (Image) */}
        <div className="w-full md:w-[448px]">
          <Image src="/images/menu2.png" alt="pic" height={626} width={448} />
        </div>
      </div>

      {/*  import Restaurant Section */}

      <RestaurantDetail />
      {/* Dessert */}

      <div className="w-full max-w-[1320px] h-auto mt-20 flex flex-col md:flex-row gap-8 mx-auto">
        {/* Left side */}
        <div className="w-full md:w-[448px]">
          <Image src="/images/menu3.png" alt="pic" height={626} width={448} />
        </div>

        {/* Right Side main div */}
        <div className="w-full md:w-[760px] h-auto">
          <FiCoffee className="text-orange-500" />
          <h2 className="font-bold text-[32px] md:text-[48px]">Dessert</h2>

          {/* 1st Box */}
          <div className="flex flex-col md:flex-row justify-between border-b border-dashed py-4">
            <div className="w-full md:w-[600px]">
              <h3 className="font-bold text-[20px] md:text-[24px] text-[#333333]">
                Fig and lemon cake
              </h3>
              <p className="text-[#4F4F4F]">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-[#828282]">560 CAL</p>
            </div>
            <p className="text-orange-500 font-bold mt-2 md:mt-0">$32</p>
          </div>

          {/* 2nd Box */}
          <div className="flex flex-col md:flex-row justify-between border-b border-dashed py-4">
            <div className="w-full md:w-[600px]">
              <h3 className="font-bold text-[20px] md:text-[24px] text-[#333333]">
                Creamy mascarpone cake
              </h3>
              <p className="text-[#4F4F4F]">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-[#828282]">700 CAL</p>
            </div>
            <p className="text-orange-500 font-bold mt-2 md:mt-0">$43</p>
          </div>

          {/* 3rd Box */}
          <div className="flex flex-col md:flex-row justify-between border-b border-dashed py-4">
            <div className="w-full md:w-[600px]">
              <h3 className="font-bold text-[20px] md:text-[24px] text-[#333333]">
                Pastry, blueberries, lemon juice
              </h3>
              <p className="text-[#4F4F4F]">
                Ground cumin, avocados, peeled and cubed
              </p>
              <p className="text-[#828282]">1000 CAL</p>
            </div>
            <p className="text-orange-500 font-bold mt-2 md:mt-0">$14</p>
          </div>

          {/* 4th Box */}
          <div className="flex flex-col md:flex-row justify-between border-b border-dashed py-4">
            <div className="w-full md:w-[600px]">
              <h3 className="font-bold text-[20px] md:text-[24px] text-[#333333]">
                Pain au chocolat
              </h3>
              <p className="text-[#4F4F4F]">
                Spreadable cream cheese, crumbled blue cheese
              </p>
              <p className="text-[#828282]">560 CAL</p>
            </div>
            <p className="text-orange-500 font-bold mt-2 md:mt-0">$35</p>
          </div>
        </div>
      </div>

      {/* Drinks */}

      <div className="w-full max-w-[1320px] h-auto mt-20 flex flex-col md:flex-row gap-8 mx-auto">
        {/* Left Side main div */}
        <div className="w-full md:w-[760px] h-auto">
          <FiCoffee className="text-orange-500" />
          <h2 className="font-bold text-[32px] md:text-[48px]">Drinks</h2>

          {/* 1st Box */}
          <div className="flex flex-col md:flex-row justify-between border-b border-dashed py-4">
            <div className="w-full md:w-[600px]">
              <h3 className="font-bold text-[20px] md:text-[24px] text-[#333333]">
                Caffè macchiato
              </h3>
              <p className="text-[#4F4F4F]">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-[#828282]">560 CAL</p>
            </div>
            <p className="text-orange-500 font-bold mt-2 md:mt-0">$32</p>
          </div>

          {/* 2nd Box */}
          <div className="flex flex-col md:flex-row justify-between border-b border-dashed py-4">
            <div className="w-full md:w-[600px]">
              <h3 className="font-bold text-[20px] md:text-[24px] text-[#333333]">
                Aperol Spritz Capacianno
              </h3>
              <p className="text-[#4F4F4F]">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-[#828282]">700 CAL</p>
            </div>
            <p className="text-orange-500 font-bold mt-2 md:mt-0">$43</p>
          </div>

          {/* 3rd Box */}
          <div className="flex flex-col md:flex-row justify-between border-b border-dashed py-4">
            <div className="w-full md:w-[600px]">
              <h3 className="font-bold text-[20px] md:text-[24px] text-[#333333]">
                Caffe Latte Campuri
              </h3>
              <p className="text-[#4F4F4F]">
                Ground cumin, avocados, peeled and cubed
              </p>
              <p className="text-[#828282]">1000 CAL</p>
            </div>
            <p className="text-orange-500 font-bold mt-2 md:mt-0">$14</p>
          </div>

          {/* 4th Box */}
          <div className="flex flex-col md:flex-row justify-between border-b border-dashed py-4">
            <div className="w-full md:w-[600px]">
              <h3 className="font-bold text-[20px] md:text-[24px] text-[#333333]">
                Tormentoso BushTea Pintoage
              </h3>
              <p className="text-[#4F4F4F]">
                Spreadable cream cheese, crumbled blue cheese
              </p>
              <p className="text-[#828282]">560 CAL</p>
            </div>
            <p className="text-orange-500 font-bold mt-2 md:mt-0">$35</p>
          </div>
        </div>

        {/* Right side (Image) */}
        <div className="w-full md:w-[448px]">
          <Image src="/images/menu4.png" alt="pic" height={626} width={448} />
        </div>
      </div>

      {/* Clients and partner */}

      {/* main container */}
      <div className="w-full max-w-[1320px] h-auto mt-20 mx-auto text-center mb-20">
        <p className="text-[18px] text-[#333333]">Partners & Clients</p>
        <h3 className="font-bold text-[32px] md:text-[48px]">
          We work with the best people
        </h3>

        {/* images */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <Image src="/images/image 2.png" alt="pic" height={129} width={240} />
          <Image src="/images/image 56.png" alt="pic" height={128} width={166} />
          <Image src="/images/image 57.png" alt="pic" height={127} width={143} />
          <Image src="/images/image 58.png" alt="pic" height={129} width={130} />
          <Image src="/images/image 59.png" alt="pic" height={129} width={189} />
          <Image src="/images/image 60.png" alt="pic" height={129} width={113} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
