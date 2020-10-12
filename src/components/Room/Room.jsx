import React, { useState, useEffect } from 'react';
import { useSocketSelector, useSocket } from 'react-socket-io-hooks';
import SpotifyPlayer from '../SpotifyPlayer/SpotifyPlayer';
import { SongSearch } from '../SongSearch/SongSearch';
import { useHistory } from 'react-router-dom';
import verticalEarbuds from '../../../public/assets/vertical_earbuds.svg';

const Room = () => {
  let { room_id, participants, songQueue, round, judge, winner, currentPrompt, hasStarted } = useSocketSelector(state => state);
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
    <div className="room-container">
      <section>
        <h1><span className="room-emphasis">Room:</span> {room_id}</h1>
        <p>
          Send this code to your friends to join!
        </p>
      </section>
      <section className="judge-participants-container">
        <div className="judge-container">
          <p><span className="role-emphasis">Judge:</span></p>
          <p>{judge?.name}</p>
        </div>
        <img src={verticalEarbuds} alt="earbuds" />
        <div className="participants-container">
          <p><span className="role-emphasis">Participants:</span></p> {
            participants.map(participant => <p key={participant?.id}>{participant?.name} - Score: {participant?.score}</p>)
          }
        </div>
      </section>
      {
        !hasStarted && isJudge && <div>
          <p>
            Is everyone here?
          </p>
          <button onClick={() => socket.emit('START_GAME', room_id)}>
            Start game
          </button>
        </div>
      }
      {
        hasStarted && <section>
          <section className="prompt-container">
            <p><b>Prompt: </b> {currentPrompt}</p>
          </section>
          <hr></hr>
          {(!playerHasSelected && !isJudge) && <SongSearch/>}
          <SpotifyPlayer queue={songQueue} isJudge={isJudge} />
        </section>
      }
    </div>
  );
};
export default Room;
