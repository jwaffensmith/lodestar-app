import './App.css';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Profile from './components/profile/Profile';
import AstronautContainer from './components/astronauts/AstronautContainer';
import IssContainer from './components/iss/IssContainer';
import Navigation from './components/shared/Navigation';

function App() {
  return (
    <div>
      <Navigation/>
      <Switch>
        {/* <Route path="/"/>
        <Route path="/login"/> */}
        <Route path="/astronauts" component={ AstronautContainer } />
        <Route path="/iss" component={ IssContainer } />
        <Route path="/profile" component={ Profile } />
      </Switch>
    </div>
  );
}

export default App;
