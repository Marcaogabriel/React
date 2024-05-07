import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider ,createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/errorpage';
import Item from './pages/item';
import Opcoes from './pages/opcoes';
import Loginin from './pages/login';
const routes = createBrowserRouter([
  {
    path: "/", // caminho
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/opcoes",
    element: <Opcoes/>
  },
  {
    path: "/item",
    element: <Item/>
  }, 
  {
    path: "/login",
    element: <Loginin/>
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes}/>)


