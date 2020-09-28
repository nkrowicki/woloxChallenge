import { types } from "../types/types";

export const startLogin = () => {
  return async (dispatch) => {
    // Login with api wolox
    dispatch(login('token', 'name'))
  };
};

export const startLogout = () => {
    return async (dispatch) => {
        // Logout
        dispatch(logout())
    }
}

export const login = (token, name) => ({
  type: types.authLogin,
  payload: {
    token,
    name,
  },
});

export const logout = () => ({
    type: types.authLogout
})