import React from 'react';
import { useSocket } from 'react-socket-io-hooks';

export const SongSearch = () => {
  const [songQuery, setSongQuery] = useState('');
  const socket = useSocket();

  const handleChange = ({ target }) => {
    setSongQuery(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('SEARCH', songQuery);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='song-search'
          value='song-search'
          onChange={handleChange}>
        </input>
        <button>Search</button>
      </form>
    </>
  );
};

