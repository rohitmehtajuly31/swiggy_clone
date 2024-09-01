import React from 'react';
import { CDN_URL } from "../utils/constants";

import { useDispatch } from 'react-redux';
import cartSlice, { addItem } from './cartSlice';

const Categories = ({ items, isOpen, onToggle }) => {
  const catg_items = items.card.card.itemCards || [];
  const catg_names = (catg_items[0] && catg_items[0].card.info.name) || 'Unnamed Category';

const dispatch=useDispatch()
const handleitems=(item)=>{
  dispatch(addItem(item))
}


  // Helper function to truncate text
  const truncateText = (text, maxWords) => {
    if (!text) return ''; // Handle undefined or null text
    const words = text.split(/\s+/); // Split by whitespace
    const truncatedWords = words.slice(0, maxWords); // Slice the first `maxWords` words
    return truncatedWords.join(' '); // Join back into a string
  };
  

  return (
    <div className="relative mb-3 w-4/6 rounded border-2 border-black-600">
      <h6 className="mb-0">
        <button
          className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-900 text-slate-700 rounded-t-1 group text-dark-500"
          onClick={onToggle}
        >
          <div>
            <span>{catg_names}</span>
          </div>
          <i
            className={`absolute right-0 pt-1 text-xs fa ${isOpen ? 'fa-minus' : 'fa-plus'} ${isOpen ? 'opacity-100' : 'opacity-70'}`}
          >
            {isOpen ? "👉" : "👇"}
          </i>
        </button>
      </h6>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        {catg_items.map((item, index) => {
          const { card } = item;
          const info = card && card.info;
          return (
            <div className='mt-1 border-2 rounded-lg bg-stone-100 w-full text-left' key={index}>
              <div className='flex flex-row justify-between items-center ml-2'>
                <div className='flex flex-col grid justify-items-start w-full max-w-70'>
                  <h2 className='font-semibold'>{info?.name || 'Unnamed Item'}</h2>
                  <h5 className='text-sm'>{truncateText(info?.description, 20) || 'No description available'}</h5>
                </div>
                <div class="relative inline-block">
  <img
    class="max-w-40 p-1 rounded-xl"
    src={CDN_URL + (info?.imageId || 'default-image-id.jpg')}
    alt={info?.name || 'Resource Image'}
  />
  <button onClick={()=>handleitems(item)} class="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-400">
    Add +
  </button>
</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

