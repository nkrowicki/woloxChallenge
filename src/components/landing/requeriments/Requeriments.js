import React from "react";
import styles from "./Requeriments.module.scss";
import dotGreen from "../../../assets/Ic_Bullet_1.svg";
import dotBlue2 from "../../../assets/Ic_Bullet_2.svg";
import dotBlue from "../../../assets/Ic_Bullet_3.svg";
import { useTranslation } from "react-i18next";

const Requeriments = () => {
  const [t] = useTranslation();

  return (
    <div id='requeriments' className={styles.heroContainer}>
      <div className={styles.container}>

        <div className={styles.leftSide}>
          <h1 className={`${styles.hh1} requerimentsText`}>{t('requeriments.title')}</h1>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.listado}>
            <img className={styles.dotItem} src={dotGreen} />
            <p className={styles.list}>
            {t('requeriments.requeriment1')}
            </p>
          </div>
          <div className={styles.listado}>
            <img className={styles.dotItem} src={dotBlue2} />
            <p className={styles.list}>{t('requeriments.requeriment2')}</p>
          </div>
          <div className={styles.listado}>
            <img className={styles.dotItem} src={dotBlue} />
            <p className={styles.list}>{t('requeriments.requeriment3')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requeriments;
