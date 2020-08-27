import React from 'react';
import { useSocketSelector, useSocket } from 'react-socket-io-hooks';
import { useHistory } from 'react-router-dom';
import crowd from '../../../public/assets/concert_crowd.svg';
import resultsEarbud from '../../../public/assets/results_earbud.svg';
import verticalEarbuds from '../../../public/assets/vertical_earbuds.svg';

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
      <h1>Results</h1>
      <section className="judge-participants-container">
        <div className="judge-container">
          <p><span className="role-emphasis">Winner:</span></p>
          <p>{winner?.name}</p>
        </div>
        <img src={verticalEarbuds} />
        <div className="participants-container">
          <p><span className="role-emphasis">Participants:</span></p> {
            participants.map(participant => <><p key={participant?.id}>{participant?.name} - Score: {participant?.score}</p></>)
          }
        </div>
      </section>
      <section className="play-again-container">
        <img src={crowd} alt="A crowd at a concert"/>
        <p>
          Create a new room to play again!
        </p>
        <button onClick={handleHomeClick}>Home</button>
      </section>
      <footer>
        <small><a href="https://www.vecteezy.com/free-vector/concert">Concert Vectors by Vecteezy</a></small>
      </footer>
      <img src={resultsEarbud} className="results-earbud" />
    </div>
  );
};

export default Results;
