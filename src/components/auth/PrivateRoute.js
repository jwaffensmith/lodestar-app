import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function PrivateRoute({auth: auth, component: Component, ...rest}) {

    return (
        <Route
            {...rest}
            render={(props) => {
                if (auth) {
                    return  <Component {...props} />;
                } 
                if (!auth) {
                    return (
                    <Redirect to={{path: "/login", state: {from: props.location} }}/>
                    )
                }
            }}>
        </Route>
    );
};

export default PrivateRoute;