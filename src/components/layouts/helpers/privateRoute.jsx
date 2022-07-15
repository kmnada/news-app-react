import React from 'react';
import { Redirect, Route } from "react-router-dom";
import CheckUserLoggedIn from "../../../utils/CheckUserLoggedIn";
import Header from "../../header";


const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <Route
        {...rest}
        render={(props) =>
        CheckUserLoggedIn !== null ? (
            // <React.Suspense fallback={"...loading"}>
            <>
                <Header/>
                <Component {...props} />
            </>
            // </React.Suspense>

        ): (
            <Redirect
            to={{ pathname: '/login'}}
            />
        )}  
        />
    );
}

export default PrivateRoute;