import React from 'react';
import { useSocket } from 'react-socket-io-hooks';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CreateRoom = () => {
  const { token, username } = useSelector(state => state);
  const socket = useSocket();
  const history = useHistory();

  const handleClick = () => {
    if(!username) {
      alert('please choose a username!');
      return;
    }
    
    socket.emit('CREATE', { token, username });

    socket.on('CODE', (generatedId) => {
      history.push(`/room/${generatedId}`);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Create</button>
    </div>
  );
};

export default CreateRoom;
