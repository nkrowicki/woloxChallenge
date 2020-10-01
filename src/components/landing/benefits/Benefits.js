import React from "react";
import styles from "./Benefits.module.scss";
import Benefit from "./Benefit";
import flexibilidad from "../../../assets/Ic_Hour.svg";
import homeOffice from "../../../assets/Ic_HomeOffice.svg";
import workshops from "../../../assets/Ic_Workshops.svg";
import snacks from "../../../assets/Ic_DrinkSnacks.svg";
import remote from "../../../assets/Ic_laptop.svg";
import lastTechnologies from "../../../assets/Ic_brain.svg";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const [t] = useTranslation();

  return (
    <div id="benefits" className={styles.heroContainer}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1 className={`${styles.hh1} titleBenefits`}>
            {t('benefits.title')}
            <span className={styles.blueWolox}>{t('benefits.title2')}</span>
          </h1>
        </div>

        <div className={styles.benefits}>
          <Benefit img={flexibilidad} text={t('benefits.benefit1')} />
          <Benefit img={homeOffice} text={t('benefits.benefit2')} />
          <Benefit img={workshops} text={t('benefits.benefit3')} />
          <Benefit img={snacks} text={t('benefits.benefit4')} />
          <Benefit img={remote} text={t('benefits.benefit5')} />
          <Benefit
            img={lastTechnologies}
            text={t('benefits.benefit6')}
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
