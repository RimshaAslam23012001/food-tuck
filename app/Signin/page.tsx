// File: pages/Signin/page.tsx

import HeaderTwo from "@/components/Header-to";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default function SignInPage() {
  return (
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
            Sign In
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
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Signin Form */}
      <section className="py-16 flex justify-center items-center">
        <div className="w-full max-w-md px-4">
        <SignIn
            path="/signin" // Path of the SignIn page
            routing="path" // The routing type
            signUpUrl="/Signout" // This is the Sign Up page URL to redirect
          />
        </div>
      </section>

    </div>
  );
}
