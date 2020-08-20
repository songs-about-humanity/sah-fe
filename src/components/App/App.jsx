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


export default function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUpForm}/>
        <Route path="/login" component={LogInForm} />
        <Route path="/create" component={CreateRoom} />
        <Route path="/join" component={JoinRoom} />
        <Route path="/room" component={Room} />
      </Switch>
    </Router>
  );
}
