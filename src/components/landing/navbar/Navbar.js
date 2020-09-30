import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import woloxLogo from "../../../assets/logo_full_color.svg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const isAuthenticated = token ? true : false;

  return (
    <>
      {/* Start Navbar */}
      <div id='home' className={`${styles.navbar} ${styles.elemCenter}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.parent} ${styles.leftRight}`}>
            <div className={`${styles.navbarHeader}`}>
              <button className={`${styles.toggle}`}>
                <span />
                <span />
                <span />
              </button>
              <a
                href="https://wolox.com.ar"
                className={`${styles.navbarBrand} ${styles.link}`}
              >
                <img className={styles.logoImage} src={woloxLogo} />
              </a>
            </div>
            <ul className={`${styles.nav} ${styles.navlist}`} id="links">
              <li className={`${styles.active}`}>
                <a href="#home" className={styles.link} data-value="about">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#tech" className={styles.link} data-value="port">
                  Tecnologías
                </a>
              </li>
              <li>
                <a href="#benefits" className={styles.link} data-value="foll">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#requeriments" className={styles.link} data-value="cont">
                  Requerimientos
                </a>
              </li>
              <li>
                {!isAuthenticated && 
                  <Link
                    to={"/auth/login"}
                    className={`${styles.link} ${styles.loginButton}`}
                    data-value="cont"
                  >
                    Login
                  </Link>
                }
              </li>
            </ul>
          </div>
          <div className={`${styles.clearfix}`} />
        </div>
      </div>
      {/* End Navbar */}
    </>
  );
};

export default Navbar;
