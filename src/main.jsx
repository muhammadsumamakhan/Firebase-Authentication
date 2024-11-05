import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Product from './pages/Product.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import NotFound from './pages/NotFound.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx';
import About from './pages/About.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'products', element: <ProtectedRoutes component={<Product />}/>},
      { path: 'product/:id', element: <SingleProduct /> },
      { path: '*', element: <NotFound /> },
      { path: 'about/*', element: <About/>, children: 
          [
          { path: '', element: <h1>/ route</h1> },
          { path: 'nested1', element: <h1>Nested one</h1> },
          { path: 'nested2', element: <h1>Nested two</h1> },
          { path: 'nested3', element: <h1>Nested three</h1> }, 
          ]
      }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
