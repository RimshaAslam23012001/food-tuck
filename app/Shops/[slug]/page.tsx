"use client";
import HeaderTwo from "@/components/Header-to";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaAngleRight,
  FaExchangeAlt,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";



const ShopDetails = ({ params: { slug } }: { params: { slug: string } }) => {
  const [response, setResponse] = useState<any | string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState(1);

  // Fetch data on component mount
  useEffect(() => {
    const fetchResponse = async () => {
      try {
        // Query to fetch product by slug
        const query = `*[_type == "food" && slug.current == '${slug}' ]{
          name,
          image,
          rating,
          reviews,
          category,
          price,
          description
        }[0]`;
        const data = await client.fetch(query);
        

        // Check if data exists and is an array, then set the response
        if (data && data.length > 0) {
          setResponse(data[0]);
        } else {
          console.error("Food item not found!");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false); // Turn off loading once data is fetched
      }
    };

    fetchResponse();
  }, [slug]); // Effect runs when slug changes
console.log("response",response)


  // Early return for loading state
  if (loading) {
    return <div>Loading...</div>; // Display loading while data is being fetched
  }

  // Early return if no response is available
  if (!response) {
    return <div>No product data found.</div>;
  }

  // Handle quantity changes
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Add item to cart
  const addToCart = () => {
    if (!response) return; // Ensure that there is product data

    const newItem = {
      ...response,
      quantity,
      total: response.price * quantity, // Calculate total price
    };

    // Retrieve current cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if the product already exists in the cart
    const existingItemIndex = savedCart.findIndex(
      (item: any) => item.slug === response.slug
    );

    if (existingItemIndex !== -1) {
      // Update existing item in the cart
      savedCart[existingItemIndex].quantity += quantity;
      savedCart[existingItemIndex].total =
        savedCart[existingItemIndex].price *
        savedCart[existingItemIndex].quantity;
    } else {
      // Add new item to cart
      savedCart.push(newItem);
    }

    // Store updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(savedCart));

    alert(`${response.name} has been added to the cart!`); // Confirmation message
  };

  const totalPrice = response.price * quantity; // Calculate total price safely

  return (
    <div>
      <HeaderTwo />
      <div className="relative">
        <Image
          src={"/images/heropic.png"}
          alt="pic"
          height={410}
          width={1920}
          className="w-full h-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-[90%] max-w-[300px] sm:max-w-[400px]">
          <h1 className="text-white font-bold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px]">
            Our Shop Detail
          </h1>
          <ul className="flex gap-2 justify-center text-xs sm:text-sm md:text-base mt-2 text-white">
            <li>
              <Link href={"./"}>Home</Link>
            </li>
            <li className="flex items-center">
              <FaAngleRight />
            </li>
            <li>
              <Link href={"/Shop"} className="text-orange-500">
                Shop details
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 flex flex-col-reverse md:flex-row md:gap-0 gap-4">
            <div className="md:flex-1 relative order-1 md:order-2 flex justify-center">
              <div className="relative w-[380px] h-[350px]">
                <Image
                  src={response.image ? urlFor(response.image).url() : ""}
                  alt={response.name}
                  width={380}
                  height={350}
                  className="object-cover rounded-lg"
                />
                <span className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded">
                  In stock
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <h1 className="text-4xl font-bold mb-4">{response.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-gray-600">{response.rating} Rating</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-700">{response.reviews} Reviews</span>
            </div>
            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              ${totalPrice.toFixed(2)}
            </h2>
            <p className="text-gray-600 mb-8">{response.description}</p>

            <div className="mb-8">
              <h3 className="font-semibold mb-2">Dictum/cursus/Risus</h3>
              <div className="flex items-center gap-4">
                <div className="flex border rounded">
                  <button
                    onClick={decreaseQuantity}
                    className="px-4 py-2 border-r hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-6 py-2">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="px-4 py-2 border-l hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={addToCart}
                  className="bg-orange-500 text-white px-8 py-2 rounded hover:bg-orange-600 transition-colors"
                >
                  Add to cart
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500">
                <FaHeart />
                Add to Wishlist
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500">
                <FaExchangeAlt />
                Compare
              </button>
            </div>

            <div className="border-t pt-6">
              <p className="mb-2">
                <span className="font-semibold">Category:</span>{" "}
                <span className="text-gray-600">{response.category}</span>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Tag:</span>{" "}
                <span className="text-gray-600">Our Shop</span>
              </p>

              <div className="flex items-center gap-2">
                <span className="font-semibold">Share:</span>
                <div className="flex gap-2">
                  <Link href="#" className="text-gray-600 hover:text-orange-500">
                    <FaFacebook />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-orange-500">
                    <FaTwitter />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-orange-500">
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
