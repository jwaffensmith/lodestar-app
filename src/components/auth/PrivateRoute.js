import React from 'react';
import { Route, Redirect } from 'react-router-dom';


// component to make routes available to only authorized user
// had issues with redirecting will need to refactor before use
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