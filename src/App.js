import './App.css';
import {Home} from './Home';
import {Student} from './Student';
import {Course} from './Course';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      
    <div className="container">
      <h3>This is text</h3>
      <Navigation/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/student' component={Student}/>
        <Route path='/course' component={Course}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
