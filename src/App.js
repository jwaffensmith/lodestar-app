import './App.css';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Profile from './components/profile/Profile';
import AstronautContainer from './components/astronauts/AstronautContainer';
import IssContainer from './components/iss/IssContainer';
import Navigation from './components/shared/Navigation';
import Login from './components/auth/Login';
import AuthContext from './components/auth/AuthContext';
import firebase from './components/auth/Firebase';


// add private route

function App() {

  const [user, setUser] = useState(null);

  // set current user 
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // user is logged in
          setUser(user);
          console.log(user);
        } else {
          // user is logged out
          setUser(null)
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
          logout
        }}>
          <Navigation/>
          <Switch>
            <Route path="/astronauts" component={ AstronautContainer } />
            <Route path="/iss" component={ IssContainer } />
            <Route path="/profile" component={ Profile } />
            <Route path="/login" component={ Login }/>
            <Redirect from="/" to="/login"/>
            <Redirect from="/logout" to="/login"/>
          </Switch>
        </AuthContext.Provider>
    </div>
    );
}

export default App;
