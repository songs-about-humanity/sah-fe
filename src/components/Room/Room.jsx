import React from 'react';
import { useSocketSelector } from 'react-socket-io-hooks';



const Room = () => {
  const { room_id, host, participants }  = useSocketSelector(state => state);
  console.log(room_id, participants);
  
  return (
    <div>
      {host}
      {
        participants.map(participant => <p key={participant?.id}>{participant?.id}</p>)
      }
      <p>You entered a room!</p>
    </div>
  );
};

export default Room;
