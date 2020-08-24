import React, { useState } from 'react';
import { useSocket, useSocketSelector } from 'react-socket-io-hooks';
const SpotifyWebApi = require('spotify-web-api-js');
const spotifyApi = new SpotifyWebApi();

export const SongSearch = () => {
  const [songQuery, setSongQuery] = useState('');
  const socket = useSocket();
  let { token } = useSocketSelector(state => state);
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = ({ target }) => {
    setSongQuery(target.value);
  };

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

  const handleSelect = (uri) => {
    console.log('selected: ', uri);
    socket.emit('CHOICE', uri);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='song-search'
          placeholder='song-search'
          onChange={handleChange}>
        </input>
        <button>Search</button>
      </form>
      <div>
        {
          searchResults.map((songData, i) => {
            const { uri, title, artist } = songData;
            return <ul key={i}>
              {/* <li>uri: {songData.uri}</li> */}
              <li>{title}</li>
              <li>{artist}</li>
              <button onClick={() => handleSelect(uri)}>Select</button>
            </ul>;
          })
        }
      </div>
    </>
  );
};

