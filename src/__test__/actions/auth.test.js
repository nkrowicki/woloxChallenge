import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";

import {
  login,
  startLogin,
  logout,
  saveLogin,
  startLogout,
} from "../../actions/auth";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Actions Auth", () => {
  test("startLogin", () => {

    fetchMock.getOnce(
      "https://private-8e8921-woloxfrontendinverview.apiary-mock.com/login",
      {
        method: "POST",
        body: {
          name: "Nahuel Krowicki",
        },
        headers: { "content-type": "application/json" },
      }
    );
    
    const store = mockStore({});

    const values = {
      email: "nahuelkrowicki@gmail.com",
      password: "w0l0X2020.secureP4ssWOoooord1",
      keepLogin: false,
    };

    return store.dispatch(startLogin(values)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual([]); //im not sure if it's correct.
    });
  });

  test("login", () => {
    const token = "woloxToken";
    const expected = {
      type: types.authLogin,
      payload: token,
    };
    expect(login(token)).toEqual(expected);
  });

  test("logout", () => {
    const expected = {
      type: types.authLogout,
    };
    expect(logout()).toEqual(expected);
  });
});
