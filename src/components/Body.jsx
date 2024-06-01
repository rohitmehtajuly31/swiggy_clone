import React from "react";
import RestaurantCard from "./Restaurantcard";

import resobj from "../utils/mockdata";
  
const Body=()=>{
    return(
      <div className="body">
        <div className="search">Search</div>
          <div className="res-container">
          {resobj.map((resobj,index)=>(
              <RestaurantCard key={index} resobj={resobj}/>
            ))}
         
  
  
          </div>
        
      </div>
    );
  };
export default Body;