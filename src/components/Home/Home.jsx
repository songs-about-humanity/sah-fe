import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateRoom from '../CreateRoom/CreateRoom';
import JoinRoom from '../JoinRoom/JoinRoom';


const Home = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
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
    if(target.name === 'username') setUsername(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'SET_USERNAME', payload: username });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}></input>
        <button>Submit</button>
      </form>
      <CreateRoom />
      <JoinRoom />
    </div>
  );
};

export default Home;
