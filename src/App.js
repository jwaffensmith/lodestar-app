import './App.css';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Astronauts from './components/astronauts/Astronauts';
import Iss from './components/iss/Iss';
import Profile from './components/profile/Profile';
import AstronautContainer from './components/astronauts/AstronautContainer';
import IssContainer from './components/iss/IssContainer';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/astronauts" component={ Astronauts, AstronautContainer } />
        <Route path="/iss" component={ Iss, IssContainer } />
        <Route path="/profile" component={ Profile } />
      </Switch>
    </div>
  );
}

export default App;
