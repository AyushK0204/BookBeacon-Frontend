import React from 'react';
import { useParams } from 'react-router-dom';
import { booklist } from '../index.jsx';

const BookDetails = () => {
  const { id } = useParams();  
  const book = booklist.find((b) => b.id === parseInt(id));  

  if (!book) {
    return <div>Book not found!</div>;
  }

  const { name, price, image, category, Author,desc} = book;

  return (
    <div className="max-w-4xl mx-auto p-4 ml-48 mt-20">
      <div className="flex flex-col md:flex-row gap-8">
        <img className="w-1/2 h-1/2 rounded-lg" src={image} alt="Book cover" />
        <div className="flex flex-col justify-between">
          <h1 className="text-4xl font-bold mb-4 text-center">{name}</h1>
          <p className="text-xl mb-2"><strong>Price: </strong>{price} /-</p>
          <p className="text-xl mb-4"><strong>Author: </strong>{Author}</p>
          <p className="text-xl  mb-4"><strong>Description: </strong> {desc}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;