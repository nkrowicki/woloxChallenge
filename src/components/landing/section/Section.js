import React from "react";
import styles from "./Section.module.scss";
import image from "../../../assets/twitter.svg";
import { useTranslation } from "react-i18next";

const Section = () => {
  const [t] = useTranslation();

  return (
    <div className={styles.heroContainer}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1 className={styles.hh1}>
            <span className={styles.greenWolox}>350 +</span>{" "}
            <span className={`${styles.blueWolox} textWoloxers`}>Woloxers</span>
          </h1>
          <div className={styles.twitterBox}>
            <img src={image} className={styles.imageTwitter} />
            <h2 className={styles.twitterText}>@Wolox</h2>
          </div>
          <button className={styles.followTwitter}>
            {t("section.buttonFollow")}
          </button>
        </div>

        <div className={styles.rightSide}>
          <h2 className={styles.hh2}>
            {t("section.title1")}
            <span className={`${styles.blueWolox} ${styles.boldText}`}>
              {t("section.title2")}
            </span>{" "}
            <span className={`${styles.greenWolox} ${styles.boldText} `}>
              {t("section.title3")}
            </span>
            {t("section.title4")}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Section;
