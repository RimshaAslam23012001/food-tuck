'use client';
import HeaderTwo from "@/components/Header-to";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaAngleRight, FaTimes } from "react-icons/fa";

const Cart = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setProducts(JSON.parse(savedCart));
    }
  }, []);

  const updateQuantity = (index: number, quantity: number) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = quantity;
    updatedProducts[index].total = updatedProducts[index].price * quantity;
    setProducts(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts)); // Save to localStorage
  };

  const removeItem = (index: number) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts)); // Save to localStorage
  };

  const cartSubtotal = products.reduce((sum, product) => sum + product.total, 0);
  const shippingCharge = 0;
  const totalAmount = cartSubtotal + shippingCharge;

  return (
    <div className="bg-gray-50 min-h-screen">
      <HeaderTwo />

      {/* Hero Image */}
      <div className="relative">
        <Image
          src={"/images/heropic.png"}
          alt="Hero Image"
          height={410}
          width={1920}
          className="w-full h-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-[90%] max-w-[300px] sm:max-w-[400px]">
          <h1 className="text-white font-bold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px]">
            Shopping Cart
          </h1>
          <ul className="flex gap-2 justify-center text-xs sm:text-sm md:text-base mt-2 text-white">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li className="flex items-center">
              <FaAngleRight />
            </li>
            <li>
              <Link href={"/Cart"} className="text-orange-500">
                Shopping Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Cart Section */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="hidden md:block">
          <div className="border rounded-lg shadow-md bg-white p-4 sm:p-6 lg:p-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b text-sm sm:text-base">
                  <th className="py-2 px-4">Product</th>
                  <th className="py-2 px-4">Price</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Total</th>
                  <th className="py-2 px-4">Remove</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index} className="border-b text-sm sm:text-base">
                    <td className="py-2 px-4 flex items-center">
                      <span>{product.name}</span>
                    </td>
                    <td className="py-2 px-4">${product.price.toFixed(2)}</td>
                    <td className="py-2 px-4 flex items-center space-x-2">
                      <button
                        className="px-2 py-1 border rounded"
                        onClick={() => updateQuantity(index, Math.max(1, product.quantity - 1))}
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        className="px-2 py-1 border rounded"
                        onClick={() => updateQuantity(index, product.quantity + 1)}
                      >
                        +
                      </button>
                    </td>
                    <td className="py-2 px-4">${product.total.toFixed(2)}</td>
                    <td className="py-2 px-4 text-red-400 cursor-pointer" onClick={() => removeItem(index)}>
                      <FaTimes />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Coupon and Summary Section */}
        <div className="mt-6 flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex-1 lg:pr-4">
            <h3 className="text-lg font-bold mb-2">Coupon Code</h3>
            <textarea
              className="w-full border rounded p-2 mb-4"
              placeholder="Enter coupon code"
            ></textarea>
            <button className="bg-orange-500 text-white px-4 py-2 rounded w-full lg:w-auto">
              Apply
            </button>
          </div>
          <div className="flex-1 lg:w-1/3">
            <h3 className="text-lg font-bold mb-2">Total Bill</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Cart Subtotal:</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Charge:</span>
                <span>${shippingCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total Amount:</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>
            <Link href={"/Check"}>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded w-full">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
