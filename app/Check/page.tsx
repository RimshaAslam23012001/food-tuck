"use client"
import { useState, useEffect } from "react";
import HeaderTwo from "@/components/Header-to";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const CheckoutPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    country: "",
    zipCode: "",
  });

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setProducts(JSON.parse(savedCart));
    }
  }, []);

  // Calculate the subtotal by summing the total of each product (price * quantity)
  const cartSubtotal = products.reduce(
    (sum, product) => sum + (product.price * product.quantity || 0),
    0
  );

  const shippingCharge = 0; // You can modify this if you have actual shipping charges
  const totalAmount = cartSubtotal + shippingCharge;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setShippingDetails({
      ...shippingDetails,
      [name]: value,
    });
  };

  const handleCheckoutSubmit = () => {
    // Handle form submission for checkout here
    console.log(shippingDetails);
    // You can proceed to integrate payment or order API here
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <HeaderTwo />

      {/* Hero Image */}
      <div className="relative">
        <Image
          src={"/images/heropic.png"}
          alt="Checkout Hero Image"
          height={410}
          width={1920}
          className="w-full h-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-[90%] max-w-[300px] sm:max-w-[400px]">
          <h1 className="text-white font-bold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px]">
            Check Out
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
                Check out
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container max-w-7xl mt-20 mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Forms */}
          <div className="space-y-6">
            {/* Shipping Form... */}
            <div>
              <button
                className="w-full mt-4 bg-orange-500 text-white px-6 py-3 rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                onClick={handleCheckoutSubmit}
              >
                Proceed to Shipping
              </button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="border rounded-lg shadow-md p-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b text-sm sm:text-base">
                    <th className="py-2 px-4">Product</th>
                    <th className="py-2 px-4">Price</th>
                    <th className="py-2 px-4">Quantity</th>
                    <th className="py-2 px-4">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index} className="border-b text-sm sm:text-base">
                      <td className="py-2 px-4">{product.name}</td>
                      <td className="py-2 px-4">${product.price.toFixed(2)}</td>
                      <td className="py-2 px-4">{product.quantity}</td>
                      <td className="py-2 px-4">
                        ${(
                          (product.price || 0) * (product.quantity || 0)
                        ).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Total Amount */}
              <div className="mt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-medium">Subtotal</span>
                  <span className="text-lg">${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-lg font-medium">Shipping</span>
                  <span className="text-lg">${shippingCharge.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-4 text-xl font-bold">
                  <span>Total Amount</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
