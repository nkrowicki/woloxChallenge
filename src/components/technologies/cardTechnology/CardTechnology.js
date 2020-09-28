import React from "react";
import PropTypes from "prop-types";
import styles from "./CardTechnology.module.scss";

const CardTechnology = ({
  tech,
  year,
  author,
  license,
  language,
  type,
  logo,
}) => {
  return (
    <div className={`${styles.card} ${styles.center}`}>
      <img
        className={styles.image}
        src={logo}
      />
      <h1 className={styles.title}>{tech}</h1>
      <h2 className={styles.subtitle}>{author}</h2>

      {/* year, license, language, type */}
      <div className={styles.detailsContainer}>
        <div className={styles.property}>
          <span className={styles.titleProperty}>{type}</span>
          <span className={styles.nameProperty}>Type</span>
        </div>
        <div className={styles.property}>
          <span className={styles.titleProperty}>{language}</span>
          <span className={styles.nameProperty}>Language</span>
        </div>
        <div className={styles.property}>
          <span className={styles.titleProperty}>{license}</span>
          <span className={styles.nameProperty}>Licence</span>
        </div>
      </div>
      <div className={`${styles.detailsContainer} ${styles.center}`}>
        <div className={styles.property}>
          <span className={styles.titleProperty}>{year}</span>
          <span className={styles.nameProperty}>Year</span>
        </div>
      </div>
    </div>
  );
};

CardTechnology.propTypes = {
  tech: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default CardTechnology;
