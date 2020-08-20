import React, { useState } from 'react';

export default function JoinRoom() {
  const [roomCode, setRoomCode] = useState('');

  const handleSubmit = (event) => {
    // go to new room
    // adds host status
    event.preventDefault();
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

