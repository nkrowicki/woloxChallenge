import React from "react";
import styles from "./ErrorComponent.module.scss";

const Error = () => {
  return (
    <div className={styles.main}>
      <div className={styles.fof}>
        <h1>Hi recruiters!</h1>
        <h2>Something wrong has happened, <a className={styles.me} target="_blank" rel="noopener noreferrer" href="https://nahuelkrowicki.netlify.app/">hire me</a> to fix it!</h2>
      </div>
    </div>
  );
};

export default Error;
