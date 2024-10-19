import { option } from "framer-motion/client";
import { filterOptions } from "../index.jsx";
import React, { Fragment } from 'react';




import { LuSeparatorHorizontal } from "react-icons/lu";
import { RiPageSeparator, RiSeparator } from "react-icons/ri";
function ProductFilter()
{
    return(
        <div className="bg-background rounded-lg shadow-sm ml-10">

            <div className="p-4 border-b">
                <h2 className="text-lg font-extrabold">Filters</h2>
            </div>


            <div className="p-4 space-y-4">
                {
                    Object.keys(filterOptions).map(KeyItem=>
                        <Fragment>
                            <div>
                                <h3 className="text-base font-bold">{KeyItem}</h3>
                                <div className="grid gap-2 mt-2">
                                    {
                                        filterOptions[KeyItem].map(option=>
                                        <label className="flex font-medium items-center gap-2 font-normal">
                                        <input type="checkbox" className="form-checkbox" /> {option.label}
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