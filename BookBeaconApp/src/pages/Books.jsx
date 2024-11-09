import React, { useState } from "react";
import { Link } from "react-router-dom";  
import ProductFilter from "../components/filter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { sortOptions } from "../index.jsx";
import { ArrowUpDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button"; 
import { booklist } from '../index.jsx';

const Books = () => {

  const [data, setData] = useState(booklist);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredAuthors, setFilteredAuthors] = useState([]);

  const handleFilterChange = (selectedCategories, selectedAuthors) => {
    setFilteredCategories(selectedCategories);
    setFilteredAuthors(selectedAuthors);
  };

  const filteredData = data.filter(book => {
    const categoryMatch = filteredCategories.length > 0
      ? filteredCategories.includes(book.category)
      : true;

    const authorMatch = filteredAuthors.length > 0
      ? filteredAuthors.includes(book.Author)
      : false;

    return categoryMatch || authorMatch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 md:p-6">
      <ProductFilter onFilterChange={handleFilterChange}/>
      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center gap-96">
          <h2 className="text-lg font-bold">All Books</h2>
          <div className="flex items-center gap-3 ml-96">
            <span className="text-muted-foreground">{filteredData.length} Products</span>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ArrowUpDownIcon className="h-4 w-4" />
                  <span>Sort by</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup>
                  {sortOptions.map((sortItem) => (
                    <DropdownMenuRadioItem key={sortItem.id}>
                      {sortItem.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="col-md-9">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {filteredData.length > 0 ? (
              filteredData.map((book) => {
                const { id, name, price, image, category, Author,desc } = book;

                return (
                  <div key={id} className="max-w-sm rounded overflow-hidden shadow-2xl bg-violet-400 text-center">
                      <img className="w-2/4 ml-24 mt-10" src={image} alt="Book cover" />

                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{name}</div>
                      <p>Price: {price} /-</p>
                      <p className="text-gray-700 text-base">{Author}</p>
                    </div>
                    <div className="px-6 py-4">
                    <Link to={`/book/${id}`}><button className="bg-violet-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        View Details
                      </button> </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center col-span-3">No books found for the selected categories 😥.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
