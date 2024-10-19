import React from 'react'
import book1 from '../assets/book1.jpg'
import book2 from '../assets/book2.jpg'
import book3 from '../assets/book3.jpg'
import book4 from '../assets/book4.jpg'
import book5 from '../assets/book5.jpg'
import book6 from '../assets/book6.jpg'
import book7 from '../assets/book7.jpg'
import book8 from '../assets/book8.jpg'
import book9 from '../assets/book9.jpg'
import book10 from '../assets/book10.jpg'
import book11 from '../assets/book11.jpg'
import book12 from '../assets/book12.jpg'
import book13 from '../assets/book13.jpg'
import book14 from '../assets/book14.jpg'
import book15 from '../assets/book15.jpg'

import { useState } from 'react'; 
import Toast from '../components/toast';
import { useCart } from '../pages/CartContext';
import { h1 } from 'framer-motion/client'
import { Link } from 'react-router-dom';


const BooksForCartGrid = ({ title, author, price, onAddToCart }) => {

   

    const books=[
        {
           id:1,
           name:'The secret Garden',
           price:1090,
           image:book1,
           Author:'France Hodgson',
           slug:'book1-auth1'
        },
      
      {
           id:2,
           name:'The Time Machine',
           price:720,
           image:book2,
           Author:'H.G Wells',
           slug:'book2-auth2'
        },
        {
          id:3,
          name:'Ghosts of Silent Hills',
          price:780,
          image:book3,
          Author:'Anita Krishan',
          slug:'book3-auth3'
       },
       {
        id:4,
        name:'Blue Umbrella',
        price:700,
        image:book4,
        Author:'Ruskin Bond',
        slug:'book4-auth4'
      },
      {
        id:5,
        name:'Magic Of Lost Temple',
        price:250,
        image:book5,
        Author:'Sudha Murthy',
        slug:'book5-auth5'
      },
      {
        id:6,
        name:'The Great Gatsby',
        price:800,
        image:book6,
        Author:'F. Scott FitzGerald',
        slug:'book6-auth6'
      },
      {
        id:7,
        name:'The Kalki Trilogy',
        price:1290,
        image:book7,
        Author:'Kelvin Missal',
        slug:'book7-auth7'
      },
      {
        id:8,
        name:'Far From Madding Crowd',
        price:950,
        image:book8,
        Author:'Thomas Hardy',
        slug:'book8-auth8'
      },
      {
        id:9,
        name:'    Railway Children',
        price:890,
        image:book9,
        Author:'E . Nesbit',
        slug:'book9-auth9'
      },
      {
        id:10,
        name:'The Prince',
        price:1000,
        image:book10,
        Author:'Nicollas Machiavelli',
        slug:'book10-auth10'
      },
      {
        id:11,
        name:'As You Like It',
        price:990,
        image:book11,
        Author:'William Shakespeare',
        slug:'book10-auth10'
      },
      {
        id:12,
        name:'One Day Life Will Change',
        price:690,
        image:book12,
        Author:'Saranya Umakanthan',
        slug:'book10-auth10'
      }
,
{
    id:13,
    name:'As a Man Thinketh',
    price:700,
    image:book13,
    Author:'James Allen',
    slug:'book10-auth10'
  },
  {
    id:14,
    name:'The Prophet',
    price:1090,
    image:book14,
    Author:'Kahlil Gibran',
    slug:'book10-auth10'
  },
  {
    id:15,
    name:'Frankenstein',
    price:990,
    image:book15,
    Author:'Mary Shelley',
    slug:'book10-auth10'
  }
      ]  
    

      const { addToCart } = useCart();
  

      const [toastMessage, setToastMessage] = useState('');




      const onAddTomyCart = (bookName) => {
      
      addToCart(bookName);


           //toast msg 
          setToastMessage(`Added "${bookName.name}" to cart ✅ !`);
  
          setTimeout(() => {
              setToastMessage('');
          }, 3000);
      };
  
     
       
    








  return (
<div>

    <h1 className=' mt-10 text-3xl text-center text-violet-900 font-semibold h-10 '>Recommended For You</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-14 p-3  '>
    
   {
      books.map((item,index)=>{return(
        <div className="border w-full p-4 bg-violet-200 rounded-lg shadow-md mt-10 flex flex-col items-center">
        <img  src={item.image} className="w-53 h-48 rounded-lg mt-47 ml-10 transition-transform duration-200 hover:scale-150" ></img>
      
      <div className=''> 
         <h2 className="text-xl font-bold text-center">{item.name}</h2>
        <p className="text-violet-900 font-semibold text-center">{item.Author}</p>
        <p className="text-lg font-bold text-center">Rs{item.price}/-</p>
        <button 
            onClick={()=>onAddTomyCart(item)} 
            className="mt-2 bg-green-500 text-white py-1 px-3 rounded  ml-10 transition-transform duration-200 hover:scale-110 hover:bg-green-600"
        >
            Add to Cart
        </button>
    </div>
    </div>
      )})
   } 
   

   {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage('')} />}
  

  <div className='w-screen mt-10 h-40 bg-white-900 bg-zinc-100  text-center flex flex-col space-y-4'>

<p className='mt-5 font-semibold'>See Personalized Recommendations</p>
<div ><button className='bg-yellow-300 w-58 h-10 px-4 rounded  '>Sign In</button></div>
<p><Link to="/" className="hover:text-blue-400">Back To Top</Link></p>

  </div>

</div>
</div>
  )
}

export default BooksForCartGrid





