import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Splash from '../Splash/Splash';
import Room from '../Room/Room';
import Home from '../Home/Home';
import Results from '../Results/Results';
import './App.css';

export default function App() {

  return (
    <div className="app-wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/home" component={Home}/>
          <Route exact path="/room/:code" component={Room} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
}
