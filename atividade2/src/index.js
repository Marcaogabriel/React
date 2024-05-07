import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider ,createBrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Gato from './Pages/gato';
import ErrorPage from './Pages/erro';
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
  {
    path: "/gato",
    element: <Gato />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes}/>)
 