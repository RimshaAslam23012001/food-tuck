import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import { LiaQuoteRightSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Client() {
  return (
    <div className=" bg-gray-700 py-24 px-4 sm:px-6 lg:px-20">
      <div className="text-center">
        <p
          className={`${greatVibes.className} text-orange-500 text-xl lg:text-2xl`}
        >
          Testimonials
        </p>
        <p className="text-white text-2xl lg:text-4xl font-semibold mt-4">
          What our clients are saying
        </p>
      </div>

      <div className="bg-white mt-12 mx-auto p-6 rounded-lg shadow-lg max-w-4xl">
        <div className="flex flex-col items-center">
          {/* Image placed on top of the container */}
          <div className="relative text-center">
            <div className=" top-0 left-1/2 transform -translate-x-1/2">
              <Image
                alt="Portrait of a person"
                className="rounded-full border-4 border-white"
                src="/images/Ellipsis.png"
                width={150}
                height={150}
              />
            </div>
          </div>

          <LiaQuoteRightSolid className="text-orange-500 mt-12 w-8 h-8" />
          <p className="text-gray-600 text-base lg:text-lg text-center mt-4 px-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <div className="flex justify-center items-center text-yellow-400 mt-4 space-x-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="text-gray-300" />
          </div>
          <p className="text-gray-800 font-semibold text-lg mt-4">
            Alamin Hasan
          </p>
          <p className="text-gray-500 text-sm">Food Specialist</p>
        </div>
      </div>
    </div>
  );
}
