import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import About from './components/About'
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';


const AppLayout = () => {
    return (
        <>
            <Header />
            {/* Outlet where we have to fill diff components accordingly. eg. body, about, contact */}
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);

/*
    Header
        - Logo
        - Nav Item
        - Cart

    Body
        - Search Bar
        - Restaurant List
            - Restaurant Card
                - Restaurant Image
                - Restaurant Name
                - Restaurant Rating
                - Restaurant Cuisine
    Footer
        - Links
        - Copy Right
            
*/