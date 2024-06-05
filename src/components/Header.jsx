import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btn, setBtn] = useState(true);
  console.log("hello")

  const toggleLogin = () => {
    setBtn(!btn);
  };

  return (
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
        <button onClick={toggleLogin}>{btn ? "Login" : "Logout"}</button>
      </div>
    </div>
  );
};

export default Header;
