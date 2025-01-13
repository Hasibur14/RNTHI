import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import GeneralLayout from "../Layout/GeneralLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />, // Root layout for the landing page
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/', // Landing page route
                element: <Home />
            },
        ],
    },
    {
        path: '/',
        element: <GeneralLayout />, // Main layout for other pages
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/about',
                element: <About /> 
            },
            {
                path: '/about',
                element: <About/> 
            },
            {
                path: '/contact',
                element: <Contact /> 
            },
        ],
    },
]);

export default router;
