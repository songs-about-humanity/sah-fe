import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CreateRoom from '../CreateRoom/CreateRoom';
import JoinRoom from '../JoinRoom/JoinRoom';


const Home = () => {
  const dispatch = useDispatch();

  let token;
  useEffect(() => {
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
    // window.location.hash = '';
  }, [token]);

  return (
    <div>
      <CreateRoom />
      <JoinRoom />
    </div>
  );
};

export default Home;
