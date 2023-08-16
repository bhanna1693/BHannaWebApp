import {createBrowserRouter, Outlet} from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/Error";
import {HomePage} from "./pages/Home";
import {AboutPage} from "./pages/About";
import ProtectedRoute from "./components/PrivateRoute";
import {HappyHourSearchPage} from "./pages/happyhour/HappyHourSearch";
import {HappyHourDetailsPage} from "./pages/happyhour/[yelpId]/[yelpName]";
import {PokemonPage} from "./pages/Pokemon";
import PageLayout from "./layouts/PageLayout";
import React from "react";
import ProfilePage from "./pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <PageLayout children={<HomePage/>}/>,
                hasErrorBoundary: true
            },
            {
                path: "about",
                element: <PageLayout children={<AboutPage/>}/>,
            },
            {
                path: "profile",
                element: <ProtectedRoute component={() => <PageLayout children={<ProfilePage/>}/>}/>
            },
            {
                path: "happyhour",
                element: <ProtectedRoute component={() => <PageLayout children={<Outlet/>}/>}/>,
                children: [
                    {
                        path: "",
                        element: <HappyHourSearchPage/>,
                    },
                    {
                        path: ":yelpId/:yelpName",
                        element: <HappyHourDetailsPage/>
                    },
                ]
            },
            {
                path: "pokemon",
                element: <ProtectedRoute component={() => <PageLayout children={<PokemonPage/>}/>}/>
            }
        ]
    },
]);

export default router
