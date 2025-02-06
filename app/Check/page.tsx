"use client";
import { useState, useEffect } from "react";
import HeaderTwo from "@/components/Header-to";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { client } from "@/sanity/lib/client"; // Ensure this is the correct path

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
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address1: false,
    city: false,
    zipCode: false,
  });

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

  const shippingCharge = 0;
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

  const validateForm = () => {
    const errors = {
      firstName: !shippingDetails.firstName,
      lastName: !shippingDetails.lastName,
      email: !shippingDetails.email || !/\S+@\S+\.\S+/.test(shippingDetails.email),
      phone: !shippingDetails.phone || !/^\d{10}$/.test(shippingDetails.phone),
      address1: !shippingDetails.address1,
      city: !shippingDetails.city,
      zipCode: !shippingDetails.zipCode,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const submitOrderToSanity = async (order: any) => {
    try {
      const response = await client.create({
        _type: 'order',
        firstName: order.firstName,
        lastName: order.lastName,
        email: order.email,
        phone: order.phone,
        address: order.address,
        city: order.city,
        zipCode: order.zipCode,
        orderItems: order.orderItems,
        total: order.total,
        status: order.status,
      });
      console.log("Order created successfully:", response);
      setOrderSuccess(true);
    } catch (error) {
      console.error("Error creating order:", error);
      alert("There was an issue placing your order. Please try again.");
    }
  };

  const handleCheckoutSubmit = () => {
    if (validateForm()) {
      const order = {
        firstName: shippingDetails.firstName,
        lastName: shippingDetails.lastName,
        email: shippingDetails.email,
        phone: shippingDetails.phone,
        address: shippingDetails.address1,
        city: shippingDetails.city,
        zipcode: shippingDetails.zipCode,
        orderItems: products.map((product) => ({
          _type: 'reference',
          _ref: product.id,
        })),
        total: totalAmount,
        status: 'pending',
      };

      submitOrderToSanity(order);

      localStorage.removeItem("cart");

      setShippingDetails({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address1: "",
        city: "",
        zipCode: "",
      });
    } else {
      alert("Please fill out all fields correctly.");
    }
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
                    {formErrors.firstName && (
                      <p className="text-red-500 text-sm">First name is required</p>
                    )}
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
                    {formErrors.lastName && (
                      <p className="text-red-500 text-sm">Last name is required</p>
                    )}
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
                    {formErrors.email && (
                      <p className="text-red-500 text-sm">
                        Please enter a valid email
                      </p>
                    )}
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
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm">
                        Phone number should be 11 digits
                      </p>
                    )}
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
                    {formErrors.city && (
                      <p className="text-red-500 text-sm">City is required</p>
                    )}
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
                    {formErrors.zipCode && (
                      <p className="text-red-500 text-sm">Zip code is required</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address1"
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
                  {formErrors.address1 && (
                    <p className="text-red-500 text-sm">Address is required</p>
                  )}
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
              {orderSuccess && <p className="text-green-500 mt-4">Order placed successfully!</p>}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="border rounded-lg p-4">
              <div className="space-y-2">
                {products.map((product) => (
                  <div key={product.id} className="flex justify-between">
                    <p className="text-sm">{product.name}</p>
                    <p className="text-sm">${product.price * product.quantity}</p>
                  </div>
                ))}
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="font-semibold">Subtotal</p>
                <p className="font-semibold">${cartSubtotal}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Shipping</p>
                <p className="font-semibold">${shippingCharge}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg font-semibold">Total</p>
                <p className="text-lg font-semibold">${totalAmount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
