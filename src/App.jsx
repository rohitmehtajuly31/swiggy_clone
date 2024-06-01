import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from "./components/Body";
import RestaurantCard from './components/Restaurantcard';

import Header from './components/Header';
const Applayout=()=>{
  return(
    <React.Fragment>
<Header/>
<Body/>
    </React.Fragment>

  )
};

export default Applayout
