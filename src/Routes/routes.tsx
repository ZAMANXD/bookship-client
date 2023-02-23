import { createBrowserRouter } from "react-router-dom";
import Cart from "../layouts/Cart/Cart";
import AdminDashboardLayout from "../layouts/Dashboard/AdminDashboardLayout";
import BooksLayout from "../layouts/Root/BooksLayout";
import Root from "../layouts/Root/Root";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BooksByPrice from "../Pages/AllBooks/BooksByPrice";
// import AllBooks from "../Pages/AllBooks/AllBooks";
import AuthorBooks from "../Pages/AuthorBooks/AuthorBooks";
import BooksByAuthor from "../Pages/AuthorBooks/BooksByAuthor";
import Blog from "../Pages/Blog/Blog/Blog";
import BlogPost from "../Pages/Blog/BlogPost/BlogPost";
import BookDetails from "../Pages/BookDetails/BookDetails";
import AddToCart from "../Pages/Cart/AddToCart/AddToCart";
import Payment from "../Pages/Cart/Payment/Payment";
import BooksByCategory from "../Pages/CategoriesBooks/BooksByCategory";
import CategoriesBooks from "../Pages/CategoriesBooks/CategoriesBooks";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AdminBuyerList from "../Pages/Dashboard/AdminDashboard/AdminBuyerList";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import AdminSellerList from "../Pages/Dashboard/AdminDashboard/AdminSellerList";
import SellerDashboard from "../Pages/Dashboard/SellerDashboard/SellerDashboard";
import Home from "../Pages/Home/Home/Home";
import MobileScroll from "../Pages/Home/MobileScroll/MobileScroll";
import Login from "../Pages/Login/Login";
import MyAccount from "../Pages/MyAccount/MyAccount/MyAccount";
import BooksByPublication from "../Pages/PublicationBooks/BooksByPublication";
import PublicationBooks from "../Pages/PublicationBooks/PublicationBooks";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "../PrivateRoute/AdminRoute";
// import AdminRoute from "../PrivateRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import SellerRoute from "../PrivateRoute/SellerRoute";
import SellerRoute from "../PrivateRoute/SellerRoute";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import SearchResult from "../Shared/SearchResult/SearchResult";


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
                path: '/blog',
                element: <Blog />
            },
            {
                path:'/blogs/:id',
                loader:async ({params})=> fetch(`http://localhost:5000/blogs/${params.id}`),
                element:<BlogPost/>
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
                path: '/addtocart/checkout',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch('https://bookship-server-zamanxd.vercel.app/orders'),
            },
            {
                path: '/myaccount',
                element: <PrivateRoute><MyAccount /></PrivateRoute>
            },
            {
                path: '/dashboard/seller',
                element: <SellerRoute><SellerDashboard /></SellerRoute>

            },
            {
                path:'/searchResult',
                element:<SearchResult/>
            },
            {
                path: '/addtocart/checkout',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({ params }) => fetch('https://bookship-server-zamanxd.vercel.app/orders'),
            },
            {
                path:"/whybookship",
                element:<MobileScroll/>
            }
            
            
        ]
    },
    // admin dashbord routes 
    {
        path: '/dashboard/admin',
        element: <AdminRoute><AdminDashboardLayout /></AdminRoute>,
        children: [
            {
                path: '/dashboard/admin',
                element: <AdminDashboard />
            },
            {
                path: '/dashboard/admin/sellerList',
                element: <AdminSellerList />
            },
            {
                path: '/dashboard/admin/buyerList',
                element: <AdminBuyerList />
            }
        ]
    },
    {
        path: '/books',
        element: <BooksLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/books',
                element: <BooksByPrice />
            },
            {
                path: '/books/bookprice',
                element: <BooksByPrice />
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
            {
                path: '/books/author/:name',
                loader: ({ params }) => fetch(`https://bookship-server-zamanxd.vercel.app/author/${params.name}`),
                element: <BooksByAuthor />
            },
            {
                path: '/books/category/:name',
                loader: ({ params }) => fetch(`https://bookship-server-zamanxd.vercel.app/categories/${params.name}`),
                element: <BooksByCategory />
            },
            {
                path: '/books/publication/:name',
                loader: ({ params }) => fetch(`https://bookship-server-zamanxd.vercel.app/publications/${params.name}`),
                element: <BooksByPublication />
            }
        ]
    },
    {
        path: '/dashboard/admin',
        element: <AdminRoute><AdminDashboardLayout/></AdminRoute>,
        children:[
            {
                path:'/dashboard/admin',
                element:<AdminDashboard/>
            },
            {
                path:'/dashboard/admin/sellerList',
                element:<AdminSellerList/>
            },
            {
                path:'/dashboard/admin/buyerList',
                element:<AdminBuyerList/>
            }
        ]
    },
    {
        path: '/addtocart',
        element: <Cart />,
        errorElement: <ErrorPage></ErrorPage>,
    }
])


