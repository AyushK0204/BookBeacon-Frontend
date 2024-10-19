import React from 'react'
import BooksForCartGrid from '../components/BooksForCartGrid';
import cart from '../assets/cart.png'
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';



const Issue_Book = () => {
 
  


  return (

    <main>
  
            <header className="bg-gray-800 text-white p-5 w-full fixed top-0 left-15 z-10">
            <div className="flex justify-around items-center max-w-screen-xl  px-18">
                <h1 className="text-2xl font-bold left-25">BookBeacon</h1>
                <nav>
                    <ul className="flex space-x-10 mr-10 px-8">
                 <h1 className='mr-16 ml-15'>    Redefining the Excellence of Information Technology Services Since 2005</h1>
                    
                    
                     {/* <li><a href="#bestsellers" className="hover:text-blue-400">Best Sellers</a></li> */}
                     <li><Link to="/mycart" className="hover:text-blue-400">My Cart</Link></li>
                         
                         <li><a href="#contact" className="hover:text-blue-400">Trending</a></li>

                         <img src={cart} className="w-13 h-8 rounded-lg mt-47 ml-10" ></img>
           
                    </ul>
                </nav>
            </div>
        </header>


        <div className='header-content text-center text-white mt-10 ml-10 font-semibold'>
     <h2 className='header-title text-capitalize'>Find Your Book of Choice</h2>
   <br/>
   <br/>

   <p className='header-text fs-18 fw-3 mt-40 font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio amet tempore omnis odit soluta nobis in consequuntur, aspernatur, molestias numquam eos facere reiciendis officia sequi animi dolores vel? Exercitationem, debitis!</p>
  
  
   <div className="search-form mx-auto w-1/2 p-5">
 
 <div className="search_icon">
       <BiSearch />
 </div>
       <input type="text" placeholder="     Search..."/>
</div>
     </div>





  <div className='ml-20' >
    <BooksForCartGrid/>
  </div>






 </main>
  );
}

export default Issue_Book
