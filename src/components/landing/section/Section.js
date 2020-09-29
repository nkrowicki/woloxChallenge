import React from "react";
import styles from "./Section.module.scss";
import image from "../../../assets/twitter.svg";

const Section = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1 className={styles.hh1}>
            <span className={styles.greenWolox}>350 +</span>{' '}
            <span className={styles.blueWolox}>Woloxers</span>
          </h1>
          <div className={styles.twitterBox}>
            <img src={image} className={styles.imageTwitter} />
            <h2 className={styles.twitterText}>@Wolox</h2>
          </div>
            <button className={styles.followTwitter}>Siguenos</button>
        </div>

        <div className={styles.rightSide}>
          <h2 className={styles.hh2}>
            Trabajamos para <span className={styles.blueWolox}>convertir</span>{" "}
            <span className={styles.greenWolox}>ideas</span> en productos.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Section;
