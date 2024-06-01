import React from "react";
import { LOGO_URL } from "../utils/constants";


const Header=()=>{
    return(
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL} alt="" />
        </div>
        <div className="nav_item">
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Contact US</li>
            <li>Cart</li>
            
          </ul>
        </div>
      </div>
    )
  };

export default Header;