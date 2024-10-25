import { option } from "framer-motion/client";
import { filterOptions } from "../index.jsx";
import React, { Fragment,useState } from 'react';





function ProductFilter({ onFilterChange })
{
  
    const [selectedCategories, setSelectedCategories] = useState(new Set());
    const [selectedAuthors, setSelectedAuthors] = useState(new Set());




    //for 1 category
    // const handleCheckboxChange = (categoryId) => {
    //     setSelectedCategories((prev) => {
    //       const newSelection = new Set(prev);
    //       if (newSelection.has(categoryId)) {
    //         newSelection.delete(categoryId); 
    //       } else {
    //         newSelection.add(categoryId); 
    //       }
    //       onFilterChange(Array.from(newSelection));
    //       return newSelection;
    //     });
    //   };





    

    const handleCheckboxChange = (type, id) => {
        if (type === 'category') {
            setSelectedCategories(prev => {
                const newSelection = new Set(prev);
                if (newSelection.has(id)) {
                    newSelection.delete(id);
                } else {
                    newSelection.add(id);
                }
               
                onFilterChange(Array.from(newSelection), Array.from(selectedAuthors));
                return newSelection;
            });
        } else if (type === 'Author') {
            setSelectedAuthors(prev => {
                const newSelection = new Set(prev);
                if (newSelection.has(id)) {
                    newSelection.delete(id);
                } else {
                    newSelection.add(id);
                }
                
                onFilterChange(Array.from(selectedCategories), Array.from(newSelection));
                return newSelection;
            });
        }
    };

  
    


    return(

        





        <div className="bg-background rounded-lg shadow-sm ml-10">

            <div className="p-4 border-b">
                <h2 className="text-lg font-extrabold">Filters</h2>
            </div>


            <div className="p-4 space-y-4">
                {
                    Object.keys(filterOptions).map(KeyItem=>
                        <Fragment key={KeyItem}>
                            <div>
                                <h3 className="text-base font-bold">{KeyItem}</h3>
                                <div className="grid gap-2 mt-2">
                                    {
                                        filterOptions[KeyItem].map((option)=>
                                        <label key={option.id} className="flex font-medium items-center gap-2 font-normal">
                                        <input type="checkbox" className="form-checkbox"  onChange={() => handleCheckboxChange(KeyItem === 'category' ? 'category' : 'Author', option.id)}/> {option.label}
                                        </label>)
                                    }
                                </div>
                            </div>


                             <hr className="my-4" />

                            </Fragment>





                    )
                }
            </div>
        </div>

    );
}
export default ProductFilter;