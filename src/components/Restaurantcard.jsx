import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
  

  

    return(
      <div className="res-card" >
        <img className='res-logo' src={CDN_URL+props.resobj.info.cloudinaryImageId }alt="res name" />
        <h3>{props.resobj.info.name}</h3>
        <h4>Rating: {props.resobj.info.avgRating}</h4>
        <h4>Cuisine: {props.resobj.info.cuisines.slice(0,4).join(', ')}</h4>
        
      </div>
    )
  };
export default RestaurantCard;