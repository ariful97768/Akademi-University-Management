import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './Leyout/Root';
import Home from './Pages/HomePage/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import ScholarshipsDetails from './Pages/ScholarshipsDetails/ScholarshipsDetails';
import AllScholarships from './Pages/AllScholarshipsPage/AllScholarships';
import AuthProvider, { AuthContext } from './Context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Context/PrivateRoute';
import App from './Pages/PaymentGateway/PaymentPage';
import AddScholarships from './Pages/Dashboard/Admin/AddScholarships';
import ManageScholarships from './Pages/Dashboard/Admin/ManageScholarships';
import Profile from './Pages/Dashboard/Admin/Profile';
import ManageApplications from './Pages/Dashboard/Admin/ManageApplications';
import AllUser from './Pages/Dashboard/Admin/AllUser';
import ManageReviews from './Pages/Dashboard/Admin/ManageReviews';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/')
      },
      {
        path: '/all-scholarships',
        element: <PrivateRoute><AllScholarships /></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/all-data')
      },
      {
        path: '/scholarship-details/:id',
        element: <PrivateRoute> <ScholarshipsDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/scholarship/${params.id}`)
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
        path: '/payment',
        element: <App />
      }

    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute ><Dashboard /></PrivateRoute>,
    children: [
      // admin routes
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'add-scholarships',
        element: <AddScholarships />
      },
      {
        path: 'manage-scholarships',
        element: <ManageScholarships />
      },
      {
        path: 'manage-applications',
        element: <ManageApplications />
      },
      {
        path: 'manage-users',
        element: <AllUser />
      },
      {
        path: 'manage-reviews',
        element: <ManageReviews />
      }

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
    </StrictMode>
  </AuthProvider>
)
