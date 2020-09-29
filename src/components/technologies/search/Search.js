import React from "react";
import styles from "./Search.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { startLogout } from "../../../actions/auth";
import { orderTechnologies } from "../../../actions/technology";

const Search = ({ handleSearch }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleOrder = () => {
    dispatch(orderTechnologies());
  };

  return (
    <div className={styles.Card}>
      <div className={styles.CardInner}>
        <label className={styles.label}>
          Hi recruiters! Search your favourite technology, order it or logout.
        </label>
        <div className={styles.container}>
          <div className={styles.containerSection}>
            <div className={`${styles.Icon} ${styles.iconHide}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#657789"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div className={styles.InputContainer}>
              <input
                className={styles.inputSearch}
                onChange={handleSearch}
                placeholder="Example: node..."
              />
            </div>
          </div>

          <div className={`${styles.containerSection}`}>
            <div className={`${styles.tooltip}`}>
              <div
                onClick={handleOrder}
                className={`${styles.IconLogout} ${styles.order} ${styles.Icons}`}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                  />
                </svg>
              </div>
              <span className={styles.tooltiptext}>Order Asc/Desc</span>
            </div>

            <div className={`${styles.tooltip}`}>
              <div
                onClick={handleLogout}
                className={`${styles.IconLogout} ${styles.logout} ${styles.Icons}`}
              >
                <svg
                  height="1em"
                  viewBox="0 0 511 512"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m361.5 392v40c0 44.113281-35.886719 80-80 80h-201c-44.113281 0-80-35.886719-80-80v-352c0-44.113281 35.886719-80 80-80h201c44.113281 0 80 35.886719 80 80v40c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-40c0-22.054688-17.945312-40-40-40h-201c-22.054688 0-40 17.945312-40 40v352c0 22.054688 17.945312 40 40 40h201c22.054688 0 40-17.945312 40-40v-40c0-11.046875 8.953125-20 20-20s20 8.953125 20 20zm136.355469-170.355469-44.785157-44.785156c-7.8125-7.8125-20.476562-7.8125-28.285156 0-7.8125 7.808594-7.8125 20.472656 0 28.28125l31.855469 31.859375h-240.140625c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h240.140625l-31.855469 31.859375c-7.8125 7.808594-7.8125 20.472656 0 28.28125 3.90625 3.90625 9.023438 5.859375 14.140625 5.859375 5.121094 0 10.238281-1.953125 14.144531-5.859375l44.785157-44.785156c19.496093-19.496094 19.496093-51.214844 0-70.710938zm0 0" />
                </svg>
              </div>
              <span className={styles.tooltiptext}>Logout and hire me!</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
