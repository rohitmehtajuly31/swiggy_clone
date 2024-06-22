
import React from 'react'
import './App.css'
import Body from "./components/Body";
import About from './components/About';
import Contact from './components/Contact';
import Err from './components/Err';
import Navbar from './components/Navbar';
import Restaurantmenu from'./components/Restaurantmenu'
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";

import Header from './components/Header';
const App=()=>{

 
  return(
    <React.Fragment>

<RouterProvider router={router}/>
    </React.Fragment>

  )
};
const Applayout=()=>{
  return(
    <>
    <Header/>
    <Outlet/>
    
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "home",
        element: <Body/>,
      },
      {
        path: "/restc/:resID",
        element: <Restaurantmenu/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
  
      


      {
      
        errorElement:<Err/>
        }

    ]
  },
  
]);

export default App