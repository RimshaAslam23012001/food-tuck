import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Sidebar = () => {
  return (
      <div>
        <div className="w-full px-4 mt-8">
          {/* Searchbar */}
          <div className="max-w-md w-full flex border">
            <input
              type="text"
              placeholder="Search Your Keyword"
              className="flex-grow p-2"
            />
            <div className="w-16 h-16 bg-orange-500 text-white flex justify-center items-center">
              <CiSearch className="w-6 h-6" />
            </div>
          </div>

          {/* Blogger/Photographer */}
          <div className="bg-white border max-w-md w-full mt-4 p-4">
            <div className="flex flex-col items-center">
              <Image
                src="/images/blog2.png"
                alt="Client"
                width={147}
                height={128}
                className="w-32 h-32 rounded-full"
              />
              <p className="text-[#333333] font-bold text-lg mt-4">
                Prince Miyako
              </p>
              <p className="text-gray-500 text-sm">Blogger/Photographer</p>
              <div className="flex justify-center items-center text-orange-500 mt-4 space-x-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="text-[#828282]">(1 Review)</p>
              </div>
              <div className="text-center text-sm text-[#828282] mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis distinctio, odio eligendi suscipit reprehenderit
                atque.
              </div>
              <div className="text-[#333333] flex gap-4 my-4">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaPinterestSquare />
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="max-w-md w-full border p-4 text-[#828282] mt-5">
            <p className="font-bold text-lg text-[#333333]">Recent Posts</p>

            {/* Post 1 */}
            <div className="flex items-center border-b py-3">
              <Image
                src="/images/s1.png"
                alt="Recent Post 1"
                width={99}
                height={91}
              />
              <div className="ml-3">
                <p className="text-sm">June 22, 2020</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit cingelit, sed do.
                </p>
              </div>
            </div>

            {/* Post 2 */}
            <div className="flex items-center border-b py-3">
              <Image
                src="/images/s2.png"
                alt="Recent Post 2"
                width={99}
                height={91}
              />
              <div className="ml-3">
                <p className="text-sm">June 22, 2020</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit cingelit, sed do.
                </p>
              </div>
            </div>

            {/* Post 3 */}
            <div className="flex items-center border-b py-3">
              <Image
                src="/images/s3.png"
                alt="Recent Post 3"
                width={99}
                height={91}
              />
              <div className="ml-3">
                <p className="text-sm">June 22, 2020</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit cingelit, sed do.
                </p>
              </div>
            </div>

            {/* Post 4 */}
            <div className="flex items-center border-b py-3">
              <Image
                src="/images/s4.png"
                alt="Recent Post 4"
                width={99}
                height={91}
              />
              <div className="ml-3">
                <p className="text-sm">June 22, 2020</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit cingelit, sed do.
                </p>
              </div>
            </div>
          </div>

          {/* Filter By Menu */}
          <div className="max-w-md w-full border p-4 mt-5">
            <p className="font-bold text-lg text-[#333333]">Filter By Menu</p>

            {/* Menu Items */}
            <div className="flex items-center border-b py-3">
              <Image
                src="/images/s5.png"
                alt="Filter 1"
                width={67}
                height={62}
              />
              <div className="ml-3 flex justify-between items-center w-full">
                <p className="font-bold text-sm">Chicken Fry</p>
                <p className="text-sm">26</p>
              </div>
            </div>

            <div className="flex items-center border-b py-3">
              <Image
                src="/images/s6.png"
                alt="Filter 2"
                width={67}
                height={62}
              />
              <div className="ml-3 flex justify-between items-center w-full">
                <p className="font-bold text-sm">Burger Food</p>
                <p className="text-sm">46</p>
              </div>
            </div>

            <div className="flex items-center border-b py-3">
              <Image
                src="/images/s7.png"
                alt="Filter 3"
                width={67}
                height={62}
              />
              <div className="ml-3 flex justify-between items-center w-full">
                <p className="font-bold text-sm">Pizza</p>
                <p className="text-sm">16</p>
              </div>
            </div>

            <div className="flex items-center border-b py-3">
              <Image
                src="/images/s8.png"
                alt="Filter 4"
                width={67}
                height={62}
              />
              <div className="ml-3 flex justify-between items-center w-full">
                <p className="font-bold text-sm">Fresh Fruits</p>
                <p className="text-sm">36</p>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full border p-4 mt-5">
            <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Image
                  alt="Delicious pizza with various toppings"
                  className="w-full h-auto"
                  src="/images/s9.png"
                  height={200}
                  width={200}
                />
              </div>
              <div>
                <Image
                  alt="Gourmet dish with a poached egg on top"
                  className="w-full h-auto"
                  src="/images/s10.png"
                  height={200}
                  width={200}
                />
              </div>
              <div>
                <Image
                  alt="Pasta dish with a glass of red wine"
                  className="w-full h-auto"
                  src="/images/s11.png"
                  height={200}
                  width={200}
                />
              </div>
              <div>
                <Image
                  alt="Grilled meat platter with vegetables"
                  className="w-full h-auto"
                  src="/images/s12.png"
                  height={200}
                  width={200}
                />
              </div>
              <div>
                <Image
                  alt="Gourmet dish with a variety of ingredients"
                  className="w-full h-auto"
                  src="/images/s13.png"
                  height={200}
                  width={200}
                />
              </div>
              <div>
                <Image
                  alt="French toast with bananas and blueberries"
                  className="w-full h-auto"
                  src="/images/s14.png"
                  height={200}
                  width={200}
                />
              </div>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="max-w-md w-full border p-4 mt-5">
            <p className="text-[#333333] font-bold text-lg">Popular Tags</p>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="border p-2 text-center text-sm bg-gray-100 rounded">
                Sandwich
              </div>
              <div className="border p-2 text-center text-sm bg-gray-100 rounded">
                Tikka
              </div>
              <div className="border p-2 text-center text-sm bg-gray-100 rounded">
                Bbq
              </div>
              <div className="border p-2 text-center text-sm bg-gray-100 rounded">
                Restaurant
              </div>
              <div className="border p-2 text-center text-sm bg-gray-100 rounded">
                Pizza
              </div>
              <div className="border p-2 text-center text-sm bg-gray-100 rounded">
                Health
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="max-w-md w-full border p-4 mt-5">
            <p className="font-bold text-lg">Follow Us</p>
            <div className="flex gap-4 mt-3">
              <div className="w-12 h-12 bg-gray-100 flex justify-center items-center rounded">
                <FaTwitter />
              </div>
              <div className="w-12 h-12 bg-gray-100 flex justify-center items-center rounded">
                <FaYoutube />
              </div>
              <div className="w-12 h-12 bg-gray-100 text-white flex justify-center items-center rounded">
                <FaPinterestSquare />
              </div>
              <div className="w-12 h-12 bg-gray-100 flex justify-center items-center rounded">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Sidebar;
