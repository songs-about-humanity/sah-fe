import React from 'react';
// import { useSelector } from 'react-redux';
import { useSocket } from 'react-socket-io-hooks';


const CreateRoom = () => {
  const socket = useSocket();
  const handleClick = () => {
    socket.emit('JOIN'); 
    // const user = useSelector();
    // go to new room
    // adds host status
    console.log('you are the host!');
  };
  return (
    <div>
      <button onClick={handleClick}>Create New Room</button>
    </div>
  );
};
export default CreateRoom;
