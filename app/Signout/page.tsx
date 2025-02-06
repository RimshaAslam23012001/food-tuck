import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import HeaderTwo from "@/components/Header-to";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
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
            Sign Up
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
              <Link href={"/Signout"} className="text-orange-500">
               Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
        {/* Signup Form */}
       <section className="py-16 flex justify-center items-center">
               <div className="w-full max-w-md px-4">
                 {/* Clerk SignUp Component */}
                 <SignUp 
            
            routing="hash"   // Routing type (path-based)
          />

               </div>
             </section>
           
      </div>
    </>
  );
}
