import React, { useState } from "react";
import RestaurantCard from "./Restaurantcard";

import resobjj from "../utils/mockdata";

const resobj=resobjj[0].cards.slice(3,18)

  
const Body=()=>{

const[filterRestaurant, setFilterRestaurant]=useState(false);
console.log(resobj)

const handleFilterRestaurant=()=>{
  setFilterRestaurant(!filterRestaurant)

};
const filterresobj=filterRestaurant? resobj.filter((res)=>res.card.card.info.avgRating>4): resobj
console.log("sdf")
    return(
      <div className="body">
        <div className="search">Search</div>
        
      
          
              <button className="filter-btn" onClick={handleFilterRestaurant}>Top Rated Button</button>
       
       
          <div className="res-container">
          
          {filterresobj.map((resobj,index)=>(
              <RestaurantCard key={index} resobj={resobj}/>
            ))}
         
  
  
          </div>
        
      </div>
    );
  };
export default Body;