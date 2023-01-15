import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import AuthorDashboard from "../Pages/Dashboard/AuthorDashboard/AuthorDashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <Root></Root>, 
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/', 
                element: <Home/>
            }, 
            {
                path: '/aboutus', 
                element: <AboutUs/>
            }, 
            {
                path: '/contactus', 
                element: <ContactUs/>
            }, 
            {
                path: '/login', 
                element: <Login/>
            }, 
            {
                path: '/signup', 
                element: <SignUp/>
            }, 
            {
                path:'/dashboard/author',
                element:<AuthorDashboard/>
            },
            {
                path:'/dashboard/admin',
                element:<AdminDashboard/>
            }
        ]
    }
])

