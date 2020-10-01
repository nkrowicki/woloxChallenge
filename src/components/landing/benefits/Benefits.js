import React from "react";
import styles from "./Benefits.module.scss";
import Benefit from "./Benefit";
import flexibilidad from "../../../assets/Ic_Hour.svg";
import homeOffice from "../../../assets/Ic_HomeOffice.svg";
import workshops from "../../../assets/Ic_Workshops.svg";
import snacks from "../../../assets/Ic_DrinkSnacks.svg";
import remote from "../../../assets/Ic_laptop.svg";
import lastTechnologies from "../../../assets/Ic_brain.svg";

const Benefits = () => {
  return (
    <div id="benefits" className={styles.heroContainer}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1 className={`${styles.hh1} titleBenefits`}>
            Entre los beneficios que ofrecemos se encuentran
            <span className={styles.blueWolox}>{" ;)"}</span>
          </h1>
        </div>

        <div className={styles.benefits}>
          <Benefit img={flexibilidad} text={"Flexibilidad Horaria"} />
          <Benefit img={homeOffice} text={"Home Office"} />
          <Benefit img={workshops} text={"Capacitaciones y workshops"} />
          <Benefit img={snacks} text={"Snacks, frutas y bebidas gratis"} />
          <Benefit img={remote} text={"Semana Remota"} />
          <Benefit
            img={lastTechnologies}
            text={"Trabajar en últimas tecnologías"}
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
