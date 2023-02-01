import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AllBooks from "../Pages/AllBooks/AllBooks";
import AuthorBooks from "../Pages/AuthorBooks/AuthorBooks";
import BooksByAuthor from "../Pages/AuthorBooks/BooksByAuthor";
import BookDetails from "../Pages/BookDetails/BookDetails";
import AddToCart from "../Pages/Cart/AddToCart/AddToCart";
import CategoriesBooks from "../Pages/CategoriesBooks/CategoriesBooks";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SellerDashboard from "../Pages/Dashboard/SellerDashboard/SellerDashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyAccount from "../Pages/MyAccount/MyAccount/MyAccount";
import PublicationBooks from "../Pages/PublicationBooks/PublicationBooks";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "../PrivateRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRout from "../PrivateRoute/SellerRoute";
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
                element: <AboutUs></AboutUs>
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
                    return fetch(`https://bookship-server-zamanxd.vercel.app/book/${params.id}`)
                },
                element: <BookDetails />
            },
            {
                path: '/books',
                element: <AllBooks />,
                children: [
                    {
                        path: '/books',
                        element: <AuthorBooks />
                    },
                    {
                        path: '/books/authorbooks',
                        element: <AuthorBooks />
                    },
                    {
                        path: '/books/publicationbooks',
                        element: <PublicationBooks />
                    },
                    {
                        path: '/books/categoriesbooks',
                        element: <CategoriesBooks />
                    },
                ]
            },
            {
                path: '/books/authorbooks',
                element: <AuthorBooks />
            },
            {
                path: '/author/:name',
                loader: ({ params }) => fetch(`https://bookship-server-zamanxd.vercel.app/author/${params.name}`),
                element: <BooksByAuthor />
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
                path: '/dashboard/seller',
                element: <SellerDashboard />
            }
        ]
    },
])

