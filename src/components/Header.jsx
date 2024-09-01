import React, { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useonlinestatus from "../utils/useonlinestatus";
import Context from "./Context";
import Addbtn from "./Addbtn";
 //react redux
 import { useSelector } from "react-redux"; //to show redux item


 


const Header = () => {
  const online=useonlinestatus()
  const [btn, setBtn] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  // const {Addbtn}=useContext(Context)
  const {logged,Addbtn}=useContext(Context)
 

  const toggleLogin = () => {
    setBtn(!btn);
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const cartItem= useSelector((store)=>store.cart.items) //use selector

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
          <li className="mr-4">{logged}</li>
         < li className="mr-4  bg-blue-500 rounded-md hover:bg-blue-400 px-3 py-1"  > <Link to="/cart"> Cart {cartItem.length}</Link> </li>
     
          <Addbtn/>
        
          
        </ul>
        
      </div>
    </div>
  );
};

export default Header;
