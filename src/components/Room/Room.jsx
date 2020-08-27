import React, { useState, useEffect } from 'react';
import { useSocketSelector, useSocket } from 'react-socket-io-hooks';
import SpotifyPlayer from '../SpotifyPlayer/SpotifyPlayer';
import { SongSearch } from '../SongSearch/SongSearch';
import { useHistory } from 'react-router-dom';

const Room = () => {
  let { room_id, host, participants, songQueue, round, judge, winner, currentPrompt } = useSocketSelector(state => state);
  const [playerHasSelected, setPlayerHasSelected] = useState(false);
  const [isJudge, setIsJudge] = useState(false);
  const socket = useSocket();
  const history = useHistory();

  useEffect(() => {
    document.title = room_id;
  }, [room_id]);

  useEffect(() => {
    
    console.log('this is the current prompt', currentPrompt);
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
    console.log(isJudge);
  }, [judge]);

  // [a, b, c, d]
  // [0] judge is a
  // useEffect(() => {
  //   let judgeIndex = round;

  //   if(participants.length <= round) {
  //     judgeIndex = round % participants.length;
  //   }
  //   setJudge(participants[judgeIndex]?.name);
  // }, [round, judge]);
  // have 'hasSelected' in state
  // need to see if an id of a person who has selected is the current user
  // disable button if that is the case

  return (
    <div>
      <h1>{room_id}</h1>
      <p>Judge: {judge?.name}</p>
      <p>Participants</p> {
        participants.map(participant => <><h3 key={participant?.id}>{participant?.name}</h3><h4>Score: {participant?.score}</h4></>)
      }
      <p>Prompt: {currentPrompt}</p>
      <p>Song Queue:</p>
      <SpotifyPlayer queue={songQueue} isJudge={isJudge} />
      {(!playerHasSelected && !isJudge) && <SongSearch/>}
    </div>
  );
};
export default Room;
