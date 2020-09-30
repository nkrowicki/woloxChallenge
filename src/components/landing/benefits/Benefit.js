import React from 'react';
import styles from './Benefit.module.scss';
import PropTypes from "prop-types";

const Benefit = ({ img, text }) => {
  return (
    <div id='benefits' className={styles.benefit}>
      <img src={img} />
      <p className={styles.text}>{text}</p>        
    </div>
  );
};

Benefit.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Benefit;
