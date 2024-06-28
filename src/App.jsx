import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import {lazy,Suspense } from 'react';
import './App.css';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Err from './components/Err';
import Navbar from './components/Navbar';
import Restaurantmenu from './components/Restaurantmenu';
import Header from './components/Header';
import Grocery from './components/Grocery';
const MyLazyComponent = React.lazy(() => import('./components/Restaurantmenu'));


const App = () => {
  return (
    <React.Fragment>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </React.Fragment>
  );
};

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
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
