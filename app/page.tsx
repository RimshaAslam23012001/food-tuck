import AboutUs from '@/components/About';
import ActiveProcess from '@/components/Active';
import Blog from '@/components/Blog';
import Cheif from '@/components/Chef';
import WhyChoseUs from '@/components/Choose';
import Client from '@/components/Client';
import FoodCategory from '@/components/Food';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import RestaurantDetail from '@/components/Resturant';
import React from 'react';


function page() {
  return (
    <div className='bg-[#0D0D0DF2] w-full text-white'>
      <Header/>
      <Hero/>
      <AboutUs/>
      <FoodCategory/>
      <WhyChoseUs/>
      <RestaurantDetail/>
      <Menu/>
      <Cheif/>
      <Client/>
      <ActiveProcess/>
      <Blog/>
    </div>
  )
}

export default page