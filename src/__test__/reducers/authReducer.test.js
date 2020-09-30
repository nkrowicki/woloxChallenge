import authReducer from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Reducers", () => {

  test("default: Return initial state", () => {
    const state = {};
    expect(authReducer(state, "")).toEqual(state);
  });

  test("authLogout: Return initial state", () => {
    const state = {};
    const initialState = {
      token: null,
    };
    const action = {
      type: types.authLogout,
    };
    expect(authReducer(state, action)).toEqual(initialState);
  });

  test("authLogout: Return initial state", () => {
    const state = {};
    const action = {
      type: types.authLogin,
      payload: 'tokenWolox'
    };
    expect(authReducer(state, action)).toEqual({...state, token: action.payload});
  });

  

});
