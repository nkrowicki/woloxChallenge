import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import woloxLogo from "../../../assets/logo_full_color.svg";
import spanish from "../../../assets/spanish.svg";
import english from "../../../assets/english.svg";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const isAuthenticated = token ? true : false;
  const [t, i18n] = useTranslation();

  const actualLanguage = i18n.language;
  const toLang = actualLanguage === "es" ? "en" : "es";

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      {/* Start Navbar */}
      <div id="home" className={`${styles.navbar} ${styles.elemCenter}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.parent} ${styles.leftRight}`}>
            <div className={`${styles.navbarHeader}`}>
              <a
                href="https://wolox.com.ar"
                className={`${styles.navbarBrand} ${styles.link}`}
              >
                <img className={styles.logoImage} src={woloxLogo} />
              </a>
            </div>
            <ul className={`${styles.nav} ${styles.navlist}`} id="links">
              <li>
                <a href="#home" className={styles.link} data-value="about">
                  {t(`navbar.home`)}
                </a>
              </li>
              <li>
                <a href="#tech" className={styles.link} data-value="port">
                  {t(`navbar.tech`)}
                </a>
              </li>
              <li>
                <a href="#benefits" className={styles.link} data-value="foll">
                  {t(`navbar.benefits`)}
                </a>
              </li>
              <li>
                <a
                  href="#requeriments"
                  className={styles.link}
                  data-value="cont"
                >
                  {t(`navbar.requeriments`)}
                </a>
              </li>
              <li
                className={styles.link}
                onClick={() => handleChangeLanguage(toLang)}
              >
                <img
                  className={styles.languageFlag}
                  src={(toLang === "es" ? spanish : english)}
                />
              </li>
              <li>
                {!isAuthenticated && 
                  <Link
                    to={"/auth/login"}
                    className={`${styles.link} ${styles.loginButton}`}
                    data-value="cont"
                  >
                    {t(`navbar.login`)}
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
