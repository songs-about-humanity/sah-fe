import React from 'react';
import { useSocket } from 'react-socket-io-hooks';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Chance from 'chance';

const CreateRoom = () => {
  const chance = new Chance();
  const { token, username } = useSelector(state => state);
  const socket = useSocket();
  const history = useHistory();

  // let { room_id } = useSocketSelector(state => state);
  console.log(username);

  const handleClick = () => {
    let room_id = chance.word({ length: 4 });
    // while(rooms[generatedRoomId] !== undefined) {
    //   generatedRoomId = chance.word({ length: 4 });
    // }
    socket.emit('CREATE', { token, room_id, username });
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
