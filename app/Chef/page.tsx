"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import HeaderTwo from "@/components/Header-to";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type Chef = {
  name: string;
  position: string;
  experience: string;
  specialty: string;
  image: { asset: { url: string } };
  description: string;
  available: string;
};

const ChefGrid = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchChefs = async () => {
      const query = `*[_type == "chef"] | order(_updatedAt asc){
        name,
        position,
        experience,
        specialty,
        image,
        description
      }`;
      const data = await client.fetch(query);
      setChefs(data);
      setLoading(false);
    };

    fetchChefs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-[90%] max-w-[300px] sm:max-w-[400px] md:max-w-[600px]">
          {/* Title */}
          <h1 className="text-white font-bold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px]">
            Our Chef
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
              <Link href={"/Home"} className="text-orange-500">
                Chef
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Grid with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {chefs.map((chef) => (
          <div
            key={chef.name}
            className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${
              chef.name === "Chef 7"
                ? "border-4 border-purple-600"
                : "border-4 border-transparent hover:border-purple-600"
            }`}
          >
            {/* Chef Image */}
            <div className="flex-1">
              <Image
                src={chef.image ? urlFor(chef.image).url() : ""}
                alt={chef.name}
                width={300}
                height={400}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center space-y-2">
              <h3 className="text-gray-800 font-bold text-lg sm:text-xl md:text-2xl">{chef.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{chef.position}</p>
              <p className="text-gray-600 text-sm sm:text-base">{chef.experience} year&#44;s of experience</p>
              <p className="text-gray-600 text-sm sm:text-base">Specialty in {chef.specialty}</p>
              <p className="text-gray-600 text-sm sm:text-base">{chef.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefGrid;
