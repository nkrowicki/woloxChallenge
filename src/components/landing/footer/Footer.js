import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../../assets/Ic_Wolox_Footer.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.center}>

        <div className={styles.column}>

          <h2 className={`${styles.color} ${styles.hh2} ${styles.textFooter}`}>
            Gracias por{" "}
            <span className={styles.colorWolox}>completar el ejercicio</span>
          </h2>

          <h3 className={`${styles.color} ${styles.hh3} ${styles.textFooter}`}>
            Te invitamos a ver más información</h3>

          <a href="https://wolox.com.ar">
            <button className={styles.more}>Conocer más</button>
          </a>

        </div>

      </div>

      <div className={styles.center}>
        <img src={logo} />
      </div>
    </div>
  );
};

export default Footer;
