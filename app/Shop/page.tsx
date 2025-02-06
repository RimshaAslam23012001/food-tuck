"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaAngleRight,
  FaAngleDown,
  FaRegHeart,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaStar,
} from "react-icons/fa";
import { PiHandbagLight, PiRectangleLight } from "react-icons/pi";
import { BiGitCompare } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import HeaderTwo from "@/components/Header-to";

const Shop = () => {
  const [items, setItems] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [sortOption, setSortOption] = useState("Newest");
  const [selectedTag, setSelectedTag] = useState("All");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Define allTags array
  const allTags = ["Sandwiches", "Burger", "Chicken Chup", "Drink", "Pizza", "Thai", "Non Veg", "Uncategorized"];

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // You can set this to any number

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "food"] | order(_updatedAt asc){
        name,
        category,
        price,
        originalPrice,
        tags,
        image,
        description,
        "slug":slug.current
      }`;
      const item = await client.fetch(query);
      setItems(item);
      setFilteredItems(item);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = items;

    // Apply search query filter
    if (searchQuery) {
      filtered = filtered.filter((food: any) =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply tag filter
    if (selectedTag !== "All") {
      filtered = filtered.filter((item) => item.tags?.includes(selectedTag));
    }

    // Apply sorting
    if (sortOption === "Price: Low to High") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Newest") {
      filtered.sort(
        (a, b) => new Date(b._updatedAt).getTime() - new Date(a._updatedAt).getTime()
      );
    }

    setFilteredItems(filtered);
  }, [searchQuery, selectedTag, sortOption, items]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <HeaderTwo />
      <div className="bg-gray-50">
        <div className="relative">
          <Image
            src="/images/heropic.png"
            alt="Shop hero"
            width={1920}
            height={410}
            className="w-full h-auto"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-[90%] max-w-[400px]">
            <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Our Shop
            </h1>
            <ul className="flex gap-2 justify-center text-sm mt-2 text-white">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight />
              </li>
              <li>
                <Link href="/shop" className="text-orange-500">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-lg">Sort By:</span>
                  <div className="relative">
                    <select
                      className="appearance-none bg-white border rounded-md py-2 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                    >
                      <option>Newest</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <FaAngleDown />
                    </div>
                  </div>
                </div>

                {/* Filter by Tags */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">Filter by:</span>
                  <div className="relative">
                    <select
                      className="appearance-none bg-white border rounded-md py-2 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      value={selectedTag}
                      onChange={(e) => setSelectedTag(e.target.value)}
                    >
                      <option value="All">All</option>
                      {allTags.map((tag, index) => (
                        <option key={index} value={tag}>
                          {tag}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <FaAngleDown />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentItems.map((item: any, index: number) => (
                  <Link
                    href={`Shops/${item.slug}`}
                    key={index}
                    className="group"
                  >
                    <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 transform group-hover:scale-105">
                      <div className="relative mb-4">
                        <Image
                          src={item.image ? urlFor(item.image).url() : ""}
                          alt={item.name}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-md"
                        />
                        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                          {item.tags?.[0]}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {item.name}
                      </h3>
                      <div className="flex justify-between items-center">
                        <span className="text-orange-500 font-bold">
                          ${item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-gray-500 line-through">
                            ${item.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-200 rounded-l-md disabled:opacity-50"
                >
                  <FaAngleDoubleLeft />
                </button>

                <span>
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-200 rounded-r-md disabled:opacity-50"
                >
                  <FaAngleDoubleRight />
                </button>
              </div>
            </div>

            <div className="lg:w-1/4">
              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Search</h2>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search Your Keyword"
                    className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <button className="bg-orange-500 text-white p-2 rounded-r-md hover:bg-orange-600 transition-colors">
                    <CiSearch className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Category</h2>
                {[
                  "Sandwiches",
                  "Burger",
                  "Chicken Chup",
                  "Drink",
                  "Pizza",
                  "Thai",
                  "Non Veg",
                  "Uncategorized",
                ].map((category, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <PiRectangleLight className="text-orange-500" />
                    <span>{category}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Latest Products</h2>
                {["Pizza", "Cupcake", "Cookies", "Burger"].map(
                  (product, index) => (
                    <div key={index} className="flex items-center mb-4">
                      <Image
                        src="/images/b3.png"
                        alt={product}
                        width={60}
                        height={60}
                        className="rounded-md mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{product}</h3>
                        <div className="flex text-orange-500">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar className="text-gray-300" />
                        </div>
                        <p className="text-sm text-gray-600">$35.00</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
