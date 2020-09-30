import { login } from "../../actions/auth";
import { types } from "../../types/types";

describe("Actions Auth", () => {
  const token = "woloxToken";
  const expected = {
    type: types.authLogin,
    payload: token,
  };

  test("Login Auth with Token", () => {
    expect(login(token)).toEqual(expected);
  });
});
