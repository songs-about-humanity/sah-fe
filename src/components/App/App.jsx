import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Room from '../Room/Room';
import Home from '../Home/Home';
import Splash from '../Splash/Splash';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Splash}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/room/:code" component={Room} />
      </Switch>
    </Router>
  );
}
