import { LOGIN, LOGOUT } from "../actions/users";

const initialState = {
    userInfo: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          userInfo: action.payload,
        };
      case LOGOUT:
        return {
          ...state,
          userInfo: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  