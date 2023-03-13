import './App.css';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Profile from './components/profile/Profile';
import Iss from './components/ISS/ISS';
import Navigation from './components/shared/Navigation';
import Footer from './components/shared/Footer';
import Login from './components/auth/Login';
import AuthContext from './components/auth/AuthContext';
import firebase from './components/auth/Firebase';
import Astronaut from './components/astronauts/Astronaut';
import PageNotFound from './components/shared/PageNotFound';


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
    <div id="page-container">
      <div id="content-wrap">
          <AuthContext.Provider 
          value={{
            ...user,
            ...isAuth,
            logout
          }}>
            <Navigation/>
            <Switch>
              <Route path="/login" component={ Login }/>
              <Route path="/profile" component={ Profile } />
              <Route path="/astronauts" component={ Astronaut } />
              <Route path="/iss" component={ Iss }  />
              <Redirect from="/logout" to="/login"/>
              <Redirect from="/" exact to="/login"/>
              <Route component={ PageNotFound } />
            </Switch>
          </AuthContext.Provider>
        </div>
        <Footer/>
      </div>
    );
}

export default App;
