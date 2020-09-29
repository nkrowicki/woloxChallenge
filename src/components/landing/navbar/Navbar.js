import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import woloxLogo from '../../../assets/logo_full_color.svg';

const Navbar = () => {
  return (
    <>
      {/* Start Navbar */}
      <div className={`${styles.navbar} ${styles.elemCenter}`} >
        <div className={`${styles.container}`}>
          <div className={`${styles.parent} ${styles.leftRight}`} >
            <div className={`${styles.navbarHeader}`}>
              <button className={`${styles.toggle}`}>
                <span />
                <span />
                <span />
              </button>
              <a href='https://wolox.com.ar' className={`${styles.navbarBrand} ${styles.link}`}>
                <img className={styles.logoImage} src={woloxLogo} />
              </a>
            </div>
            <ul className={`${styles.nav} ${styles.navlist}`}  id="links">
              <li className={`${styles.active}`}>
                <a href="#" className={styles.link} data-value="about">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className={styles.link} data-value="port">
                  Tecnologías
                </a>
              </li>
              <li>
                <a href="#" className={styles.link} data-value="foll">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#" className={styles.link} data-value="cont">
                  Requerimientos
                </a>
              </li>
              <li>
                <Link to={'/auth/login'} className={`${styles.link} ${styles.loginButton}`} data-value="cont">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.clearfix}`}/>
        </div>
      </div>
      {/* End Navbar */}
    </>
  );
};

export default Navbar;
