import { types } from "../types/types";
import swal from "sweetalert";

export const startLogin = (values) => {
  
  const {email, password, keepLogin} = values;

  return async (dispatch) => {

    const url =
      "http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({email,password}),
      });
      const data = await response.json();
      dispatch(login(data.token, keepLogin));
    } catch (error) {
      console.log(error)
      swal("Error", "Sorry. Failed to login", "error");
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    dispatch(logout());
  };
};

export const login = (token,keepLogin) => {
  if(keepLogin) localStorage.setItem('token', token)
  return {
    type: types.authLogin,
    payload: token,
  }
};

export const logout = () => ({
  type: types.authLogout,
});
