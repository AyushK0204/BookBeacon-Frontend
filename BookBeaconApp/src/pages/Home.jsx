// Home.jsx
import React, { useState } from 'react';
import './Home.css'; // Import CSS for styling
import heroimg from '../../assets/Images/heroimg.jpg'











// const images = [
//   //"https://assets.penguinrandomhouse.com/wp-content/uploads/2018/03/05105825/1200x628_instagrammable.jpg"
//   "https://www.creativ-eras.com/assets/images/library-slider-img-2.jpg"
//     ,"https://www.creativ-eras.com/assets/images/library-slider-img-3.jpg",
  
//       "https://www.creativ-eras.com/assets/images/library-slider-img-1.jpg"
// ];








const Home = () => {
 


  return (
    


       <Navbar>
        <img src={heroimg} />
        <ul>
                <li>About us</li>
        </ul>
       </Navbar>
  );
};

export default Home;

