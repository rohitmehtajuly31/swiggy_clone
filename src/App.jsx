import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import {lazy,Suspense } from 'react';
import './App.css';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart'
import Err from './components/Err';
import Navbar from './components/Navbar';
import Restaurantmenu from './components/Restaurantmenu';
import Header from './components/Header';
import Grocery from './components/Grocery';
const MyLazyComponent = React.lazy(() => import('./components/Restaurantmenu'));
import Context from './components/Context';
import Addbtn from './components/Addbtn';

import { Provider } from 'react-redux';
import appStore from './components/appStore';
const App = () => {

  return (
   <Provider store={appStore}>
    <React.Fragment>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </React.Fragment>
    </Provider>
  );
};

const Applayout = () => {
  const [username, setusername]=useState("")
  useEffect(()=>{
    const data={
      name:"rohit mehta"
    };
    setusername(data.name)
  },[])
  return (
    
    <>
    <Context.Provider value={{logged:username,Addbtn,setusername}}>
      <Header /> 
      <Outlet />
      </Context.Provider>
     
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: 'home',
        element: <Body />,
      },

      {
        path: 'groccery',
        element: (
        
            <Grocery/>
        
        ),      
      },
      {
        path: 'cart',
        element: (
        
            <Cart/>
        
        ), 
      },
      {
        path: '/restc/:resID',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MyLazyComponent/>
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        // This acts as a catch-all route if none of the above match
        errorElement: <Err />,
      },
    ],
  },
]);

export default App;
