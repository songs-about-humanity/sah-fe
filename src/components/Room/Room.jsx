import React, { useEffect, useReducer } from 'react';
import { useSocketSelector } from 'react-socket-io-hooks';
import SpotifyPlayer from '../SpotifyPlayer/SpotifyPlayer';

const Room = () => {
  let { room_id, host, participants, token } = useSocketSelector(state => state);

  console.log(room_id, participants);
  
  return (
    <div>
      <p>Host: {host}</p>
      <p>Participants</p> {
        participants.map(participant => <p key={participant}>{participant}</p>)
      }
      <p>You entered a room!</p>
      <SpotifyPlayer />
    </div>
  );
};

export default Room;
