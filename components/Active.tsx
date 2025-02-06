import React from "react";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

const ActiveProcess = () => {
  return (
    <div>
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px]">
        <Image
          src={"/images/doc.png"}
          alt="Image"
          height="300"
          width="300"
          className="w-full h-auto object-cover"
        />
        <div className="text-white absolute inset-0 flex flex-col justify-center items-center md:items-end w-full px-4 sm:px-8 lg:px-12 text-center md:text-right">
          <div className="w-full md:w-[705px] md:max-w-full">
            <p
              className={`${greatVibes.className} text-[24px] sm:text-[30px] md:text-[32px] lg:text-[40px] text-orange-500 leading-8 sm:leading-10 lg:leading-[48px]`}
            >
              Restaurant Active Process
            </p>
            <p className="font-bold sm:text-3xl md:text-4xl lg:text-5xl leading-[40px] sm:leading-[48px] lg:leading-[56px]">
              <span className="text-orange-500">We</span> Document Every Food Bean
              Process until it is saved
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna,
            </p>

            <div className="flex sm:flex-row gap-2 sm:gap-4 mt-2 sm:mt-9 justify-center md:justify-end">
              <button className="font-bold w-[100px] sm:w-[160px] h-[50px] sm:h-[60px] rounded-[30px] border border-orange-500 text-xs sm:text-sm">
                Read More
              </button>
              {/* icon */}
              <div className="flex items-center sm:gap-4 mt-4 sm:mt-0">
                <Image src={"/images/Play.png"} alt="icon" width={60} height={50} />
                <p className="font-bold text-sm sm:text-base">Play Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveProcess;