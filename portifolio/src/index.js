import ReactDOM from 'react-dom/client';
import {} from 'react-router-dom';
import './index.css';
import { RouterProvider ,createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Contatos from './pages/Contatos';
const routes = createBrowserRouter([
  { 
    path: "/",
    element: <Home/>
  },
  {
    path: "/projetos",
    element: <Projetos/>
  },
  {
    path: "/contatos",
    element: <Contatos/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes}/>)
