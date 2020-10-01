import React, { useRef } from "react";
import styles from "./LoginScreen.module.scss";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { validateEmail } from "../../helpers/validateEmail";
import swal from "sweetalert";
import { startLogin } from "../../actions/auth";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const checkboxEl = useRef(false);

  const initialForm = {
    email: "",
    password: "",
    keepLogin: false,
  };

  const [valuesForm, handleInputChange] = useForm(initialForm);
  const { email, password } = valuesForm;

  const handleLogin = () => {
    if (!validateEmail(email)) {
      swal("Error", "Invalid mail", "error");
      return false;
    }
    if (password.length < 1) {
      swal("Error", "Invalid password", "error");
      return false;
    }

    const values = { ...valuesForm, keepLogin: checkboxEl.current.checked };
    dispatch(startLogin(values));
  };

  const handleCheckbox = () => {
    checkboxEl.current.checked = !checkboxEl.current.checked;
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      handleLogin();
    }
  };

  return (
    <>
      <div className={styles.loginBox}>
        <h2 className={styles.titleLogin}>Wolox Login</h2>
        <form>
          <div className={styles.userBox}>
            <input
              className={styles.inputForm}
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
              className={styles.inputForm}
              type="password"
              value={password}
              onChange={handleInputChange}
              name="password"
              required
              onKeyPress={handleKeypress}
            />
            <label>Password</label>
          </div>

          <div className={styles.con}>
            <input
              ref={checkboxEl}
              type="checkbox"
              name="keepLogin"
              className={styles.check}
            />
            <span
              onClick={handleCheckbox}
              className={`${styles.keepSesion} ${styles.pointer}`}
            >
              Keep login
            </span>
          </div>
          <div className={styles.buttons}>
            <a onClick={handleLogin} className={`${styles.pointer} ${styles.buttonLogin}`}>
              <span className={styles.spancito} />
              <span className={styles.spancito} />
              <span className={styles.spancito} />
              <span className={styles.spancito} />
              LOGIN
            </a>
            <Link to={"/"} className={styles.goToLandingButton}>
              Go to Landing Page
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
