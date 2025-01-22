import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

function AboutUs() {
  return (
    <div className="bg-[#0D0D0DF2] w-full text-white pt-24 md:pt-44">
      {/* About us main container */}
      <div className="w-full max-w-[1320px] h-auto px-5 md:px-10 mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Left Section */}
        <div className="w-full md:w-[562px] space-y-7">
          <p
            className={`${greatVibes.className} text-[24px] md:text-[32px] leading-10 text-orange-500 text-center md:text-left`}
          >
            About us
          </p>
          <h2 className="font-bold text-[28px] md:text-[48px] leading-[36px] md:leading-[56px] text-center md:text-left">
            <span className="text-orange-500">We</span> Create the Best Foody
            Product
          </h2>
          <p className="text-sm md:text-base text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          <div className="flex gap-3 justify-center md:justify-start">
            <FaCheck className="mt-1" />
            <p className="text-[14px] md:text-[18px]">
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
          </div>

          <div className="flex gap-3 justify-center md:justify-start">
            <FaCheck className="mt-1" />
            <p className="text-[14px] md:text-[18px]">
              Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </p>
          </div>

          <div className="flex gap-3 justify-center md:justify-start">
            <FaCheck className="mt-1" />
            <p className="text-[14px] md:text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className="w-[150px] md:w-[190px] h-[50px] md:h-[60px] rounded-[25px] md:rounded-[30px] bg-orange-500 text-white text-sm md:text-lg"
            >
              Read More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[660px] h-auto grid grid-cols-2 grid-rows-3 gap-3">
          {/* 1st image */}
          <div className="col-span-2">
            <Image
              src={"/images/about1.png"}
              alt="About Us"
              width={660}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* 2nd image */}
          <div>
            <Image
              src={"/images/about2.png"}
              alt="About Us"
              width={322}
              height={194}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* 3rd image */}
          <div>
            <Image
              src={"/images/about3.png"}
              alt="About Us"
              width={322}
              height={194}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
