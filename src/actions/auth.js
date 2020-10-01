import { types } from "../types/types";
import swal from "sweetalert";
import { clearTechnologies } from "./technology";

export const startLogin = (values) => {
  const { email, password, keepLogin } = values;

  return async (dispatch) => {
    const url =
      "http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      dispatch(saveLogin(data.token, keepLogin));
    } catch (error) {

      swal("Error", "Sorry. Failed to login", "error");
    }
  };
};

export const startLogout = () => {
  localStorage.removeItem('token');
  return (dispatch) => {
    dispatch(clearTechnologies());
    dispatch(logout());
  };
};

export const saveLogin = (token, keepLogin) => {
  if (keepLogin) localStorage.setItem("token", token);
  return (dispatch) => {
    dispatch(login(token));
  };
};

export const logout = () => ({
  type: types.authLogout,
});

export const login = (token) => ({
  type: types.authLogin,
  payload: token,
});
