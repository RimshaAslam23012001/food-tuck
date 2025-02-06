"use client"; 
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
    city: "",
    zipCode: "",
  });
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setProducts(JSON.parse(savedCart));
    }
  }, []);

  const cartSubtotal = products.reduce(
    (sum, product) => sum + (product.price * product.quantity || 0),
    0
  );

  const shippingCharge = 0; // Set this to your shipping charge if needed
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
    // Proceed with the order submission without involving schema or Sanity
    // Here, you can handle the order creation locally or send it to an external API.

    console.log("Order details:", {
      shippingDetails,
      products,
      totalAmount,
    });

    setOrderSuccess(true);
    localStorage.removeItem("cart"); // Clear cart after placing the order
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
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-[90%] max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
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

      <div className="container mx-auto px-4 py-8 sm:py-12 my-[60px] sm:my-[120px]">
        <div className="grid gap-8 lg:grid-cols-2 sm:grid-cols-1">
          {/* Left Column - Forms */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={shippingDetails.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={shippingDetails.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={shippingDetails.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={shippingDetails.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={shippingDetails.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Zip code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={shippingDetails.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address1"
                    name="address1"
                    value={shippingDetails.address1}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 pt-4">
              <Link href={"/Cart"}>
              <button className="py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-full sm:w-auto h-12 px-3">
                Back to cart
              </button>
              </Link>

              <button
                className="w-full sm:w-auto mt-4 sm:mt-0 bg-orange-500 text-white px-6 py-3 rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                onClick={handleCheckoutSubmit}
              >
                Proceed to Shipping
              </button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="border rounded-lg shadow-md p-4 overflow-x-auto">
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
                        ${((product.price || 0) * (product.quantity || 0)).toFixed(2)}
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
