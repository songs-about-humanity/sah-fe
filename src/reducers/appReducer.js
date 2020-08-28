export const initialState = {
  token: null
};

export default function reducer(state, action) {
  switch(action.type){
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    default:
      return state;
  }
}
