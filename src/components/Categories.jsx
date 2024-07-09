import React, { useState } from 'react';

const Categories = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const catg_items = props.items.card.card.itemCards;
    const catg_names = props.items.card.card.itemCards[0].card.info.name;

    return (
        <div className="relative mb-3">
            <h6 className="mb-0">
                <button
                    className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-900 text-slate-700 rounded-t-1 group text-dark-500"
                    onClick={toggleAccordion}
                ><div> 
                    <span>{catg_names} ➡️ </span></div>
                    <i className={`absolute right-0 pt-1 text-xs fa ${isOpen ? 'fa-minus' : 'fa-plus'} ${isOpen ? 'opacity-100' : 'opacity-0'}`}></i>
                </button>
            </h6>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
                <ul>
                    {catg_items.map((item, index) => (
                        <li key={index}>{item.card.info.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Categories;
