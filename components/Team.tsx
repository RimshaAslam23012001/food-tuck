import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Team = () => {
  return (
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <Image
              alt="Chef working in the kitchen"
              className="w-full h-64 object-cover"
              src="/images/team.png"
              width={500}
              height={500}
            />
            <div className="absolute top-0 right-0 mt-4 mr-4 flex flex-col space-y-2">
              <Link className="bg-white p-2 rounded-full shadow-md" href="#">
                <FaFacebookF />
              </Link>
              <Link className="bg-white p-2 rounded-full shadow-md" href="#">
                <FaTwitter />
              </Link>
              <Link className="bg-white p-2 rounded-full shadow-md" href="#">
                <FaInstagram />
              </Link>
              <Link className="bg-white p-2 rounded-full shadow-md" href="#">
                <FaGoogle />
              </Link>
            </div>
          </div>
          <div className="p-6 text-center">
            <h2 className="text-xl font-semibold">Mark Henry</h2>
            <p className="text-gray-600">Owner</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <Image
              alt="Chef working in the kitchen"
              className="w-full h-64 object-cover"
              src="/images/team.png"
              width={500}
              height={500}
            />
            <div className="absolute top-0 right-0 mt-4 mr-4 flex flex-col space-y-2">
              <Link className="bg-white p-2 rounded-full shadow-md" href="#">
                <FaFacebookF />
              </Link>
              <Link className="bg-white p-2 rounded-full shadow-md" href="#">
                <FaTwitter />
              </Link>
              <Link className="bg-white p-2 rounded-full shadow-md" href="#">
                <FaInstagram />
              </Link>
              <Link className="bg-white p-2 rounded-full shadow-md" href="#">
                <FaGoogle />
              </Link>
            </div>
          </div>
          <div className="p-6 text-center">
            <h2 className="text-xl font-semibold">Lucky Helen</h2>
            <p className="text-gray-600">Chef</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <Image
              alt="Chef working in the kitchen"
              className="w-full h-64 object-cover"
              src="/images/team.png"
              width={500}
              height={500}
            />
             <div className="absolute top-0 right-0 mt-4 mr-4 flex flex-col space-y-2">
              <Link className="bg-white p-2 rounded-full shadow-md" href="#">
                <FaFacebookF />
              </Link>
              <Link className="bg-white p-2 rounded-full shadow-md" href="#">
                <FaTwitter />
              </Link>
              <Link className="bg-white p-2 rounded-full shadow-md" href="#">
                <FaInstagram />
              </Link>
              <Link className="bg-white p-2 rounded-full shadow-md" href="#">
                <FaGoogle />
              </Link>
            </div>
          </div>
          <div className="p-6 text-center">
            <h2 className="text-xl font-semibold">Moon Henry</h2>
            <p className="text-gray-600">Founder</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <Image
              alt="Chef working in the kitchen"
              className="w-full h-64 object-cover"
              src="/images/team.png"
              width={500}
              height={500}
            />
            <div className="absolute top-0 right-0 mt-4 mr-4 flex flex-col space-y-2">
              <Link className="bg-white p-2 rounded-full shadow-md" href="#">
                <FaFacebookF />
              </Link>
              <Link className="bg-white p-2 rounded-full shadow-md" href="#">
                <FaTwitter />
              </Link>
              <Link className="bg-white p-2 rounded-full shadow-md" href="#">
                <FaInstagram />
              </Link>
              <Link className="bg-white p-2 rounded-full shadow-md" href="#">
                <FaGoogle />
              </Link>
            </div>
          </div>
          <div className="p-6 text-center">
            <h2 className="text-xl font-semibold">Tom Monrow</h2>
            <p className="text-gray-600">Specialist</p>
          </div>
        </div>
      </div>
  );
};

export default Team;
