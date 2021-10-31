import './App.css';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Profile from './components/profile/Profile';
import AstronautContainer from './components/astronauts/AstronautContainer';
import IssContainer from './components/iss/IssContainer';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/astronauts" component={ AstronautContainer } />
        <Route path="/" component={ IssContainer } />
        <Route path="/profile" component={ Profile } />
      </Switch>
    </div>
  );
}

export default App;
