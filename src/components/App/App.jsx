import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SignUpForm from '../SignUpForm/SignUpForm';
import LogInForm from '../LogInForm/LogInForm';
import CreateRoom from '../CreateRoom/CreateRoom';
import JoinRoom from '../JoinRoom/JoinRoom';
import Room from '../Room/Room';
import { OAuth } from '../OAuth/OAuth';
import Home from '../Home/Home';
import Results from '../Results/Results';


export default function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/signup" component={SignUpForm}/>
        <Route exact path="/login" component={LogInForm} />
        <Route exact path="/oauth" component={OAuth}/>
        <Route exact path="/create" component={CreateRoom} />
        <Route exact path="/join" component={JoinRoom} />
        <Route exact path="/room/:room_id/" component={Room} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </Router>
  );
}
