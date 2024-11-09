import React, { useState } from 'react';
import Slider from '../components/Slider'
import Banner from '../assets/bannerlib.jpg'
import Banner2 from '../assets/bannerlib2.jpg'
import Banner3 from '../assets/libimg.jpg'
import logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Home = () => {
 


  return (
   

<div className='w-screen h-screen  items-center justify-center'>


<div className="w-full h-20 bg-purple-950 flex items-center justify-center">
  <img src={logo} className="w-20 h-20 rounded-full mr-2" />
  <p className="text-5xl font-extrabold text-white">
    Book Beacon
  </p>
</div>

<p className='headpara text-8xl p-48 text-center font-bold font-serif'>
  Our Library Management System is Just What Your Library Needs
</p>



<div className="w-screen h-96 flex items-center justify-center ml-10 mt-10">
            <Slider />
</div>
<p className=' text-6xl text-center font-semi ml-20  mt-10 font-serif  text-violet-900 '>Tailored for the education , public and private sector</p>

<div className="flex justify-center items-center w-screen h-4/5  gap-2">
  <div className="ml-10">
  <p className=' text-4xl text-center font-semi ml-20  mt-10 font-serif  text-pink-800  hover: transform hover:scale-105 transition-all duration-300'>Innovative library management system solution for managing all your library resources</p>
 <br/> <br/> <p className='text-2xl ml-10 text-pink-700  '>Built from the ground to be entirely accessible through a web browser. It is a completely customizable library management system as per the requirement.</p>
  </div>

 <img  src={Banner} className="w-3/5 h-4/5 rounded-lg mt-47 transition-transform transform hover:translate-y-2 hover:-translate-y-2" ></img>
 <img  src={Banner2} className="w-53 h-3/5 rounded-lg mt-44  transition-transform duration-200 hover:scale-110" ></img>

</div>


<div className='flex'>
<div className="text-center pl-20 mt-28">
  <h1 className='font-bold text-6xl text-violet-800'>Main Features</h1>
  <br/>
  <p className='font-semi mt-10 text-2xl text-violet-900 text-left'>Our Library Management System offers centralized book management, allowing users to easily browse, search, view details, and issue books through a simple, intuitive interface. The design is user-friendly and navigation that creates a smooth and welcoming experience. Advanced filtering options allow users to sort books by categories like genre and author. The system is built to be responsive, ensuring seamless functionality across various devices and screen sizes. The modern aesthetic, with a bold color scheme and sleek UI elements, provides an attractive and professional look to enhance the overall user experience.</p>
</div> 
  <img  src={Banner3} className="w-53 h-3/5 rounded-lg mt-28  transition-transform duration-200 hover:scale-110" ></img>
</div>




<div className="w-full h-28 bg-purple-800 text-white flex flex-col items-center justify-center">
      <div className="flex space-x-6 mb-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook size={24} className="hover:text-blue-500" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={24} className="hover:text-pink-500" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={24} className="hover:text-blue-400" />
        </a>
      </div>
      
      <p className="text-xl mb-1">Contact us:982838282 | bookbeacon@gmail.com</p>

      <p className="text-xl">&copy; 2024 All rights reserved.</p>
    </div>



</div>
   
        
        


  );
};

export default Home;
