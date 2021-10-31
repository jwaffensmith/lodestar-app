import './App.css';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Astronauts from './components/astronauts/Astronauts';
import ISS from './components/ISS/ISS';
import Profile from './components/profile/Profile';
import AstronautContainer from './components/astronauts/AstronautContainer';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/astronauts" component={ Astronauts } />
        <Route path="/ISS" component={ ISS } />
        <Route path="/profile" component={ Profile } />
      </Switch>
      <AstronautContainer/>
    </div>
  );
}

export default App;
