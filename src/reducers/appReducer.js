export const initialState = {
  token: ''
};

export default function reducer(state, action) {
  switch(action.type){
    case 'SET_TOKEN':
      console.log(action.payload, action.type);
      return { ...state, token: action.payload };

    case 'SET_USERNAME':
      return { ...state, username: action.payload };
      
    default:
      return state;
  }
}
