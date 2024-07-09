import React, { useState } from "react";
import ReactShimmer from "./ReactShimmer"; // Assuming this is your loading/shimmer component
import { useParams } from "react-router-dom";
import useRestmenu from "../utils/useRestmenu";
import Categories from "./Categories";

const Restaurantmenu = () => {
  const { resID } = useParams();
  const Restmenu = useRestmenu(resID);

  const [btnOn, setBtnOn] = useState(false);
 

  const btnHandler = () => {
    setBtnOn(!btnOn); // Toggle btnOn state between true and false
  };

  if (Restmenu === null) return <ReactShimmer />; // Show shimmer or loading state while fetching

  const name = Restmenu.data.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[1]?.card.card.itemCards || [];
  const namez = Restmenu.data.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(namez,"fff")
  const { city } = Restmenu.data.cards[2]?.card.card.info || {};
  // const [visibleItems, setVisibleItems] = useState(namez.map(() => false));
  // const btnHandler2 = (index) => {
  //   const newVisibleItems = [...visibleItems];
  //   newVisibleItems[index] = !newVisibleItems[index];
  //   setVisibleItems(newVisibleItems);
  // };

  return (
    <div className="flex flex-col items-center">
      <div className="p-5 my-4">
        <h1 className="text-2xl font-bold">Restaurant Menu</h1>
        <h1>Area: {city}</h1>
      </div>

      <button
        onClick={btnHandler}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {btnOn ? "Don't show dish names" : "Show dish names"}
      </button>

      {btnOn ? (
        <ul className="flex flex-col items-center justify-center">
          {name.map((item, index) => (
            <div className="bg-slate-300 my-2 w-4/5 h-10 flex items-center rounded justify-center animated-div" key={index}>
              <li className="text-sm font-extralight text-center item-center justify-center">{item.card.info.name}</li>
            </div>
          ))}
        </ul>
      ) : (
        <div className="mt-4 text-gray-600">Click the button above to show dish names.</div>
      )}

      {/* categores */}
      {namez.map((item,index)=>(
        <Categories key={index} items={item}/>

      ))}

{/* 
{Restmenu.map((item, index) => (
        <div key={index}>
          {/* Button to toggle visibility */}
          {/* <button onClick={() => btnHandler(index)}>
            {visibleItems[index] ? 'Hide ' : 'Show '} {item.name}
          </button>
          {/* Render the item only if it should be visible */}
          {/* {visibleItems[index] && (
            <div>
              {/* Render item details here */}
              {/* <p>{item.name} - {item.description}</p> */}
              {/* Add more details as needed */}
            {/* </div> */}
          {/* )}   */}

      {/* Example of rendering categories */}
      {/* {namez.map((category, idx) => (
        <div key={idx}>
          <h2>{category.title}</h2>
          <ul>
            {category.itemCards.map((item, index) => (
              <li key={index}>{item.card.info.name}</li>
            ))}
          </ul>
        </div>
      ))} */}

    </div>
  );
};

export default Restaurantmenu;
