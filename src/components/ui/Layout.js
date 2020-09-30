import React from "react";
import styles from "./Layout.module.scss";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
