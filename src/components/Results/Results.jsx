import React from 'react';
import { useSocketSelector, useSocket } from 'react-socket-io-hooks';
import { useHistory } from 'react-router-dom';

const Results = () => {
  const history = useHistory();
  const socket = useSocket();
  const { winner, participants, room_id } = useSocketSelector(state => state);

  const handleHomeClick = () => {
    socket.emit('LEAVE_ROOM', room_id);
    history.push('/home');
  };
  return (
    <div>
      <h1>Winner: {winner?.name}</h1>
      <h2>Participants</h2>
      {
        participants.map(participant => <p key={participant.id}><h3>{participant?.name}</h3><h4>Score: {participant?.score}</h4></p>)
      }
      <button onClick={handleHomeClick}>Home</button>
      
    </div>
  );
};

export default Results;
