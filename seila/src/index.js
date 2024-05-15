import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'; 
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }, 
  {
    path: "/about",
    element: <About/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

