import { types } from "../types/types";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.authLogin:
      return {};
    case types.authLogout:
      return {};
    default:
      return state;
  }
};

export default authReducer;
