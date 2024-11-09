import React from 'react';
import { useCart } from '../pages/CartContext';
import { useUser } from '../pages/UserContext';

const Return = () => {
    const { cartItems, removeFromCart } = useCart(); 
    const calculateReturnDate = (issuedDate) => {
        const [day, month, year] = issuedDate.split("/");
        const issuedDateObj = new Date(year, month - 1, day); 
        issuedDateObj.setDate(issuedDateObj.getDate() + 15);
        const returnDay = String(issuedDateObj.getDate()).padStart(2, '0'); 
        const returnMonth = String(issuedDateObj.getMonth() + 1).padStart(2, '0'); 
        const returnYear = issuedDateObj.getFullYear(); 
        return `${returnDay}/${returnMonth}/${returnYear}`;
    };
    const { user } = useUser();
    return (
        <div className='w-screen h-screen'>
            <h1 className='p-5 text-center font-bold text-7xl'>Books to be Returned</h1>
            <h3 className="text-center text-bold text-4xl">Welcome back, {user.name}!</h3>

            {cartItems.length === 0 ? (
                <p className='p-20 text-xl'>You have no books to return 😥</p>
            ) : (
                <ul className='w-screen h-screen p-20'>
                    {cartItems.map(item => (
                        <li key={item.id} className='mt-5 ml-10 rounded-xl bg-violet-400 p-10 text-center'>
                            <div className='flex'>
                                <img src={item.image} className="w-53 h-48 rounded-lg mt-47 ml-10 transition-transform duration-200 hover:scale-110" alt={item.name} />
                                <div className="mt-10 ml-20 font-semibold">
                                    <h2 className='font-bold'>BOOK: {item.name}</h2>
                                    <p className='font-bold text-center'>COST PRICE: Rs {item.price}/-</p>
                                    <p className='font-bold'>AUTHOR: {item.Author}</p>
                                    <p className='font-bold'>ISSUED DATE: {item.issuedDate}</p>
                                    <p className='font-bold'>RETURN DATE: {calculateReturnDate(item.issuedDate)}</p>
                                    <br />
                                    <button onClick={() => removeFromCart(item.id)} className='bg-red-500 text-white px-2 py-1 rounded mt-2'>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Return;