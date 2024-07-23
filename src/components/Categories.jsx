import React, { useState } from 'react';
import { CDN_URL  } from "../utils/constants";

const Categories = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const catg_items = props.items.card.card.itemCards;
    const catg_names = props.items.card.card.itemCards[0].card.info.name;

    return (
        <div className="relative mb-3 w-4/6 rounded border-2 border-black-600">
            <h6 className="mb-0">
                <button
                    className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-900 text-slate-700 rounded-t-1 group text-dark-500"
                    onClick={toggleAccordion}
                ><div> 
                    <span>{catg_names}</span></div>
                    <i className={`absolute right-0 pt-1 text-xs fa ${isOpen ? 'fa-minus' : 'fa-plus'} ${isOpen ? 'opacity-100' : 'opacity-70'}`}>{isOpen? "👉" : "👇"}</i>
                </button>
            </h6>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
                <ul>
                    {catg_items.map((item, index) => (
                        <li key={index}>
                         <div className='flex flex-row justify-between  items-center '> {item.card.info.name}
                          <img className='max-w-24' src={CDN_URL + item.card.info.imageId} alt="Resource Image" />
                          </div> </li>
                    
                     
                     
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Categories;
