import React from 'react';
import { useSocketSelector } from 'react-socket-io-hooks';



const Room = () => {
  const { room_id, host, participants }  = useSocketSelector(state => state);
  console.log(room_id, participants);
  
  return (
    <div>
      <p>Host: {host}</p>
      <p>Participants</p> {
        participants.map(participant => <p key={participant}>{participant}</p>)
      }
      <p>You entered a room!</p>
    </div>
  );
};

export default Room;
