import React, { useEffect, useState } from "react";
import ReactShimmer from "./ReactShimmer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useRestmenu from "../utils/useRestmenu";




const Restaurantmenu = () => {
  const {resID}=useParams();
  const Restmenu=useRestmenu(resID)


  if (Restmenu === null) return <ReactShimmer />; // Show shimmer or loading state while fetching

  const name = Restmenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
  console.log("Name:",name);
  const{avgRating,cuisines,city}=Restmenu.data.cards[2].card.card.info;


  return (
    <div>
      <h1>Restaurant Menu</h1>
      <h1>{city,avgRating}</h1>
      <ul>
        {name.map((item,index)=>(
          <li key={index}>{item.card.info.name}</li>
        ))}
  
   
      </ul>
    </div>
  );
};

export default Restaurantmenu;
