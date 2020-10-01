import React from "react";
import styles from "./Technologies.module.scss";
import image from '../../../assets/Ic_Tecnologys.svg';

const Technologies = () => {
  return (
    <div id='tech' className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.leftSide}>
          <h2 className={styles.hh2}>
            Estamos buscando incorporar gente increíble para estas tecnologías:
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
