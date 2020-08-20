import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import LogInForm from '../LogInForm/LogInForm';
import CreateRoom from '../CreateRoom/CreateRoom';
import JoinRoom from '../JoinRoom/JoinRoom';

export default function App() {
  return <>
    <SignUpForm/>
    <LogInForm/>
    <CreateRoom/>
    <JoinRoom/>
  </>;
}
