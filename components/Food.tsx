import React from "react";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

const FoodCategory = async () => {
  const query = `*[_type == "food"] | order(_updatedAt asc){
    image,
    name
  }`;
  const response = await client.fetch(query);

  return (
    <div className="bg-[#0D0D0DF2] w-full text-white py-10">
      <div className="w-full max-w-[1320px] px-5 md:px-10 mx-auto">
        {/* Header Section */}
        <div className="w-full text-center mb-10">
          <p
            className={`${greatVibes.className} text-[24px] md:text-[32px] text-orange-500`}
          >
            Food Category
          </p>
          <h3 className="text-[28px] md:text-[50px] font-bold">
            Choose Food Item
          </h3>
        </div>

        {/* Food Items */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {response.map((res: any, index: number) => (
            <div key={index} className="relative w-full h-auto">
              {/* Image */}
              <Image
                src={res.image ? urlFor(res.image).url() : ""}
                width={305}
                height={328}
                alt={res.name}
                className="w-full h-auto rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;
