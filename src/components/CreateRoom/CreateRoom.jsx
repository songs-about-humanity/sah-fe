import React from 'react';
import { useSocket } from 'react-socket-io-hooks';
import { useHistory } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
const chance = require('chance').Chance();

const CreateRoom = () => {
  const token = useSelector(state => state.token);
  const socket = useSocket();
  const history = useHistory();
  
  // let { room_id } = useSocketSelector(state => state);

  const handleClick = () => {
    let room_id = chance.word({ length: 4 });    
    // while(rooms[generatedRoomId] !== undefined) {
    //   generatedRoomId = chance.word({ length: 4 });
    // }
    socket.emit('CREATE', { token, room_id }); 
    // const user = useSelector();
    // go to new room
    // adds host status
    history.push(`/room/${room_id}`);
  };
  return (
    <div>
      <button onClick={handleClick}>Create New Room</button>
    </div>
  );
};
export default CreateRoom;
