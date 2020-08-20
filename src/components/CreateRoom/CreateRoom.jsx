import React from 'react';

export default function CreateRoom() {

  const handleClick = () => {
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

