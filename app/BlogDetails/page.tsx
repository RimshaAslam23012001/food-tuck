import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import HeaderTwo from "@/components/Header-to";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { TbMessages } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

export default function BlogDetails() {
  return (
    <div className="w-full bg-white">
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
            Blog Details
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Blog Image */}
            <div className="relative aspect-video">
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
                <h5 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                  10 Reasons To Do A Digital Detox Challenge
                </h5>
                {/* Paragraph */}
                <p className="w-full lg:w-[648px] text-[#4F4F4F] mt-5">
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat
                </p>
                <p className="leading-relaxed">
                  Netus pretium tellus nulla commodo massa adipiscing in
                  elementum magna congue condimentum placerat habitasse potenti
                  ac orci a quisque tristique elementum et viverra at
                  condimentum scelerisque eu mi.
                </p>

                <p className="leading-relaxed">
                  Ac haca ullamcorper donec ante habi tasse donec imperdiet
                  eturpis varius per a augue magna hac. Nec hac et vestibulum
                  duis a tincidunt per a aptent interdum purus feugiat.
                </p>

                {/* Quote Block */}
                <blockquote className="bg-[#FF9F0D] p-6 lg:p-8 rounded-lg my-8">
                  <div className="flex gap-4 items-start">
                    <Image
                      src="/images/comma.png"
                      alt="Quote"
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 object-contain"
                    />
                    <p className="text-white text-base md:text-lg font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </blockquote>

                {/* Content Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="space-y-4">
                    <p className="leading-relaxed">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat.Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat.Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat.
                    </p>
                  </div>

                  <div className="relative aspect-video">
                    <Image
                      src="/images/blog9.png"
                      alt="Blog Content"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>

                <div className="text-gray-600 space-y-4">
                  <p className="leading-relaxed">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat.
                  </p>
                  <p className="leading-relaxed">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat.Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magnaLorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat.Lorem ipsum dolor sit
                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam
                    erat.Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat.
                  </p>
                  <p className="leading-relaxed">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat.Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat.Lorem ipsum dolor sit
                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam
                    erat.Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat.Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat.Lorem ipsum
                    dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat.Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat.Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat.
                  </p>
                </div>
              </div>            
            </div>
            
          </div>
          {/* Right */}
          <Sidebar />
        </div>
        <div>
                {/* Comments Section */}
                <section className="pt-12 border-t border-gray-200">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                    Comments - 03
                  </h2>
                  <div className="space-y-6">
                    {[1, 2, 3].map((index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                      >
                        <Image
                          src="/images/c10.png"
                          alt={`Comment ${index}`}
                          width={60}
                          height={60}
                          className="rounded-full w-10 h-10 md:w-12 md:h-12 object-cover flex-shrink-0"
                        />
                        <div>
                          <h3 className="font-bold text-gray-800">John Doe</h3>
                          <p className="text-gray-600 text-sm md:text-base">
                            Great article! Thanks for sharing.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
                {/* Comment Form */}
                <section className="pt-12 border-t border-gray-200">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                    Post a Comment
                  </h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D] outline-none transition-all"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D] outline-none transition-all"
                      />
                    </div>
                    <textarea
                      placeholder="Write a Comment"
                      rows={6}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D] outline-none resize-y min-h-[150px] transition-all"
                    />
                    <button className="bg-[#FF9F0D] text-white px-8 py-3 rounded-lg hover:bg-[#e88d00] transition-all duration-300 text-sm md:text-base">
                      Post Comment
                    </button>
                  </form>
                </section>
              </div>
      </div>
    </div>
  );
}
