import React, { useState, useEffect } from 'react';
import { useSocketSelector, useSocket } from 'react-socket-io-hooks';
import SpotifyPlayer from '../SpotifyPlayer/SpotifyPlayer';
import { SongSearch } from '../SongSearch/SongSearch';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { spotifyRedirectLogin } from '../OAuth/OAuth';

const Room = () => {
  let { participants, songQueue, round, judge, winner, currentPrompt } = useSocketSelector(state => state);
  const [playerHasSelected, setPlayerHasSelected] = useState(false);
  const [isJudge, setIsJudge] = useState(false);
  const { room_id } = useParams();
  console.log(room_id);
  const socket = useSocket();
  const history = useHistory();
  const dispatch = useDispatch();
  let { token } = useSelector(state => state);

  useEffect(() => {
    if(!token) {
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
      token = hash.access_token;
      if(!token) {
        spotifyRedirectLogin(process.env.SPOTIFY_REDIRECT_ROOM + '/' + room_id);
      }
  
      console.log('setting token');
      dispatch({ type: 'SET_TOKEN', payload: token });
      console.log('joiining room');
      socket.emit('JOIN', { room_id: room_id, name: 'player' });
    }
  }, [token]);

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
