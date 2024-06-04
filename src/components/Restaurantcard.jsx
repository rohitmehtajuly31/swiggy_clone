import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
  console.log(props)

  

  

    return(
      <div className="res-card" >
        <img className='res-logo' src={CDN_URL+props.resobj.info.cloudinaryImageId }alt="res name" />
        <div className="card-text">
        <h3>{props.resobj.info.name}</h3>
        <h4>Rating: {props.resobj.info.avgRating}</h4>
        <h5>Cuisine: {props.resobj.info.cuisines.slice(0,4).join(', ')}</h5>
        </div>
      </div>
    )
  };
export default RestaurantCard;