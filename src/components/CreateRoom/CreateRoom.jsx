import React from 'react';
// import { useSelector } from 'react-redux';
import { useSocketSelector } from 'react-socket-io-hooks';
import { useSocket } from 'react-socket-io-hooks';
import { useHistory } from 'react-router-dom'; 
const chance = require('chance').Chance();

const CreateRoom = () => {
  const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function(initial, item) {
      if(item) {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

  // this gets rid of the hash from url so it looks pretty again
  // window.location.hash = '';

  let token = hash.access_token;
  console.log(token);

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
