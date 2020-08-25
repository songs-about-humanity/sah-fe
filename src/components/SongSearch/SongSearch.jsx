import React, { useState } from 'react';
import { useSocket, useSocketSelector } from 'react-socket-io-hooks';
const SpotifyWebApi = require('spotify-web-api-js');
const spotifyApi = new SpotifyWebApi();

const ResultsList = ({ results, choiceMade, handleSelect }) => {
  if(!results || choiceMade) return null;

  return results.map((songData, i) => {
    const { title, artist } = songData;
    return <ul key={i}>
      <li>{title}</li>
      <li>{artist}</li>
      <button onClick={() => handleSelect(songData)}>Select</button>
    </ul>;
  });
};

// eslint-disable-next-line react/prop-types
const SearchForm = ({ choiceMade, handleSubmit, handleChange }) => {
  if(choiceMade) return null;

  return <form onSubmit={handleSubmit}>
    <input
      type='text'
      name='song-search'
      placeholder='song-search'
      onChange={handleChange}>
    </input>
    <button>Search</button>
  </form>;
};

export const SongSearch = () => {
  const socket = useSocket();
  const { room_id, token } = useSocketSelector(state => state);

  const [songQuery, setSongQuery] = useState('');

  const handleChange = ({ target }) => {
    setSongQuery(target.value);
  };

  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    spotifyApi.setAccessToken(token);
    spotifyApi.searchTracks(songQuery)
      .then(data => {
        console.log(data.tracks.items);
        
        const relevantData = data.tracks.items.map(result => ({
          uri: result.uri,
          title: result.name,
          artist: result.artists[0].name
        }));

        setSearchResults(relevantData);
      }, error => {
        console.error(error);
      });

    console.log(`you've sent the search ${songQuery}`);
  };

  const [choiceMade, setChoiceMade] = useState(false);
  
  const handleSelect = (songData) => {
    console.log('selected: ', songData);
    socket.emit('CHOICE', { room_id, songData });
    setChoiceMade(true);
  };

  return (
    <>
      <SearchForm
        choiceMade={choiceMade}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ResultsList
        results={searchResults}
        choiceMade={choiceMade}
        handleSelect={(songData) => handleSelect(songData)} 
      />
    </>
  );
};
