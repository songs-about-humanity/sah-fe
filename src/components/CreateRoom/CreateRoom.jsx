import React from 'react';
import { useSelector } from 'react-redux';

export default function CreateRoom() {

  const handleClick = () => {
    const user = useSelector();
    // go to new room
    // adds host status
    console.log('you are the host!');
  };

  return (
    <>
      <button onClick={handleClick}>Create New Room</button>
    </>
  );
}

