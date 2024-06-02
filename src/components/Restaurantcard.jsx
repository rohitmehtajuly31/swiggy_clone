import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
  console.log("sdff",props)
  

  

    return(
      <div className="res-card" >
        <img className='res-logo' src={CDN_URL+props.resobj.card.card.info.cloudinaryImageId }alt="res name" />
        <div className="card-text">
        <h3>{props.resobj.card.card.info.name}</h3>
        <h4>Rating: {props.resobj.card.card.info.avgRating}</h4>
        <h5>Cuisine: {props.resobj.card.card.info.cuisines.slice(0,4).join(', ')}</h5>
        </div>
      </div>
    )
  };
export default RestaurantCard;