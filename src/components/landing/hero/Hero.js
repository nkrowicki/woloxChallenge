import React from "react";
import styles from "./Hero.module.scss";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [t] = useTranslation();

  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.leftSide}>
          <h1 className={styles.hh1}>
            {t("hero.title1")}
            <span className={styles.regularText}>{t("hero.title2")}
            </span>
            {t("hero.title3")}
            <span
              className={`${styles.greenWolox} ${styles.boldText} spanText`}
            >
              {t("hero.title4")}
            </span>
          </h1>
        </div>
        <div className={styles.rightSide}>
          <img
            src="/assets/ImgHero/Ic_ilustra_Hero.png"
            className={styles.imageHero}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
