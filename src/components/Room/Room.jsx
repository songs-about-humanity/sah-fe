import React, { useState, useEffect } from 'react';
import { useSocketSelector, useSocket } from 'react-socket-io-hooks';
import SpotifyPlayer from '../SpotifyPlayer/SpotifyPlayer';
import { SongSearch } from '../SongSearch/SongSearch';

const Room = () => {
  let { room_id, host, participants, songQueue } = useSocketSelector(state => state);
  const [playerHasSelected, setPlayerHasSelected] = useState(false);
  const socket = useSocket();
  
  useEffect(() => {
    participants.forEach(participant => {
      if(participant.hasSelected === true && participant.id === socket.id) setPlayerHasSelected(true);
    });
  }, [participants]);
  // have 'hasSelected' in state
  // need to see if an id of a person who has selected is the current user
  // disable button if that is the case

  return (
    <div>
      <p>Host: {host?.name}</p>
      <p>Participants</p> {
        participants.map(participant => <p key={participant?.id}>{participant?.name}</p>)
      }
      <p>You entered a room!</p>
      <p>Song Queue:</p>
      <SpotifyPlayer queue={songQueue} />
      {!playerHasSelected && <SongSearch/>}
    </div>
  );
};
export default Room;
