import React from "react";
import styles from "./Technologies.module.scss";
import image from '../../../assets/Ic_Tecnologys.svg';

const Technologies = () => {
  return (
    <div id='tech' className={styles.heroContainer}>
      <div className={styles.hero}>
        <div>
          <h2 className={styles.hh2}>
            Estamos buscando incorporar gente increíble para estas tecnologías:
          </h2>
        </div>
        <img src={image} className={styles.imageHero} />
        <div className={styles.putImage}></div>
      </div>
    </div>
  );
};

export default Technologies;
