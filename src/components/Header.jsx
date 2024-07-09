import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useonlinestatus from "../utils/useonlinestatus";

const Header = () => {
  const online=useonlinestatus()
  const [btn, setBtn] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  console.log("hello")

  const toggleLogin = () => {
    setBtn(!btn);
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <div className="flex justify-between">
      <div className="">
       <Link to="/"><img class="w-16" src={LOGO_URL} alt=""  /></Link> 
      </div>
      <div className="nav_item">
        <ul className="flex p-5  ">
          
      <button onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <li className="mr-4">Online Status {online?"✅": " 🛑"} </li>
    
        
          <li className="mr-4"> <Link to="/home"> Home</Link> </li>
          <li className="mr-4"> <Link to="/about"> About</Link> </li>
          <li className="mr-4"> <Link to="/contact"> contact</Link> </li>
          <li className="mr-4"> <Link to="/groccery"> Groccery</Link> </li>
          <li className="mr-4">Cart</li>
          <button onClick={toggleLogin}>{btn ? "Login" : "Logout"}</button>
          
        </ul>
        
      </div>
    </div>
  );
};

export default Header;
