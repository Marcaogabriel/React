import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider ,createBrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ErrorPage from './Pages/error/erro';
const routes = createBrowserRouter([
  {
    path: "/", // caminho
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes}/>)
 