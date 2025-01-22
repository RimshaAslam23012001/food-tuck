import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaAngleRight } from "react-icons/fa";
import HeaderTwo from "@/components/Header-to";

const Pages = () => {
  return (
    <div>
      <HeaderTwo />
      {/* Hero Image */}
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
            FAQ
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
              <Link href={"/Faq"} className="text-orange-500">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading Section */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Questions Looks Here
            </h2>
            <p className="text-gray-500 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </p>
          </div>

          {/* Questions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {/* Question 1 */}
            <div className="p-6 bg-[#FAF7F2] rounded-lg shadow-md border">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">
                  How we serve food?
                </h3>
                <button className="text-gray-500 text-lg">+</button>
              </div>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            {/* Question 2 */}
            <div className="p-6 bg-[#FAF7F2] rounded-lg shadow-md border">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">
                  How can we get in touch with you?
                </h3>
                <button className="text-gray-500 text-lg">-</button>
              </div>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            {/* Question 3 */}
            <div className="p-6 bg-[#FAF7F2] rounded-lg shadow-md border">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">
                  How is our food quality?
                </h3>
                <button className="text-gray-500 text-lg">+</button>
              </div>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            {/* Question 4 */}
            <div className="p-6 bg-[#FAF7F2] rounded-lg shadow-md border">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">
                  What will be delivered? And When?
                </h3>
                <button className="text-gray-500 text-lg">+</button>
              </div>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            {/* Question 5 */}
            <div className="p-6 bg-[#FAF7F2] rounded-lg shadow-md border">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">
                  How do we give home delivery?
                </h3>
                <button className="text-gray-500 text-lg">+</button>
              </div>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            {/* Question 6 */}
            <div className="p-6 bg-[#FAF7F2] rounded-lg shadow-md border">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">
                  Is this restaurant 24 hours open?
                </h3>
                <button className="text-gray-500 text-lg">+</button>
              </div>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
