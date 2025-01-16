import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './Leyout/Root';
import Home from './Pages/HomePage/Home';
import Scholarships from './Pages/AllScholarshipsPage/Scholarships';
import Dashboard from './Pages/Dashboard/Dashboard';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import ScholarshipsDetails from './Pages/ScholarshipsDetails/ScholarshipsDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/all-scholarships',
        element: <Scholarships />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/scholarship-details/:id',
        element: <ScholarshipsDetails />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
