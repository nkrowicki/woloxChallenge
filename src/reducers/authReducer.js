import { types } from "../types/types";

const initialState = {
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return { ...state, token: action.payload };
    case types.authLogout:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
