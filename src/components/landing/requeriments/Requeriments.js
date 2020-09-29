import React from "react";
import styles from "./Requeriments.module.scss";
import dotGreen from "../../../assets/Ic_Bullet_1.svg";
import dotBlue2 from "../../../assets/Ic_Bullet_2.svg";
import dotBlue from "../../../assets/Ic_Bullet_3.svg";

const Requeriments = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.container}>

        <div className={styles.leftSide}>
          <h1 className={styles.hh1}>Requerimientos</h1>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.listado}>
            <img className={styles.dotItem} src={dotGreen} />
            <p className={styles.list}>Estudiantes avanzados o recibidos de carreras del rubro informático, sistemas o electrónicos.</p>
          </div>
          <div className={styles.listado}>
            <img className={styles.dotItem} src={dotBlue2} />
            <p className={styles.list}>Inglés intermedio/avanzado</p>
          </div>
          <div className={styles.listado}>
            <img className={styles.dotItem} src={dotBlue} />
            <p className={styles.list}>Conocimiento en metodologías {'ágiles (deseable)'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requeriments;
