// Home.jsx
import React, { useState } from 'react';
import Slider from '../components/Slider'
import Banner from '../assets/bannerlib.jpg'
import Banner2 from '../assets/bannerlib2.jpg'
import Banner3 from '../assets/libimg.jpg'
const Home = () => {
 


  return (
   

<div className='w-screen h-screen  items-center justify-center'>



<div className="w-full h-20 bg-purple-950"></div>

<p className='headpara text-8xl p-48 text-center font-bold font-serif '>
Our Library Management System is Just What Your Libraries Needs
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
  <p className='font-semi mt-10 text-2xl text-violet-900 text-left'>Library management system offers a simple yet powerful solution to automate libraries. It is an internet / intranet based solution designed to enhance the total library experience through value added services and features. The software helps you manage print material like books, journals and magazines along with the non-print materials like CD, DVD, E-Journal, etc.</p>
</div> 
  <img  src={Banner3} className="w-53 h-3/5 rounded-lg mt-28  transition-transform duration-200 hover:scale-110" ></img>
</div>




<div className="w-full h-28 bg-purple-800"></div>



</div>
   
        
        


  );
};

export default Home;
