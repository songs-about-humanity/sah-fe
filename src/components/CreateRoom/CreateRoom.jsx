import React from 'react';
// import { useSelector } from 'react-redux';
import { useSocket } from 'react-socket-io-hooks';
import { useHistory } from 'react-router-dom'; 


const CreateRoom = () => {
  const socket = useSocket();
  const history = useHistory();
  const handleClick = () => {
    socket.emit('JOIN'); 
    // const user = useSelector();
    // go to new room
    // adds host status
    history.push('/room');

  };
  return (
    <div>
      <button onClick={handleClick}>Create New Room</button>
    </div>
  );
};
export default CreateRoom;
