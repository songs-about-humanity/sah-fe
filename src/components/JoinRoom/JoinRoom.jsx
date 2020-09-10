import React, { useState } from 'react';
import { useSocket, useSocketSelector } from 'react-socket-io-hooks';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function JoinRoom() {
  let { hasStarted } = useSocketSelector(state => state);
  const [roomCode, setRoomCode] = useState('');
  const socket = useSocket();
  const history = useHistory();
  const { username } = useSelector(state => state);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!username) {
      alert('please choose a username!');
      return;
    }

    if(!roomCode) {
      alert('please enter a room code!');
      return;
    }

    socket.emit('JOIN', { room_id: roomCode, name: username });

    let validCode;

    socket.on('JOIN_ERROR', () => {
      validCode = false;
      alert('Game already in progress');
    });

    if(validCode) history.push(`/room/${roomCode}`);
    
    // eslint-disable-next-line no-console
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
        <button>Join</button>
      </form>
    </>
  );
}

