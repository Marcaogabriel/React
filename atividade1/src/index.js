import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider ,createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/cadas';
import Objeto from './pages/objeto';

const routes = createBrowserRouter([
  {
    path: "/", // caminho
    element: <Home/>,
  },
  {
    path: "/cadas",
    element: <Cadastro />
  },
  {
    path: "/objeto",
    element: <Objeto />
  },
]);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes}/>)