import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../../assets/Ic_Wolox_Footer.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const [t] = useTranslation();

  return (
    <div className={styles.footer}>
      <div className={styles.center}>

        <div className={styles.column}>

          <h2 className={`${styles.color} ${styles.hh2} ${styles.textFooter}`}>
            {t('footer.title1')}
            <span className={styles.colorWolox}>{t('footer.title2')}</span>
          </h2>

          <h3 className={`${styles.color} ${styles.hh3} ${styles.textFooter}`}>
            {t('footer.subTitle')}</h3>

          <a href="https://wolox.com.ar">
            <button id="buttonFooter" className={styles.more}>{t('footer.footerButton')}</button>
          </a>

        </div>

      </div>

      <div className={`${styles.center} ${styles.logoImage}`}>
        <img src={logo} />
      </div>
    </div>
  );
};

export default Footer;
