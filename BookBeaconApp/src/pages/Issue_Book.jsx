import React from 'react'
import BooksForCartGrid from '../components/BooksForCartGrid';
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
                 <h1 className='mr-16 ml-15'>    Redefining the Excellence of Information Technology Services</h1>
                    
                    
                     <li><Link to="/mycart" className="hover:text-blue-400">Issued Books</Link></li>
                     <li><Link to="/help" className="hover:text-blue-400">Help</Link></li>   
                         
           
                    </ul>
                </nav>
            </div>
        </header>


        <div className='header-content text-center text-white mt-10 ml-10 font-semibold'>
     <h2 className='header-title text-capitalize'>Find Your Book of Choice</h2>
   <br/>
   <br/>

   <p className='header-text fs-18 fw-3 mt-40 font-normal text-white font-semibold'>From academic resources to leisure reading, our books page is designed to help you find exactly what you're looking for.</p>
  
  
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