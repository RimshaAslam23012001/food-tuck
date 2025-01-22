import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import HeaderTwo from "@/components/Header-to";
import Client from "@/components/Client";
import Team from "@/components/Team";
import Menu2 from "@/components/Menu2";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default function Aboutus() {

  return (
    <div className="w-full overflow-hidden">
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
            About us
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
              <Link href={"/About"} className="text-orange-500">
               About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* First Section: Content and Buttons */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Images Group */}
            <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4">
              <Image
                className="w-full md:w-1/2 h-auto object-cover rounded-lg"
                alt="hero"
                src="/images/b3.png"
                width={309}
                height={536}
                priority
              />
              <div className="flex flex-col gap-4">
                <Image
                  className="w-full h-auto object-cover rounded-lg"
                  alt="image2"
                  src="/images/a1.png"
                  width={309}
                  height={271}
                />
                <Image
                  className="w-full h-auto object-cover rounded-lg"
                  alt="image3"
                  src="/images/a2.png"
                  width={309}
                  height={382}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-[#FF9F0D] font-medium">About us</span>
                <div className="w-12 h-[2px] bg-[#FF9F0D]"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Food is an important part of a balanced Diet
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#FF9F0D] text-white rounded-lg hover:bg-[#ff8c00] transition-colors">
                  Show More
                </button>
                <button className="px-6 py-3 flex items-center gap-2 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                  <IoPlayOutline size={24} />
                  Watch video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
              pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
          </div>
          <div className="relative w-full">
            <Image
              src="/images/about.png"
              alt="Why Choose Us"
              width={1320}
              height={386}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 border-2 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/student.png"
                  width={80}
                  height={80}
                  alt="Best Chef"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">BEST CHEF</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque diam pellentesque bibendum non dui volutpat
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 border-2 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/Coffee.png"
                  width={80}
                  height={80}
                  alt="120 Item Food"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">120 ITEM FOOD</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque diam pellentesque bibendum non dui volutpat
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 border-2 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/person.png"
                  width={80}
                  height={80}
                  alt="Clean Environment"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">CLEAN ENVIRONMENT</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque diam pellentesque bibendum non dui volutpat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Member Section */}
      <section className="w-full py-20 bg-[#ffa425]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Team Member</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue
            </p>
            <Team/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full text-black">
        <Client />
      </section>

      {/* Menu Section */}
      <section className="w-full py-20">
          <Menu2 />
      </section>
    </div>
    
  );
}