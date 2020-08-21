import React, { useState } from 'react';
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


export default function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={SignUpForm}/>
        <Route exact path="/login" component={LogInForm} />
        <Route exact path="/oauth" component={OAuth}/>
        <Route exact path="/create" component={CreateRoom} />
        <Route exact path="/join" component={JoinRoom} />
        <Route exact path="/room/:code" component={Room} />
      </Switch>
    </Router>
  );
}
