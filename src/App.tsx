import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";
import {GlobalStateProvider} from "./context/GlobalStateContext";
import {QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import queryClient from "./api/query-client";
import {environment} from "./environment";
import Auth0ProviderWithRedirectCallback from "./context/Auth0Provider";

function App() {
    return (
        <Auth0ProviderWithRedirectCallback
            domain={environment.AUTH0_DOMAIN}
            clientId={environment.AUTH0_CLIENT_ID}
            authorizationParams={{
                audience: environment.AUTH0_AUDIENCE,
                redirect_uri: window.location.origin
            }}>
            <GlobalStateProvider>
                <QueryClientProvider client={queryClient}>
                    <Navbar/>
                    <Outlet/>
                    <ReactQueryDevtools initialIsOpen={false}/>
                </QueryClientProvider>
            </GlobalStateProvider>
        </Auth0ProviderWithRedirectCallback>
    );
}

export default App;
