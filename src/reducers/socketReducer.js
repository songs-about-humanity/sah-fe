export const initialState = {
  host: null,
  participants: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'JOIN': 
      return { ...state, host: action.payload.host, participants: action.payload.participants };

    default: 
      return state;
  }
}
