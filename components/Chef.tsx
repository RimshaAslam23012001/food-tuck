import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Cheif() {
  return (
    <div className="bg-[#0D0D0DF2] py-44 px-4 sm:px-6 lg:px-20">
      <div className="text-white text-center">
        <h1
          className={`${greatVibes.className} font-normal text-2xl lg:text-4xl text-orange-500`}
        >
          Chefs
        </h1>
        <h1 className="text-xl lg:text-4xl font-semibold mt-4">
          <span className="text-orange-500">Me</span>et Our Chef
        </h1>
      </div>

      {/* Chefs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="relative bg-gray-500 rounded-lg overflow-hidden">
            <Image
              src={`/images/Chef${num}.png`}
              alt={`Chef ${num}`}
              width={312}
              height={391}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-10">
        <Link href="/Chef">
        <button className="bg-transparent border border-orange-500 text-orange-500 py-2 px-6 rounded-full hover:bg-orange-500 hover:text-white transition">
          See More
        </button>
        </Link>
      </div>
    </div>
  );
}