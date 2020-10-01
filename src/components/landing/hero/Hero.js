import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.leftSide}>
          <h1 className={styles.hh1}>
            Bienvenido a tu <b>Entrevista Técnica</b> en{" "}
            <span className={`${styles.greenWolox} spanText`}>Wolox</span>
          </h1>
        </div>
        <div className={styles.rightSide}>
        <img src='../../../assets/ImgHero/Ic_ilustra_Hero.png' className={styles.imageHero} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
