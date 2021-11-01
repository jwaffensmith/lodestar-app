import './App.css';
import React, {useState} from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'
import Profile from './components/profile/Profile';
import AstronautContainer from './components/astronauts/AstronautContainer';
import IssContainer from './components/iss/IssContainer';
import Navigation from './components/shared/Navigation';
import Login from './components/auth/Login'
import 'firebase/compat/auth';
// import { auth } from "./components/auth/Firebase";

function App() {

  const [isUserSignedIn, setIsUserSignedIn] = useState(true);

  if(isUserSignedIn === true) {
    return (
      <div>
        <Navigation/>
        <Switch>
          <Route path="/astronauts" component={ AstronautContainer } />
          <Route path="/iss" component={ IssContainer } />
          <Route path="/profile" component={ Profile } />
          <Route path="/login" component={ Login }/>
        </Switch>
      </div>
    );
  } else {
    return (
      <div>
        <Navigation/>
        <Switch>
          <Route path="/login" component={ Login }/>
        </Switch>
      </div>
    );
  }

}

export default App;
