import { combineReducers } from 'redux';

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case "SET_USER":
      return action.payload
    break;

    default:
      return state;
  }
}

export default combineReducers({
  user: userReducer
})