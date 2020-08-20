
export const initialState = {
  user: {}
};

export default function reducer(state, action) {
  switch(action.type){
    case 'SET_ID':
      return { ...state, user: action.payload };

    default:
      return state;
  }
}
