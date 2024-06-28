import React from "react";
import { CDN_URL,MENU_API  } from "../utils/constants";

const RestaurantCard=(props)=>{
  console.log(props)
  const{name,avgRating,cuisines,locality}=props.resobj.info

  

  

    return(
      <div className="">
      <div className="bg-orange-100 rounded-lg m-4 p-4 w-[200px] " >
        <img className='w-full h-32 rounded-lg mb-2' src={CDN_URL+props.resobj.info.cloudinaryImageId }alt="res name" />
        <div className="min-h-200">
        <h4 className="text-sm font-bold mb-1 max-w-50 max-h-50 ">{name}</h4>
        <h4 className="text-xs font-bold">Rating: {avgRating}</h4>
        <h5 className="text-xs font-bold">Cuisine: {cuisines.slice(0,3).join(', ')}</h5>
        <h5 className="text-xs font-bold">locality:{locality}</h5>
  
        </div>
      </div>
      </div>
    )
  };
export default RestaurantCard;