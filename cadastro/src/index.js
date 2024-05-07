import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider ,createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/cadas';

const routes = createBrowserRouter([
  {
    path: "/", // caminho
    element: <Home/>,
  },
  {
    path: "/cadas",
    element: <Cadastro />
  }
]);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes}/>)