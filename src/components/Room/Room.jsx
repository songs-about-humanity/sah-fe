import React, { useState, useEffect } from 'react';
import { useSocketSelector, useSocket } from 'react-socket-io-hooks';
import SpotifyPlayer from '../SpotifyPlayer/SpotifyPlayer';
import { SongSearch } from '../SongSearch/SongSearch';
import { useHistory } from 'react-router-dom';

const Room = () => {
  let { room_id, participants, songQueue, round, judge, winner, currentPrompt } = useSocketSelector(state => state);
  const [playerHasSelected, setPlayerHasSelected] = useState(false);
  const [isJudge, setIsJudge] = useState(false);
  const socket = useSocket();
  const history = useHistory();

  useEffect(() => {
    document.title = room_id;
  }, [room_id]);

  useEffect(() => {
    if(winner) {
      history.push('/results');
    }
  }, [winner]);

  useEffect(() => {
    setPlayerHasSelected(false);
  }, [round]);

  useEffect(() => {
    participants.forEach(participant => {
      if(participant.hasSelected === true && participant.id === socket.id) setPlayerHasSelected(true);
    });
  }, [participants]);

  useEffect(() => {
    setIsJudge(socket.id === judge?.id);
  }, [judge]);

  return (
    <div>
      <h1>{room_id}</h1>
      <p>Judge: {judge?.name}</p>
      <p>Participants</p> {
        participants.map(participant => <div key={participant.id}><h3>{participant?.name}</h3><h4>Score: {participant?.score}</h4></div>)
      }
      <p>Prompt: {currentPrompt}</p>
      <p>Song Queue:</p>
      <SpotifyPlayer queue={songQueue} isJudge={isJudge} />
      {(!playerHasSelected && !isJudge) && <SongSearch/>}
    </div>
  );
};
export default Room;
