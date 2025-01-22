import React from 'react';
import Image from 'next/image';

function RestaurantDetail() {
  return (
    <div className="w-full h-auto bg-[#0D0D0DD9] text-white py-28 ">
      <div className="max-w-[1319px] mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-8">
        {/* 1st Icon */}
        <div className="text-center w-[230px]">
          <Image
            src={"/images/g1.png"}
            alt="Professional Chefs"
            width={120}
            height={120}
            className="mx-auto"
          />
          <p className="font-bold text-[20px] lg:text-[24px] mt-4">Professional Chefs</p>
          <p className="font-bold text-[32px] lg:text-[40px]">420</p>
        </div>

        {/* 2nd Icon */}
        <div className="text-center w-[230px]">
          <Image
            src={"/images/g2.png"}
            alt="Items Of Food"
            width={120}
            height={120}
            className="mx-auto"
          />
          <p className="font-bold text-[20px] lg:text-[24px] mt-4">Items Of Food</p>
          <p className="font-bold text-[32px] lg:text-[40px]">320</p>
        </div>

        {/* 3rd Icon */}
        <div className="text-center w-[230px]">
          <Image
            src={"/images/g4.png"}
            alt="Years Of Experienced"
            width={120}
            height={120}
            className="mx-auto"
          />
          <p className="font-bold text-[20px] lg:text-[24px] mt-4">Years Of Experienced</p>
          <p className="font-bold text-[32px] lg:text-[40px]">30+</p>
        </div>

        {/* 4th Icon */}
        <div className="text-center w-[230px]">
          <Image
            src={"/images/g5.png"}
            alt="Happy Customers"
            width={120}
            height={120}
            className="mx-auto"
          />
          <p className="font-bold text-[20px] lg:text-[24px] mt-4">Happy Customers</p>
          <p className="font-bold text-[32px] lg:text-[40px]">220</p>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetail;