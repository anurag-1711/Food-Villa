import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
// import About from './components/About'
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
// import Instamart from './components/Instamart';
const Instamart = lazy(() => import('./components/Instamart'));
const About = lazy(() => import('./components/About'));
// upon on demand loading -> upon render -> suspend loading


const AppLayout = () => {

    const [user, setUser] = useState({
        name: "Anurag",
        email: "anurag@gmail.com"
    });


    return (
        <UserContext.Provider value={{
            user: user,
            setUser: setUser
        }}>
            <Header />
            {/* Outlet where we have to fill diff components accordingly. eg. body, about, contact */}
            <Outlet />
            {/* <Footer /> */}
        </UserContext.Provider>
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
                element: <Suspense fallback={<h1>Laoding....</h1>}> <About /></Suspense>,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element:
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
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