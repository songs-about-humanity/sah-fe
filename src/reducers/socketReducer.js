export const initialState = {
  room_id: null,
  host: null,
  participants: [],
  token: '',
  songQueue: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'ROOM_INFO':
      return { ...state, 
        room_id: action.payload.room_id, 
        host: action.payload.room.host,
        participants: action.payload.room.participants,
        token: action.payload.room.token,
        songQueue: action.payload.room.songQueue
      };
    case 'UPDATE_PARTICIPANT_LIST':
      return { ...state, participants: action.payload.participants };
    // case 'PLAY_SONG':
    //   return action.payload;

    default: 
      return state;
  }
}
