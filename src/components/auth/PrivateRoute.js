import { React, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';

function PrivateRoute({component: Component, ...rest}
) {
    const { uid } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={props => {
                return uid ? <Component {...props} /> : <Redirect to="/login"/>
            }}>
        </Route>
    )
}

export default PrivateRoute;