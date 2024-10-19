import React from 'react';
import { useCart } from '../pages/CartContext';

const MyCart = () => {
    const { cartItems, removeFromCart } = useCart();

    return (
       
          
           <div className=' w-screen h-screen'>
           
            <h1 className=' p-5 text-center font-bold text-7xl '>My Cart🛒</h1>
           
            {cartItems.length === 0 ? (
                <p className='p-20'>Your cart is empty 😥</p>
            ) : (
                <ul className=' w-screen h-screen  p-20 '>
                    {cartItems.map(item => (
                       
                        <li key={item.id} className='mt-5 ml-10 rounded-xl bg-violet-300 p-10 text-center '>
                         <div className='flex'>
                           <img  src={item.image} className="w-53 h-48 rounded-lg mt-47 ml-10 transition-transform duration-200 hover:scale-110" ></img>
                           
                            <div className="mt-10 ml-20 font-semibold">
                            <h2 className='font-semibold'>BOOK : {item.name}</h2>
                            <p className='font-semibold text-center '>COST PRICE : Rs {item.price}/-</p>
                            <p className='font-semibold'>AUTHOR: {item.Author}</p>
                            <br/>
                            <button onClick={() => removeFromCart(item.id)} className='bg-red-500 text-white px-2 py-1 rounded'>Remove</button>
                            </div>
                        </div>
                        
                        </li>
                    ))}
                </ul>
            )}
            </div>



       
    );
};

export default MyCart;



