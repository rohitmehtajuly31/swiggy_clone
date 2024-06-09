import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from "./components/Body";
import RestaurantCard from './components/Restaurantcard';
import About from './components/About';
import { Navbar } from './components/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './components/Header';
const App=()=>{

 
  return(
    <React.Fragment>

<RouterProvider router={router}/>
    </React.Fragment>

  )
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/navbar",
    element: <Navbar/>
  }
]);

export default App