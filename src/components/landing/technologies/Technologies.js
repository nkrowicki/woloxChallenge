import React from "react";
import styles from "./Technologies.module.scss";
import image from '../../../assets/Ic_Tecnologys.svg';
import { useTranslation } from "react-i18next";

const Technologies = () => {
  const [t] = useTranslation();
  
  return (
    <div id='tech' className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.leftSide}>
          <h2 className={styles.hh2}>
            {t('technologies.title')}
          </h2>
        </div>
        <div className={styles.rightSide}>
          <img src={image} className={styles.imageHero} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
