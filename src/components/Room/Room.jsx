import React, { useEffect, useReducer } from 'react';
import { useSocketSelector } from 'react-socket-io-hooks';
import SpotifyPlayer from '../SpotifyPlayer/SpotifyPlayer';
import { SongSearch } from '../SongSearch/SongSearch';

const Room = () => {
  let { room_id, host, participants, songQueue } = useSocketSelector(state => state);

  console.log(room_id, participants, songQueue);
  
  return (
    <div>
      <p>Host: {host}</p>
      <p>Participants</p> {
        participants.map(participant => <p key={participant}>{participant}</p>)
      }
      <p>You entered a room!</p>
      <p>Song Queue:</p>
      <SpotifyPlayer queue={songQueue} />
      <SongSearch/>
    </div>
  );
};
export default Room;
