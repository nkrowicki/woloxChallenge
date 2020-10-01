import { types } from "../types/types";

const initialState = {
  token: null,
  isLoading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return { ...state, token: action.payload };
    case types.authLogout:
      return initialState;

    case types.startLogin:
      return { ...state, isLoading: true };

    case types.endLogin:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default authReducer;
