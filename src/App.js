import './App.css';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Astronauts from './components/astronauts/Astronauts';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/astronauts" component={ Astronauts } />
      </Switch>
    </div>
  );
}

export default App;
