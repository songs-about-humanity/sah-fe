import React from 'react';
import { useSocket } from 'react-socket-io-hooks';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './CreateRoom.css';

const CreateRoom = () => {
  const { token, username } = useSelector(state => state);
  const socket = useSocket();
  const history = useHistory();

  const handleClick = () => {
    socket.emit('CREATE', { token, username });

    socket.on('CODE', (generatedId) => {
      history.push(`/room/${generatedId}`);
    });
  };

  return (
    <div>
      <button className="create-room" onClick={handleClick}>Create New Room</button>
    </div>
  );
};

export default CreateRoom;
