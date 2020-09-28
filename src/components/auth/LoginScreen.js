import React from "react";
import styles from "./LoginScreen.module.scss";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { validateEmail } from "../../helpers/validateEmail";
import swal from "sweetalert";
import { startLogin } from "../../actions/auth";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const initialForm = {
    email: "",
    password: "",
  };

  const [valuesForm, handleInputChange] = useForm(initialForm);
  const { email, password } = valuesForm;

  const handleLogin = () => {
    if (!validateEmail(valuesForm.email)) {
      swal("Error", "Invalid mail", "error");
      return false;
    }
    if (password.length <1 ) {
        swal("Error", "Invalid password", "error");
        return false;
      }
  

    dispatch(startLogin(valuesForm));
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      handleLogin();
    }
  };

  return (
    <div className={styles.loginBox}>
      <h2>Wolox Login</h2>
      <form>
        <div className={styles.userBox}>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
            onKeyPress={handleKeypress}
          />
          <label>Email</label>
        </div>
        <div className={styles.userBox}>
          <input
            type="password"
            value={password}
            onChange={handleInputChange}
            name="password"
            required
            onKeyPress={handleKeypress}
          />
          <label>Password</label>
        </div>
        <a onClick={handleLogin} className={styles.pointer}>
          <span />
          <span />
          <span />
          <span />
          LOGIN
        </a>
      </form>
    </div>
  );
};

export default LoginScreen;
