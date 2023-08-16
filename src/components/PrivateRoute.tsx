import React, {FunctionComponent} from "react";
import {withAuthenticationRequired, WithAuthenticationRequiredOptions} from "@auth0/auth0-react";

interface ProtectedRouteProps<T> {
    component: React.FunctionComponent<T>;
    options?: WithAuthenticationRequiredOptions;
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps<any>> = ({ component, options }) => {
    const Component = withAuthenticationRequired(component, options);
    return <Component />;
};

export default ProtectedRoute;
