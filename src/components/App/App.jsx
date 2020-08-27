import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Splash from '../Splash/Splash';
import SignUpForm from '../SignUpForm/SignUpForm';
import LogInForm from '../LogInForm/LogInForm';
import CreateRoom from '../CreateRoom/CreateRoom';
import JoinRoom from '../JoinRoom/JoinRoom';
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
          <Route exact path="/signup" component={SignUpForm}/>
          <Route exact path="/login" component={LogInForm} />
          {/* <Route exact path="/oauth" component={OAuth}/> */}
          <Route exact path="/create" component={CreateRoom} />
          <Route exact path="/join" component={JoinRoom} />
          <Route exact path="/room/:code" component={Room} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
}
