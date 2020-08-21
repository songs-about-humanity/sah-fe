import React, { useState } from 'react';
import { useSocket } from 'react-socket-io-hooks';
import { useHistory } from 'react-router-dom'; 

export default function JoinRoom() {
  const [roomCode, setRoomCode] = useState('');
  const socket = useSocket();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('JOIN', roomCode);
    history.push('/room');
    console.log(`you have joined the room ${roomCode}!`);
  };

  const handleChange = ({ target }) => {
    if(target.name === 'room-code') setRoomCode(target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="room-code"
          placeholder="Enter Room Code"
          onChange={handleChange}
        />
        <button>Join Room</button>
      </form>
    </>
  );
}

