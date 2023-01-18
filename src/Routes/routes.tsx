import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BookDetails from "../Pages/BookDetails/BookDetails";
import AddToCart from "../Pages/Cart/AddToCart/AddToCart";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import AuthorDashboard from "../Pages/Dashboard/AuthorDashboard/AuthorDashboard";
import SellerDashboard from "../Pages/Dashboard/SellerDashboard/SellerDashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyAccount from "../Pages/MyAccount/MyAccount/MyAccount";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/aboutus',
                element: <PrivateRoute><AboutUs/></PrivateRoute>
            },
            {
                path: '/contactus',
                element: <ContactUs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/book/:id',
                loader: async ({ params }) => {
                    return fetch(`/book/${params.id}`)
                },
                element: <BookDetails />
            },
            {
                path: '/books',
                element: <AllBooks />,
            },
            {
                path: '/addtocart',
                element: <AddToCart />
            },
            {
                path: '/myaccount',
                element: <MyAccount />
            },
            {
                path:'/dashboard/seller',
                element: <SellerDashboard/>
            }
        ]
    }
])

