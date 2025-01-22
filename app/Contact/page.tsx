
import { IoLocation } from "react-icons/io5";
import { FaAngleRight, FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { HiOutlineTrophy } from "react-icons/hi2";
import { LuBadgeCheck } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";
import HeaderTwo from "@/components/Header-to";
import Link from "next/link";
import Image from "next/image";


export default function Contact() {
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
            Contact Us
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
              <Link href={"/Signin"} className="text-orange-500">
               Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto mt-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="font-semibold text-2xl md:text-4xl">
              <span className="text-orange-500">Ge</span>t In Touch With Us
            </h1>
            <p className="text-gray-600 text-sm md:text-base mt-4">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="space-y-8">
              {/* Address Box */}
              <div className="flex items-start">
                <IoLocation className="w-8 h-8 text-orange-500" />
                <div className="ml-4">
                  <p className="font-bold text-lg">Address</p>
                  <p className="text-gray-600">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>
              {/* Phone Box */}
              <div className="flex items-start">
                <FaPhoneAlt className="w-8 h-8 text-orange-500" />
                <div className="ml-4">
                  <p className="font-bold text-lg">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              {/* Working Hours */}
              <div className="flex items-start">
                <FaClock className="w-8 h-8 text-orange-500" />
                <div className="ml-4">
                  <p className="font-bold text-lg">Working Hours</p>
                  <p className="text-gray-600">Mon-Fri: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div>
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Abc@def.com"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="This is optional"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    placeholder="Hi! I d like to ask about..."
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  ></textarea>
                </div>
                <button className="w-full py-3 bg-orange-500 text-white rounded-lg shadow ">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-gray-100 mt-16 py-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
              {/* Feature Box 1 */}
              <div className="flex items-center">
                <HiOutlineTrophy className="w-12 h-12 text-orange-500" />
                <div className="ml-4">
                  <p className="font-semibold text-lg">High Quality</p>
                  <p className="text-gray-600">Crafted from top materials</p>
                </div>
              </div>
              {/* Feature Box 2 */}
              <div className="flex items-center">
                <LuBadgeCheck className="w-12 h-12 text-orange-500" />
                <div className="ml-4">
                  <p className="font-semibold text-lg">Certified Team</p>
                  <p className="text-gray-600">Experienced professionals</p>
                </div>
              </div>
              {/* Feature Box 3 */}
              <div className="flex items-center">
                <MdSupportAgent className="w-12 h-12 text-orange-500" />
                <div className="ml-4">
                  <p className="font-semibold text-lg">24/7 Support</p>
                  <p className="text-gray-600">Always here to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
