import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateRoom from '../CreateRoom/CreateRoom';
import JoinRoom from '../JoinRoom/JoinRoom';
import './Home.css';


const Home = () => {
  const dispatch = useDispatch();

  let { token } = useSelector(state => state);
  useEffect(() => {
    if(!token) {
      const hash = window.location.hash
        .substring(1)
        .split('&')
        .reduce(function(initial, item) {
          if(item) {
            var parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
          }
          return initial;
        }, {});
      token = hash.access_token;
   
      dispatch({ type: 'SET_TOKEN', payload: token });
    }
    
    // window.location.hash = '';
  }, [token]);

  const handleChange = ({ target }) => {
    dispatch({ type: 'SET_USERNAME', payload: target.value });
  };

  return (
    <div className="home-container">
      <div className="controls-container">
        <input
          className="username-input"
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}>
        </input>      
        <CreateRoom />
        <JoinRoom />
      </div>

    </div>
  );
};

export default Home;
