[1mdiff --git a/src/components/Categories.jsx b/src/components/Categories.jsx[m
[1mindex 52bc2e2..be425e9 100644[m
[1m--- a/src/components/Categories.jsx[m
[1m+++ b/src/components/Categories.jsx[m
[36m@@ -1,42 +1,59 @@[m
[31m-import React, { useState } from 'react';[m
[31m-import { CDN_URL  } from "../utils/constants";[m
[32m+[m[32mimport React from 'react';[m
[32m+[m[32mimport { CDN_URL } from "../utils/constants";[m
 [m
[31m-const Categories = (props) => {[m
[31m-    const [isOpen, setIsOpen] = useState(false);[m
[32m+[m[32mconst Categories = ({ items, isOpen, onToggle }) => {[m
[32m+[m[32m  const catg_items = items.card.card.itemCards || [];[m
[32m+[m[32m  const catg_names = (catg_items[0] && catg_items[0].card.info.name) || 'Unnamed Category';[m
 [m
[31m-    const toggleAccordion = () => {[m
[31m-        setIsOpen(!isOpen);[m
[31m-    };[m
[32m+[m[32m  // Helper function to truncate text[m
[32m+[m[32m  const truncateText = (text, maxWords) => {[m
[32m+[m[32m    if (!text) return ''; // Handle undefined or null text[m
[32m+[m[32m    const words = text.split(/\s+/); // Split by whitespace[m
[32m+[m[32m    const truncatedWords = words.slice(0, maxWords); // Slice the first `maxWords` words[m
[32m+[m[32m    return truncatedWords.join(' '); // Join back into a string[m
[32m+[m[32m  };[m
 [m
[31m-    const catg_items = props.items.card.card.itemCards;[m
[31m-    const catg_names = props.items.card.card.itemCards[0].card.info.name;[m
[31m-[m
[31m-    return ([m
[31m-        <div className="relative mb-3 w-4/6 rounded border-2 border-black-600">[m
[31m-            <h6 className="mb-0">[m
[31m-                <button[m
[31m-                    className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-900 text-slate-700 rounded-t-1 group text-dark-500"[m
[31m-                    onClick={toggleAccordion}[m
[31m-                ><div> [m
[31m-                    <span>{catg_names}</span></div>[m
[31m-                    <i className={`absolute right-0 pt-1 text-xs fa ${isOpen ? 'fa-minus' : 'fa-plus'} ${isOpen ? 'opacity-100' : 'opacity-70'}`}>{isOpen? "👉" : "👇"}</i>[m
[31m-                </button>[m
[31m-            </h6>[m
[31m-            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>[m
[31m-                <ul>[m
[31m-                    {catg_items.map((item, index) => ([m
[31m-                        <li key={index}>[m
[31m-                         <div className='flex flex-row justify-between  items-center '> {item.card.info.name}[m
[31m-                          <img className='max-w-24' src={CDN_URL + item.card.info.imageId} alt="Resource Image" />[m
[31m-                          </div> </li>[m
[31m-                    [m
[31m-                     [m
[31m-                     [m
[31m-                    ))}[m
[31m-                </ul>[m
[32m+[m[32m  return ([m
[32m+[m[32m    <div className="relative mb-3 w-4/6 rounded border-2 border-black-600">[m
[32m+[m[32m      <h6 className="mb-0">[m
[32m+[m[32m        <button[m
[32m+[m[32m          className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-900 text-slate-700 rounded-t-1 group text-dark-500"[m
[32m+[m[32m          onClick={onToggle}[m
[32m+[m[32m        >[m
[32m+[m[32m          <div>[m
[32m+[m[32m            <span>{catg_names}</span>[m
[32m+[m[32m          </div>[m
[32m+[m[32m          <i[m
[32m+[m[32m            className={`absolute right-0 pt-1 text-xs fa ${isOpen ? 'fa-minus' : 'fa-plus'} ${isOpen ? 'opacity-100' : 'opacity-70'}`}[m
[32m+[m[32m          >[m
[32m+[m[32m            {isOpen ? "👉" : "👇"}[m
[32m+[m[32m          </i>[m
[32m+[m[32m        </button>[m
[32m+[m[32m      </h6>[m
[32m+[m[32m      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>[m
[32m+[m[32m        {catg_items.map((item, index) => {[m
[32m+[m[32m          const { card } = item;[m
[32m+[m[32m          const info = card && card.info;[m
[32m+[m[32m          return ([m
[32m+[m[32m            <div className='mt-1 border-2 rounded-lg bg-stone-100 w-full text-left' key={index}>[m
[32m+[m[32m              <div className='flex flex-row justify-between items-center ml-2'>[m
[32m+[m[32m                <div className='flex flex-col grid justify-items-start w-full max-w-70'>[m
[32m+[m[32m                  <h2 className='font-semibold'>{info?.name || 'Unnamed Item'}</h2>[m
[32m+[m[32m                  <h5 className='text-sm'>{truncateText(info?.description, 20) || 'No description available'}</h5>[m
[32m+[m[32m                </div>[m
[32m+[m[32m                <img[m
[32m+[m[32m                  className='max-w-40 p-4 rounded-md'[m
[32m+[m[32m                  src={CDN_URL + (info?.imageId || 'default-image-id.jpg')}[m
[32m+[m[32m                  alt={info?.name || 'Resource Image'}[m
[32m+[m[32m                />[m
[32m+[m[32m              </div>[m
             </div>[m
[31m-        </div>[m
[31m-    );[m
[32m+[m[32m          );[m
[32m+[m[32m        })}[m
[32m+[m[32m      </div>[m
[32m+[m[32m    </div>[m
[32m+[m[32m  );[m
 };[m
 [m
 export default Categories;[m
[41m+[m
[1mdiff --git a/src/components/Restaurantcard.jsx b/src/components/Restaurantcard.jsx[m
[1mindex f754ded..5de2f03 100644[m
[1m--- a/src/components/Restaurantcard.jsx[m
[1m+++ b/src/components/Restaurantcard.jsx[m
[36m@@ -2,6 +2,7 @@[m [mimport React from "react";[m
 import { CDN_URL,MENU_API  } from "../utils/constants";[m
 [m
 const RestaurantCard=(props)=>{[m
[32m+[m
   console.log(props)[m
   const{name,avgRating,cuisines,locality}=props.resobj.info[m
 [m
[1mdiff --git a/src/components/Restaurantmenu.jsx b/src/components/Restaurantmenu.jsx[m
[1mindex 5b88ab8..3fe635f 100644[m
[1m--- a/src/components/Restaurantmenu.jsx[m
[1m+++ b/src/components/Restaurantmenu.jsx[m
[36m@@ -9,24 +9,22 @@[m [mconst Restaurantmenu = () => {[m
   const Restmenu = useRestmenu(resID);[m
 [m
   const [btnOn, setBtnOn] = useState(false);[m
[31m- [m
[32m+[m[32m  const [openAccordionIndex, setOpenAccordionIndex] = useState(null); // State to track the open accordion index[m
 [m
   const btnHandler = () => {[m
     setBtnOn(!btnOn); // Toggle btnOn state between true and false[m
   };[m
 [m
[32m+[m[32m  const toggleAccordion = (index) => {[m
[32m+[m[32m    setOpenAccordionIndex(openAccordionIndex === index ? null : index);[m
[32m+[m[32m  };[m
[32m+[m
   if (Restmenu === null) return <ReactShimmer />; // Show shimmer or loading state while fetching[m
 [m
   const name = Restmenu.data.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[1]?.card.card.itemCards || [];[m
[31m-  const namez = Restmenu.data.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")[m
[31m-  console.log(namez,"fff")[m
[32m+[m[32m  const namez = Restmenu.data.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");[m
[32m+[m
   const { city } = Restmenu.data.cards[2]?.card.card.info || {};[m
[31m-  // const [visibleItems, setVisibleItems] = useState(namez.map(() => false));[m
[31m-  // const btnHandler2 = (index) => {[m
[31m-  //   const newVisibleItems = [...visibleItems];[m
[31m-  //   newVisibleItems[index] = !newVisibleItems[index];[m
[31m-  //   setVisibleItems(newVisibleItems);[m
[31m-  // };[m
 [m
   return ([m
     <div className="flex flex-col items-center">[m
[36m@@ -54,40 +52,15 @@[m [mconst Restaurantmenu = () => {[m
         <div className="mt-4 text-gray-600">Click the button above to show dish names.</div>[m
       )}[m
 [m
[31m-      {/* categores */}[m
[31m-      {namez.map((item,index)=>([m
[31m-        <Categories key={index} items={item}/>[m
[31m-[m
[32m+[m[32m      {/* Categories */}[m
[32m+[m[32m      {namez.map((item, index) => ([m
[32m+[m[32m        <Categories[m
[32m+[m[32m          key={index}[m
[32m+[m[32m          items={item}[m
[32m+[m[32m          isOpen={openAccordionIndex === index  } // Determine if this accordion is open[m
[32m+[m[32m          onToggle={() => toggleAccordion(index)} // Handle toggle action[m
[32m+[m[32m        />[m
       ))}[m
[31m-[m
[31m-{/* [m
[31m-{Restmenu.map((item, index) => ([m
[31m-        <div key={index}>[m
[31m-          {/* Button to toggle visibility */}[m
[31m-          {/* <button onClick={() => btnHandler(index)}>[m
[31m-            {visibleItems[index] ? 'Hide ' : 'Show '} {item.name}[m
[31m-          </button>[m
[31m-          {/* Render the item only if it should be visible */}[m
[31m-          {/* {visibleItems[index] && ([m
[31m-            <div>[m
[31m-              {/* Render item details here */}[m
[31m-              {/* <p>{item.name} - {item.description}</p> */}[m
[31m-              {/* Add more details as needed */}[m
[31m-            {/* </div> */}[m
[31m-          {/* )}   */}[m
[31m-[m
[31m-      {/* Example of rendering categories */}[m
[31m-      {/* {namez.map((category, idx) => ([m
[31m-        <div key={idx}>[m
[31m-          <h2>{category.title}</h2>[m
[31m-          <ul>[m
[31m-            {category.itemCards.map((item, index) => ([m
[31m-              <li key={index}>{item.card.info.name}</li>[m
[31m-            ))}[m
[31m-          </ul>[m
[31m-        </div>[m
[31m-      ))} */}[m
[31m-[m
     </div>[m
   );[m
 };[m
