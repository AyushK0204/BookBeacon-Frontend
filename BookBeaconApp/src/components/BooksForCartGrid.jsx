import React from 'react'

const BooksForCartGrid = ({ title, author, price, onAddToCart }) => {
  return (
    <div>
    <div className="border p-4 rounded-lg shadow-md mt-40">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-gray-600">Book1 {author}</p>
    <p className="text-lg font-semibold">${price}</p>
    <button 
        onClick={onAddToCart} 
        className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-blue-600"
    >
        Add to Cart
    </button>
</div>

<div className="border p-4 rounded-lg shadow-md mt-40">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-gray-600">Book2 {author}</p>
    <p className="text-lg font-semibold">${price}</p>
    <button 
        onClick={onAddToCart} 
        className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-blue-600"
    >
        Add to Cart
    </button>
</div>





<div className="border p-4 rounded-lg shadow-md mt-40">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-gray-600">Book3 {author}</p>
    <p className="text-lg font-semibold">${price}</p>
    <button 
        onClick={onAddToCart} 
        className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-blue-600"
    >
        Add to Cart
    </button>
</div>






<div className="border p-4 rounded-lg shadow-md mt-40">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-gray-600">Book4 {author}</p>
    <p className="text-lg font-semibold">${price}</p>
    <button 
        onClick={onAddToCart} 
        className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-blue-600"
    >
        Add to Cart
    </button>
</div>






<div className="border p-4 rounded-lg shadow-md mt-40">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-gray-600">Book5 {author}</p>
    <p className="text-lg font-semibold">${price}</p>
    <button 
        onClick={onAddToCart} 
        className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-blue-600"
    >
        Add to Cart
    </button>
</div>






<div className="border p-4 rounded-lg shadow-md mt-40">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-gray-600">Book6 {author}</p>
    <p className="text-lg font-semibold">${price}</p>
    <button 
        onClick={onAddToCart} 
        className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-blue-600"
    >
        Add to Cart
    </button>
</div>






</div>
  )
}

export default BooksForCartGrid





