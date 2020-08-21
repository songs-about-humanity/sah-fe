import React from 'react';
import { useSocketSelector } from 'react-socket-io-hooks';



const Room = () => {
  const { host, participants }  = useSocketSelector(state => state);
  console.log(host?.id);
  
  return (
    <div>
      {host?.id}
      {
        participants.map(participant => <p key={participant?.id}>{participant?.id}</p>)
      }
      <p>You entered a room!</p>
    </div>
  );
};

export default Room;
