import React from 'react'
import styles from './Benefit.module.scss';

const Benefit = ({img, text}) => {
    return (
        <div id='benefits' className={styles.benefit}>
            <img src={img} />
            <p className={styles.text}>{text}</p>        
        </div>
    )
}

export default Benefit
