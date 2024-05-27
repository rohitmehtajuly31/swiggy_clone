import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const Header=()=>{
  return(
    <div className="header">
      <div className="logo">
        <img src="https://seeklogo.com/images/M/mrbeast-burger-logo-91E3435A9E-seeklogo.com.png" alt="" />
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
const RestaurantCard=(props)=>{
  return(
    <div className="res-card" style={{backgroundColor:""}}>
      <img className='res-logo' src="https://thebigmansworld.com/wp-content/uploads/2022/08/spicy-noodles-recipe-500x375.jpg" alt="res name" />
      <h3>{props.resname}</h3>
      <h4>Rating: {props.rating}</h4>
      <h4>Cusine: {props.cusine}</h4>
    </div>
  )
};
const Body=()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
        <div className="res-container">
      
          <RestaurantCard resname="Chineese Master" rating="4" cusine="chineese"/>
          <RestaurantCard resname="Chineese Master" rating="4" cusine="chineese"/>
          <RestaurantCard resname="Chineese Master" rating="4" cusine="chineese"/>
          <RestaurantCard resname="Chineese Master" rating="4" cusine="chineese"/>
          <RestaurantCard resname="Chineese Master" rating="4" cusine="chineese"/>

        </div>
      
    </div>
  );
};

const Applayout=()=>{
  return(
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>

  )
};

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Applayout />
  
)
