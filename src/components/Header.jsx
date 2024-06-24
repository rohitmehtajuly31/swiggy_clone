import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useonlinestatus from "../utils/useonlinestatus";

const Header = () => {
  const online=useonlinestatus()
  const [btn, setBtn] = useState(true);
  console.log("hello")

  const toggleLogin = () => {
    setBtn(!btn);
  };

  return (
    <div className="header">
      <div className="logo">
       <Link to="/"><img src={LOGO_URL} alt="" /></Link> 
      </div>
      <div className="nav_item">
        <ul>
        <li>Online Status {online?"✅": " 🛑"} </li>
        
          <li> <Link to="/home"> Home</Link> </li>
          <li> <Link to="/about"> About</Link> </li>
          <li> <Link to="/contact"> contact</Link> </li>
         
          <li>Cart</li>
        </ul>
        <button onClick={toggleLogin}>{btn ? "Login" : "Logout"}</button>
      </div>
    </div>
  );
};

export default Header;
