import React from "react";
import styles from "./Search.module.scss";
import PropTypes from "prop-types";

const Search = ({handleSearch}) => {
  return (
    <div className={styles.Card}>
    <div className={styles.CardInner}>
      <label className={styles.label}>Hi recruiters! Search your favourite technology</label>
      <div className={styles.container}>
        <div className={styles.Icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#657789" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
        </div>
        <div className={styles.InputContainer}>
          <input 
          className={styles.inputSearch}
            onChange={handleSearch}
            placeholder="Example: node..." />
        </div>
      </div>
    </div>
  </div>

  );
};

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
  }
    

export default Search;
