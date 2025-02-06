import HeaderTwo from "@/components/Header-to";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
export default function ErrorPage() {
  return (
    <>
    <div className="bg-gray-50 min-h-screen">
      <HeaderTwo />

      {/* Hero Image */}
      <div className="relative">
        <Image
          src={"/images/heropic.png"}
          alt="Checkout Hero Image"
          height={410}
          width={1920}
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-[90%] max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
          <h1 className="text-white font-bold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px]">
            Check Out
          </h1>
          <ul className="flex gap-2 justify-center text-xs sm:text-sm md:text-base mt-2 text-white">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li className="flex items-center">
              <FaAngleRight />
            </li>
            <li>
              <Link href={"/Home"} className="text-orange-500">
                404 Page
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Signup Form Section */}
      <section className="p-10 relative bg-white pt-36 flex flex-col items-center">
        <div className="w-[630px] text-center">
          <h3 className="text-[96px] font-bold text-[#FF9F0D] mb-6">404</h3>
          <p className="font-bold text-[32px] mb-4">
            Oops! Looks like something went wrong
          </p>
          <p className="text-[18px] mb-4">
            Page cannot be found! We’ll have it figured out in no time.
          </p>
          <p className="text-[18px] mb-6">
            Meanwhile, check out these fresh ideas:
          </p>
          {/* Button */}
          <Link href="/">
            <button className="bg-[#FF9F0D] text-white text-[18px] font-bold px-6 py-2 rounded hover:bg-[#e8890b]">
              Go Back to Home
            </button>
          </Link>
        </div>
      </section>
 </div>
 </>
);
}