import './App.css';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Profile from './components/profile/Profile';
import Iss from './components/iss/Iss';
import Navigation from './components/shared/Navigation';
import Login from './components/auth/Login';
import AuthContext from './components/auth/AuthContext';
import firebase from './components/auth/Firebase';
import PrivateRoute from './components/auth/PrivateRoute';
import Astronaut from './components/astronauts/Astronaut';
import PageNotFound from './components/shared/PageNotFound';


// add private route

function App() {

  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  // set current user 
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // user is logged in
          setUser(user);
          setIsAuth(true);
          console.log(user);
        } else {
          // user is logged out
          setUser(null)
          setIsAuth(false)
        }
    })
  }, []);

  // logout function
  // set user to null
  const logout = async () => {
    await firebase.auth().signOut();
    setUser(null);
  };

  return (
    <div>
        <AuthContext.Provider 
        value={{
          ...user,
          ...isAuth,
          logout
        }}>
          <Navigation/>
          <Switch>
              <PrivateRoute path="/profile" component={ Profile } isAuth={isAuth}/>
              <PrivateRoute path="/astronauts" component={ Astronaut } isAuth={isAuth}/>
              <PrivateRoute path="/iss" component={ Iss } isAuth={isAuth} />
              <Route path="/login" component={ Login }/>
              <Route component={ PageNotFound }/>
              <Redirect from="/logout" to="/login"/>
              <Redirect from="/" to="/login"/>
          </Switch>
        </AuthContext.Provider>
    </div>
    );
}

export default App;
{/* <Redirect to="/login" component={ Login }/> */}