import React from "react";
import { CDN_URL,MENU_API  } from "../utils/constants";

const RestaurantCard=(props)=>{
  console.log(props)
  const{name,avgRating,cuisines,locality}=props.resobj.info

  

  

    return(
      <div className="res-card" >
        <img className='res-logo' src={CDN_URL+props.resobj.info.cloudinaryImageId }alt="res name" />
        <div className="card-text">
        <h3>{name}</h3>
        <h4>Rating: {avgRating}</h4>
        <h5>Cuisine: {cuisines.slice(0,4).join(', ')}</h5>
        <h5>locality:{locality}</h5>
  
        </div>
      </div>
    )
  };
export default RestaurantCard;