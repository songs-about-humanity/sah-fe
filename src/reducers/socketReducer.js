export const initialState = {
  room_id: null,
  host: null,
  participants: [],
  songQueue: [],
  nowPlaying: '',
  judge: null,
  round: 0
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'ROOM_INFO':
      return { ...state, 
        room_id: action.payload.room_id, 
        host: action.payload.room.host,
        participants: action.payload.room.participants,
        token: action.payload.room.token,
        songQueue: action.payload.room.songQueue,
        judge: action.payload.room.judge,
        round: action.payload.room.round,
        currentPrompt: action.payload.room.currentPrompt
      };
    case 'PLAY_SONG':
      return { ...state, nowPlaying: action.payload };
    case 'PAUSE': 
      return { ...state, nowPlaying: '' };
    case 'GAME_WINNER': 
      return { ...state, winner: action.payload };
    case 'CODE':
      return { ...state, room_id: action.payload };
    case 'RESET':
      return { 
        room_id: null,
        host: null,
        participants: [],
        songQueue: [],
        nowPlaying: '',
        judge: null,
        round: 0
      };
    default: 
      return state;
  }
}
