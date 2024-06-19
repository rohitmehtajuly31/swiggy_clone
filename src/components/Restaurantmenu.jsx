import React, { useEffect, useState } from "react";
import ReactShimmer from "./ReactShimmer";
import { Link } from "react-router-dom";


const Restaurantmenu = () => {
  const [Restmenu, setRestmenu] = useState(null); // Initialize as null for better handling

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.7049873&lng=74.24325270000001&restaurantId=234");
      const data = await response.json();
      console.log("Fetched data:", data);
      setRestmenu(data);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      // Handle errors, maybe setRestmenu(null) or show an error message
    }
  };


  if (Restmenu === null) return <ReactShimmer />; // Show shimmer or loading state while fetching

  const name = Restmenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
  console.log("Name:",name);


  return (
    <div>
      <h1>Restaurant Menu</h1>
      <ul>
        {name.map((item,index)=>(
          <li key={index}>{item.card.info.name}</li>
        ))}
  
   
      </ul>
    </div>
  );
};

export default Restaurantmenu;
