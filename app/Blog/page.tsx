import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleRight,
} from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import { PiUserCirclePlusLight } from "react-icons/pi";
import HeaderTwo from "@/components/Header-to";
import Sidebar from "@/components/Sidebar";

const BlogPage = () => {
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
            Blog List
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
              <Link href={"/Blog"} className="text-orange-500">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main div */}
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Left Side Div */}
        <div className="w-full lg:w-2/3 p-4">
          {/* Blog1 */}
          <div className="w-full max-w-[872px] h-auto lg:h-[830px] mx-auto mt-8 lg:mt-10 px-4">
            <div className="relative">
              <Image
                src={"/images/b3.png"}
                alt="image1"
                width={871}
                height={520}
                className="w-full h-auto"
              />
              {/* Date */}
              <div className="w-[60px] h-[60px] rounded-md bg-orange-500 absolute top-4 left-4">
                <p className="text-[18px] font-bold text-white w-[28px] ml-4">
                  14 Feb
                </p>
              </div>
            </div>
            {/* icons */}
            <div className="flex text-[#4F4F4F] gap-3 mt-3">
              <IoCalendarNumberOutline className="text-orange-500 w-6 h-6" />
              Feb 14, 2022 /
              <TbMessages className="text-orange-500 w-6 h-6" />
              3 /
              <PiUserCirclePlusLight className="text-orange-500 w-6 h-6" />
              Admin
            </div>
            {/* Heading */}
            <h5 className="font-bold text-[#333333] mt-5">
              10 Reasons To Do A Digital Detox Challenge
            </h5>

            {/* line */}
            <div className="w-full lg:w-[694px] border mt-5"></div>

            {/* Paragraph */}
            <p className="w-full lg:w-[648px] text-[#4F4F4F] mt-5">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat
            </p>
            <Link href="/BlogDetail">
              <button
                type="button"
                className="text-orange-500 border border-orange-500 w-full lg:w-[100px] h-10 mt-6"
              >
                Read More
              </button>
            </Link>
          </div>

          {/* Blog2 */}

          <div className="w-full max-w-[872px] h-auto lg:h-[830px] mx-auto mt-8 lg:mt-10 px-4">
            <div className="relative">
              <Image
                src={"/images/b2.png"}
                alt="image2"
                width={871}
                height={520}
                className="w-full h-auto"
              />
              {/* Date */}
              <div className="w-[60px] h-[60px] rounded-md bg-orange-500 absolute top-4 left-4">
                <p className="text-[18px] font-bold text-white w-[28px] ml-4">
                  14 Feb
                </p>
              </div>
            </div>
            {/* icons  */}
            <div className="flex text-[#4F4F4F] gap-3 mt-3">
              <IoCalendarNumberOutline className="text-orange-500 w-6 h-6" />
              Feb 14, 2022 /
              <TbMessages className="text-orange-500 w-6 h-6" />
              3 /
              <PiUserCirclePlusLight className="text-orange-500 w-6 h-6" />
              Admin
            </div>

            {/* Heading */}
            <h5 className="font-bold text-[#333333] mt-5">
              Traditional Soft Pretzels with Sweet Beer Cheese
            </h5>

            {/* line */}
            <div className="w-full lg:w-[694px] border mt-5"></div>

            {/* Paragraph */}
            <p className="w-full lg:w-[648px] text-[#4F4F4F] mt-5">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat
            </p>

            <Link href="/BlogDetail">
              <button
                type="button"
                className="text-orange-500 border border-orange-500 w-full lg:w-[100px] h-10 mt-6"
              >
                Read More
              </button>
            </Link>
          </div>

          {/* Blog3 */}
          <div className="w-full max-w-[872px] h-auto lg:h-[830px] mx-auto mt-8 lg:mt-10 px-4">
            <div className="relative">
              <Image
                src={"/images/b6.png"}
                alt="image3"
                width={871}
                height={520}
                className="w-full h-auto"
              />
              {/* Date */}
              <div className="w-[60px] h-[60px] rounded-md bg-orange-500 absolute top-4 left-4">
                <p className="text-[18px] font-bold text-white w-[28px] ml-4">
                  14 Feb
                </p>
              </div>
            </div>
            {/* icons  */}
            <div className="flex text-[#4F4F4F] gap-3 mt-3">
              <IoCalendarNumberOutline className="text-orange-500 w-6 h-6" />
              Feb 14, 2022 /
              <TbMessages className="text-orange-500 w-6 h-6" />
              3 /
              <PiUserCirclePlusLight className="text-orange-500 w-6 h-6" />
              Admin
            </div>

            {/* Heading */}
            <h5 className="font-bold text-[#333333] mt-5">
              The Ultimate Hangover Burger: Egg in a Hole Burger
            </h5>

            {/* line */}
            <div className="w-full lg:w-[694px] border mt-5"></div>

            {/* Paragraph */}
            <p className="w-full lg:w-[648px] text-[#4F4F4F] mt-5">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat
            </p>

            <Link href="/BlogDetail">
              <button
                type="button"
                className="text-orange-500 border border-orange-500 w-full lg:w-[100px] h-10 mt-6"
              >
                Read More
              </button>
            </Link>
          </div>

          {/* Blog4 */}

          <div className="w-full max-w-[872px] h-auto lg:h-[830px] mx-auto mt-8 lg:mt-10 px-4">
            <div className="relative">
              <Image
                src={"/images/about3.png"}
                alt="image3"
                width={871}
                height={520}
                className="w-full h-auto"
              />
              {/* Date */}
              <div className="w-[60px] h-[60px] rounded-md bg-orange-500 absolute top-4 left-4">
                <p className="text-[18px] font-bold text-white w-[28px] ml-4">
                  14 Feb
                </p>
              </div>
            </div>
            {/* icons  */}
            <div className="flex text-[#4F4F4F] gap-3 mt-3">
              <IoCalendarNumberOutline className="text-orange-500 w-6 h-6" />
              Feb 14, 2022 /
              <TbMessages className="text-orange-500 w-6 h-6" />
              3 /
              <PiUserCirclePlusLight className="text-orange-500 w-6 h-6" />
              Admin
            </div>

            {/* Heading */}
            <h5 className="font-bold text-[#333333] mt-5">
              My Favorite Easy Black Pizza Toast Recipe
            </h5>

            {/* line */}
            <div className="w-full lg:w-[694px] border mt-5"></div>

            {/* Paragraph */}
            <p className="w-full lg:w-[648px] text-[#4F4F4F] mt-5">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat
            </p>

            <Link href="/BlogDetail">
              <button
                type="button"
                className="text-orange-500 border border-orange-500 w-full lg:w-[100px] h-10 mt-6"
              >
                Read More
              </button>
            </Link>
          </div>

          {/* pagination */}

          <div className="w-full flex justify-center my-10">
            <div className="flex gap-3 text-orange-500">
              <div className="w-[50px] h-[50px] border-[2px] flex items-center justify-center">
                <FaAngleDoubleLeft />
              </div>
              <div className="w-[50px] h-[50px] border-[2px] flex items-center justify-center">
                1
              </div>
              <div className="w-[50px] h-[50px] border-[2px] bg-orange-500 text-white flex items-center justify-center">
                2
              </div>
              <div className="w-[50px] h-[50px] border-[2px] flex items-center justify-center">
                3
              </div>
              <div className="w-[50px] h-[50px] border-[2px] flex items-center justify-center">
                <FaAngleDoubleRight />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <Sidebar />
      </div>
    </div>
  );
};

export default BlogPage;
