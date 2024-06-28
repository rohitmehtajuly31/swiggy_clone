import React, { useEffect, useState } from "react";
import ReactShimmer from "./ReactShimmer";
import { useParams } from "react-router-dom";
import useRestmenu from "../utils/useRestmenu";

const Restaurantmenu = () => {
  const [btnOn, setBtnOn] = useState(false); // Changed state variable to btnOn (camelCase)
  const { resID } = useParams();
  const Restmenu = useRestmenu(resID);

  const btnHandler = () => {
    setBtnOn(!btnOn); // Toggle btnOn state between true and false
  };

  if (Restmenu === null) return <ReactShimmer />; // Show shimmer or loading state while fetching

  const name = Restmenu.data.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[1]?.card.card.itemCards || [];
  const { city } = Restmenu.data.cards[2]?.card.card.info || {};

  return (
    <div className="flex flex-col items-center">
      <div className="p-5 my-4">
        <h1 className="text-2xl font-bold">Restaurant Menu</h1>
        <h1>Area {city}</h1>
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
            <div className="bg-slate-300 my-2 w-4/5 h-10 flex items-center rounded justify-center animated-div" key={index}
           >
              
              
              <li className="text-sm font-extralight text-center item-center justify-center">{item.card.info.name}</li>
            </div>
          ))}
        </ul>
      ) : (
        <div className="mt-4 text-gray-600">Click Above button.</div>
      )}
    </div>
  );
};

export default Restaurantmenu;
