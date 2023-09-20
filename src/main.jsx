import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import Us from './components/Us/Us';
import Contact from './components/Contact/Contact';
import Users from './components/users/Users';

import Names from './components/Names/Names';
import Posts from './components/posts/Posts';
import Podetails from './components/podetails/Podetails';
import Errorpage from './components/Errorpage/Errorpage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:'/us',
        element:<Us></Us>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },{

        path:'/users',
        loader:()=>    fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:ss',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.ss}`)  ,
        element:<Names></Names>
      },{
        path:'/posts',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>

      },{
        path:'/post/:poid',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.poid}`),
        element:<Podetails></Podetails>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
