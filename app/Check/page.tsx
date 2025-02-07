"use client";
import { useState, useEffect } from "react";
import HeaderTwo from "@/components/Header-to";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { client } from "@/sanity/lib/client"; // Ensure this is the correct path

const CheckoutPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    city: "",
    zipCode: "",
  });
  const [orderSuccess, setOrderSuccess] = useState<null | boolean>(null);
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
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address1: !formValues.address1,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const submitOrderToSanity = async (order: any) => {
    try {
      console.log("Order being submitted to Sanity:", order);  // Log the order object
      const response = await client.create({
        _type: 'order',
        firstName: order.firstName,
        lastName: order.lastName,
        email: order.email,
        phone: order.phone,
        address: order.address,
        city: order.city,
        zipCode: order.zipCode,
        orderItems: order.orderItems,  // Ensure these are references
        total: order.total,
        status: order.status,
      });
      console.log("Order created successfully:", response);
      setOrderSuccess(true);
    } catch (error) {
      console.error("Error creating order:", error);
      setOrderSuccess(false);
    }
  };

  const handleCheckoutSubmit = () => {
    if (validateForm()) {
      const order = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        phone: formValues.phone,
        address: formValues.address1,
        city: formValues.city,
        zipCode: formValues.zipCode,
        orderItems: products.map((item, index) => ({
          _key: `item-${index}-${Date.now()}`,  // Generate a unique key for each item
          _type: 'reference',
          _ref: item.id,  // Ensure the product.id corresponds to the Sanity food document ID
        })),
        total: totalAmount,
        status: 'pending',
      };
  
      // Log to ensure structure is correct before submitting
      console.log("Order data with orderItems:", order);
  
      submitOrderToSanity(order);
  
      // Clear the cart after successful submission
      localStorage.removeItem("cart");
  
      // Reset form values after submission
      setFormValues({
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
                      value={formValues.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`}
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
                      value={formValues.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`}
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
                      value={formValues.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm">Please enter a valid email</p>
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
                      value={formValues.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`}
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm">Phone number should be 11 digits</p>
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
                      value={formValues.city}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border ${formErrors.city ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`}
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
                      value={formValues.zipCode}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border ${formErrors.zipCode ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`}
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
                    value={formValues.address1}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border ${formErrors.address1 ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`}
                  />
                  {formErrors.address1 && (
                    <p className="text-red-500 text-sm">Address is required</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 pt-4">
              <button
                type="button"
                onClick={handleCheckoutSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              >
                Place Order
              </button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="flex justify-between">
                  <span>{product.name}</span>
                  <span>
                    {product.quantity} x ${product.price}
                  </span>
                </div>
              ))}
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <span className="font-semibold">Subtotal</span>
              <span>${cartSubtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Shipping</span>
              <span>${shippingCharge}</span>
            </div>
            <div className="flex justify-between font-semibold text-xl">
              <span>Total</span>
              <span>${totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
