import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/root/Root.jsx';
import Home from './Component/home/Home.jsx';
import Applied from './Component/Applied/Applied.jsx';

import Details from './Component/Details/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/applied",
        element:<Applied></Applied>,
        loader:()=>fetch(`../jobs.json`)
      },
      {
        path:"/job/:id",
        element:<Details></Details>,
        loader:()=>fetch(`../jobs.json`)
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
