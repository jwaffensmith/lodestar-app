import './App.css';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Profile from './components/profile/Profile';
// import AstronautContainer from './components/astronauts/AstronautContainer';
import Iss from './components/iss/Iss';
import Navigation from './components/shared/Navigation';
import Login from './components/auth/Login';
import AuthContext from './components/auth/AuthContext';
import firebase from './components/auth/Firebase';
import PrivateRoute from './components/auth/PrivateRoute';
import Astronaut from './components/astronauts/Astronaut';


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

              <Route path="/astronauts" component={ Astronaut } />
              <Route path="/iss" component={ Iss } />
              <Route path="/profile" component={ Profile } />
              <Route path="/login" component={ Login }/>
              <Redirect from="/logout" to="/login"/>
              <Redirect from="/" to="/login"/>
          </Switch>
        </AuthContext.Provider>
    </div>
    );
}

export default App;
{/* <Redirect to="/login" component={ Login }/> */}