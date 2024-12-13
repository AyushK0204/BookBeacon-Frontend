import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const today = new Date();
        const issuedDate = today.toLocaleDateString(); 
        const returnDate = new Date(today);
        returnDate.setDate(today.getDate() + 15); 
        const returnDay = String(returnDate.getDate()).padStart(2, '0'); 
        const returnMonth = String(returnDate.getMonth() + 1).padStart(2, '0'); 
        const returnYear = returnDate.getFullYear(); 
        const returnDateFormattedManual = `${returnDay}/${returnMonth}/${returnYear}`;
       
        setCartItems((prevItems) => [
            ...prevItems,
            { ...item, issuedDate, returnDate: returnDateFormattedManual }
        ]);
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};