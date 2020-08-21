export const initialState = {
  room_id: null,
  host: null,
  participants: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'ROOM_INFO':
      return { ...state, 
        room_id: action.payload.room_id, 
        host: action.payload.room.host,
        participants: action.payload.room.participants,
        token: action.payload.room.token
      };
    case 'UPDATE_PARTICIPANT_LIST':
      return { ...state, participants: action.payload.participants };
    case 'SET_ROOM_INFO':
      return action.payload;

    default: 
      return state;
  }
}
